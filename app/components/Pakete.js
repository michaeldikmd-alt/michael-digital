"use client";
import { useState, useEffect } from "react";

const hauptPakete = [
  {
    name: "Starter",
    preis: "600",
    einheit: "€ einmalig",
    features: [
      "Professionelle Website",
      "Mobile optimiert",
      "Kontaktformular",
      "Google Business Einrichtung",
      "Fertig in 1 Woche",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    preis: "1.200",
    einheit: "€ einmalig",
    badge: "Empfohlen",
    features: [
      "Alles aus Starter",
      "Automatische Bewertungsanfragen per WhatsApp",
      "Online-Terminbuchung für Kunden",
    ],
    highlight: true,
  },
];

export default function Pakete() {
  const [isMobile, setIsMobile] = useState(false);
  const [pressed, setPressed] = useState(null);
  const [betreuungPressed, setBetreuungPressed] = useState(false);

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
          fontSize: isMobile ? 32 : 40,
          color: "#111",
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

        {/* Hauptpakete */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 16,
          marginBottom: 16,
          alignItems: "stretch",
        }}>
          {hauptPakete.map(({ name, preis, einheit, badge, features, highlight }, index) => (
            <div
              key={name}
              style={{
                background: highlight ? "#111" : "#fff",
                border: highlight ? "none" : "1px solid #E9E6E0",
                borderRadius: 14,
                padding: isMobile ? 28 : 32,
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {badge && (
                <div style={{
                  position: "absolute",
                  top: -13,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#C94B00",
                  color: "#fff",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 14px",
                  borderRadius: 100,
                  whiteSpace: "nowrap",
                }}>
                  {badge}
                </div>
              )}

              <p style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: highlight ? "#fff" : "#111",
                marginBottom: 16,
              }}>
                {name}
              </p>

              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: 6,
                marginBottom: 28,
              }}>
                <span style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 800,
                  fontSize: 48,
                  color: highlight ? "#fff" : "#111",
                  lineHeight: 1,
                }}>
                  {preis}
                </span>
                <span style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 15,
                  color: highlight ? "rgba(255,255,255,0.5)" : "#999",
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
                    color: highlight ? "rgba(255,255,255,0.8)" : "#555",
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
                  background: highlight ? "#C94B00" : "#111",
                  color: "#fff",
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

        {/* Betreuung — Add-on */}
        <div style={{
          background: "#fff",
          border: "1px solid #E9E6E0",
          borderRadius: 14,
          padding: isMobile ? "24px 28px" : "24px 32px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 20 : 32,
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}>
              <p style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#111",
              }}>
                Betreuung
              </p>
              <span style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#999",
                background: "#F8F7F4",
                border: "1px solid #E9E6E0",
                borderRadius: 100,
                padding: "2px 10px",
              }}>
                Add-on
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 13,
              color: "#999",
              marginBottom: isMobile ? 14 : 0,
            }}>
              Für beide Pakete buchbar
            </p>
          </div>

          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: isMobile ? 8 : 20,
            flex: 2,
          }}>
            {["Hosting & Uptime", "Updates & Änderungen", "Support per WhatsApp", "Monatliches Reporting"].map((f) => (
              <li key={f} style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                color: "#555",
              }}>
                <span style={{ color: "#C94B00", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div style={{
            flexShrink: 0,
            textAlign: isMobile ? "left" : "right",
          }}>
            <div style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 800,
              fontSize: 28,
              color: "#111",
              lineHeight: 1,
              marginBottom: 2,
            }}>
              99 €
            </div>
            <div style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 13,
              color: "#999",
              marginBottom: 14,
            }}>
              pro Monat
            </div>
            <a
              href="#kontakt"
              onMouseDown={() => setBetreuungPressed(true)}
              onMouseUp={() => setBetreuungPressed(false)}
              onMouseLeave={() => setBetreuungPressed(false)}
              style={{
                display: "inline-block",
                background: "#F8F7F4",
                color: "#111",
                border: "1px solid #E9E6E0",
                borderRadius: 8,
                padding: "10px 20px",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: betreuungPressed ? "scale(0.97)" : "scale(1)",
              }}
            >
              Dazu buchen
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
