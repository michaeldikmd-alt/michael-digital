import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Datenschutz — Michael Digital",
  description: "Datenschutzerklärung von Michael Digital",
};

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main style={{
        background: "#F8F7F4",
        minHeight: "100dvh",
        padding: "80px 20px 120px",
      }}>
        <div style={{
          maxWidth: 680,
          margin: "0 auto",
        }}>
          <h1 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: 40,
            color: "#111",
            marginBottom: 12,
          }}>
            Datenschutzerklärung
          </h1>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 14,
            color: "#999",
            marginBottom: 48,
          }}>
            Stand: Mai 2026
          </p>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p style={{ marginTop: 8 }}>
              Michael Dik<br />
              Gleiwitzer Straße 4<br />
              57072 Siegen<br />
              E-Mail: michael.dik.md@gmail.com<br />
              Telefon: 01575 2987113
            </p>
          </Section>

          <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
            <p>
              Ich erhebe personenbezogene Daten nur, soweit dies zur Bereitstellung meiner Dienstleistungen erforderlich ist. Dies geschieht ausschließlich über das Kontaktformular auf dieser Website.
            </p>
          </Section>

          <Section title="3. Kontaktformular">
            <p>
              Wenn Sie das Kontaktformular auf dieser Website nutzen, werden folgende Daten erhoben:
            </p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              <li>Name</li>
              <li>Telefonnummer (freiwillig)</li>
              <li>Nachricht</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p style={{ marginTop: 12 }}>
              Die Daten werden gelöscht, sobald sie für den Zweck ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 6 Monaten.
            </p>
          </Section>

          <Section title="4. E-Mail-Versand über Resend">
            <p>
              Zur Übermittlung der Kontaktformular-Daten nutze ich den Dienst <strong>Resend</strong> (Resend Inc., 2261 Market Street #5039, San Francisco, CA 94114, USA). Die über das Formular eingegebenen Daten werden zur E-Mail-Zustellung an Resend übermittelt.
            </p>
            <p style={{ marginTop: 12 }}>
              Resend verarbeitet die Daten auf Basis eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO. Weitere Informationen finden Sie unter:{" "}
              <a
                href="https://resend.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline" }}
              >
                resend.com/privacy
              </a>
            </p>
          </Section>

          <Section title="5. Hosting (Vercel)">
            <p>
              Diese Website wird über <strong>Vercel Inc.</strong> (340 Pine Street, Suite 701, San Francisco, CA 94104, USA) gehostet. Beim Aufruf der Website werden von Vercel automatisch technische Zugriffsdaten (u. a. IP-Adresse, Browsertyp, Datum und Uhrzeit) in Server-Logs erfasst.
            </p>
            <p style={{ marginTop: 12 }}>
              Diese Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der Website). Weitere Informationen zum Datenschutz bei Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline" }}
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </Section>

          <Section title="6. Keine Cookies, kein Tracking">
            <p>
              Diese Website verwendet keine Cookies, kein Web-Analytics (z. B. Google Analytics) und kein Tracking. Es werden keine Nutzerprofile erstellt und keine Daten für Werbezwecke verarbeitet.
            </p>
          </Section>

          <Section title="7. Ihre Rechte">
            <p>Sie haben gegenüber mir folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: michael.dik.md@gmail.com
            </p>
          </Section>

          <Section title="8. Beschwerderecht" last>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch mich zu beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW):{" "}
              <a
                href="https://www.ldi.nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline" }}
              >
                www.ldi.nrw.de
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children, last = false }) {
  return (
    <div style={{
      marginBottom: last ? 0 : 40,
      paddingBottom: last ? 0 : 40,
      borderBottom: last ? "none" : "1px solid #E9E6E0",
    }}>
      <h2 style={{
        fontFamily: "var(--font-heading), sans-serif",
        fontWeight: 700,
        fontSize: 16,
        color: "#111",
        marginBottom: 12,
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: 15,
        color: "#555",
        lineHeight: 1.75,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}>
        {children}
      </div>
    </div>
  );
}
