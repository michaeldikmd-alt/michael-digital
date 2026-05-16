import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: IP → { count, resetAt }
const rateLimit = new Map();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 Stunde

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request) {
  // IP ermitteln
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Rate Limiting
  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte versuche es später erneut." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const { name, telefon, betrieb, nachricht, website } = body;

  // Honeypot — Bot hat das unsichtbare Feld ausgefüllt
  if (website) {
    return Response.json({ success: true }); // Still so tun als ob es klappt
  }

  // Pflichtfelder prüfen
  if (!name?.trim() || !betrieb?.trim()) {
    return Response.json(
      { error: "Name und Betrieb sind Pflichtfelder." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Kontaktformular <onboarding@resend.dev>",
    to: "info@siegen-web.de",
    replyTo: undefined,
    subject: `Neue Anfrage von ${name.trim()} – ${betrieb.trim()}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; color: #111;">
        <h2 style="margin: 0 0 24px; font-size: 22px; color: #C94B00;">
          Neue Website-Anfrage
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #999; width: 130px; vertical-align: top; font-size: 14px;">Name</td>
            <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 14px;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">Betrieb</td>
            <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 14px; border-top: 1px solid #eee;">${betrieb.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">Telefon</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; border-top: 1px solid #eee;">${telefon?.trim() || "–"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">Nachricht</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; border-top: 1px solid #eee; white-space: pre-wrap;">${nachricht?.trim() || "–"}</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }

  return Response.json({ success: true });
}
