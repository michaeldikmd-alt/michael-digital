"use client";
import { useState, useEffect } from "react";

const pakete = [
  {
    label: "Einmalig",
    titel: "Website",
    preis: "600",
    einheit: "€",
    features: [
      "Professionelle Landing Page",
      "Mobil optimiert",
      "Kontaktformular",
      "Google Business Einrichtung",
      "Fertig in 1 Woche",
    ],
  },
  {
    label: "Pro Monat",
    titel: "Betreuung",
    preis: "149",
    einheit: "€ /Monat",
    features: [
      "Hosting & Uptime",
      "Updates & Änderungen",
      "Support per WhatsApp",
      "Monatliches Reporting",
    ],
  },
];

export default function Pakete() {
  const [isMobile, setIsMobile] = useState(false);
  const [pressed, setPressed] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="pakete" style={{
      background: "#F8F7F4",
      padding: isMobile ? "64px 20px" : "96px 40px",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        <h2 style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 800,
          fontSize: 40,
          color: "#111111",
          marginBottom: 8,
          textAlign: "center",
        }}>
          Klar kalkuliert.
        </h2>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 16,
          color: "#777",
          textAlign: "center",
          marginBottom: 48,
        }}>
          Kein Kleingedrucktes. Kein Abo-Trick.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 20,
        }}>
          {pakete.map(({ label, titel, preis, einheit, features }, index) => (
            <div key={titel} style={{
              background: "#ffffff",
              border: "1px solid #E9E6E0",
              borderRadius: 12,
              padding: 32,
              display: "flex",
              flexDirection: "column",
            }}>

              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C94B00",
                marginBottom: 16,
              }}>
                {label}
              </p>

              <p style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: "#111",
                marginBottom: 8,
              }}>
                {titel}
              </p>

              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: 4,
                marginBottom: 28,
              }}>
                <span style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 800,
                  fontSize: 52,
                  color: "#111111",
                  lineHeight: 1,
                }}>
                  {preis}
                </span>
                <span style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 16,
                  color: "#777",
                }}>
                  {einheit}
                </span>
              </div>

              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                flex: 1,
              }}>
                {features.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      color: "#C94B00",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: 1,
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                onMouseDown={() => setPressed(index)}
                onMouseUp={() => setPressed(null)}
                onMouseLeave={() => setPressed(null)}
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#C94B00",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 24px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                  transform: pressed === index ? "scale(0.97)" : "scale(1)",
                }}
              >
                Jetzt anfragen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
