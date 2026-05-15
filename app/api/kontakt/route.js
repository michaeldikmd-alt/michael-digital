import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, telefon, betrieb, nachricht } = await request.json();

  if (!name || !betrieb) {
    return Response.json({ error: "Name und Betrieb sind Pflichtfelder." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Kontaktformular <onboarding@resend.dev>",
    to: "michael.dik.md@gmail.com",
    subject: `Neue Anfrage von ${name} – ${betrieb}`,
    html: `
      <div style="font-family: sans-serif; max-width: 500px;">
        <h2 style="color: #C94B00;">Neue Website-Anfrage</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #999; width: 120px;">Name</td>
            <td style="padding: 8px 0; color: #111; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Betrieb</td>
            <td style="padding: 8px 0; color: #111; font-weight: 600;">${betrieb}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Telefon</td>
            <td style="padding: 8px 0; color: #111;">${telefon || "–"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999; vertical-align: top;">Nachricht</td>
            <td style="padding: 8px 0; color: #111;">${nachricht || "–"}</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    return Response.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }

  return Response.json({ success: true });
}
