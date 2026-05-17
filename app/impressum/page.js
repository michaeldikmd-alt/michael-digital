import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Impressum — Siegen Web",
  description: "Impressum von Siegen Web, Michael Dik, Siegen",
};

export default function Impressum() {
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
            marginBottom: 48,
          }}>
            Impressum
          </h1>

          <Section title="Angaben gemäß § 5 TMG">
            <p>Michael Dik</p>
            <p>Gleiwitzer Straße 4</p>
            <p>57072 Siegen</p>
          </Section>

          <Section title="Kontakt">
            <Row label="Telefon" value="01575 2987113" />
            <Row label="E-Mail" value="info@siegen-web.de" />
          </Section>

          <Section title="Steuerliche Angaben">
            <Row label="Steuernummer" value="342/5054/4631" />
          </Section>

          <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>Michael Dik</p>
            <p>Gleiwitzer Straße 4</p>
            <p>57072 Siegen</p>
          </Section>

          <Section title="Haftungsausschluss">
            <p style={{ lineHeight: 1.75, color: "#555", fontSize: 15 }}>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </Section>

          <Section title="Urheberrecht" last>
            <p style={{ lineHeight: 1.75, color: "#555", fontSize: 15 }}>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
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

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <span style={{ color: "#999", minWidth: 120 }}>{label}:</span>
      <span>{value}</span>
    </div>
  );
}
