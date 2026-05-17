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

  if (entry.count >= MAX_REQUESTS) return false;
  entry.count += 1;
  return true;
}

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte versuche es später erneut." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const { name, telefon, email, erreichbarkeit, nachricht, website } = body;

  // Honeypot — Bot hat das unsichtbare Feld ausgefüllt
  if (website) {
    return Response.json({ success: true });
  }

  // Pflichtfelder
  if (!name?.trim() || !telefon?.trim() || !email?.trim()) {
    return Response.json(
      { error: "Name, Telefon und E-Mail sind Pflichtfelder." },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "Kontaktformular <onboarding@resend.dev>",
    to: "info@siegen-web.de",
    replyTo: email.trim(),
    subject: `Neue Anfrage von ${name.trim()}`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; color: #111;">
        <h2 style="margin: 0 0 24px; font-size: 22px; color: #C94B00;">
          Neue Anfrage über siegen-web.de
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #999; width: 160px; vertical-align: top; font-size: 14px;">Name</td>
            <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 14px;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">Telefon</td>
            <td style="padding: 10px 0; color: #111; font-weight: 600; font-size: 14px; border-top: 1px solid #eee;">${telefon.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">E-Mail</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; border-top: 1px solid #eee;">${email.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">Erreichbarkeit</td>
            <td style="padding: 10px 0; color: #111; font-size: 14px; border-top: 1px solid #eee;">${erreichbarkeit?.trim() || "–"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #999; vertical-align: top; font-size: 14px; border-top: 1px solid #eee;">Projektinfo</td>
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
