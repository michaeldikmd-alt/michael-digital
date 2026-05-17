"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const schritte = [
  {
    nr: "01",
    titel: "Kurzes Telefonat",
    text: "Du sagst mir was du brauchst. Ich melde mich persönlich — kein Formular, kein Callcenter.",
  },
  {
    nr: "02",
    titel: "Live-Demo deiner Website",
    text: "Ich zeige dir deine fertige Seite, bevor du etwas bezahlst. Du siehst genau, was du bekommst.",
  },
  {
    nr: "03",
    titel: "Fertigstellung in 7 Tagen",
    text: "50% Anzahlung, Rest bei Abnahme. In einer Woche ist deine Website online.",
  },
  {
    nr: "04",
    titel: "Laufende Betreuung",
    text: "WhatsApp wenn was ist. Inhalte ändere ich für dich. Du kümmerst dich um deinen Betrieb.",
  },
];

export default function Ablauf() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.06 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="ablauf" style={{
      background: "#fff",
      padding: isMobile ? "80px 20px" : "120px 40px",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>So läuft es ab</p>
          <h2 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? 28 : 40,
            color: "#111",
            marginBottom: 16,
          }}>
            Von der Idee zur fertigen Website
          </h2>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 16,
            color: "#666",
            lineHeight: 1.6,
            maxWidth: 400,
            margin: "0 auto",
          }}>
            Vier Schritte. Kein Aufwand für dich. Ich übernehme das.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={sectionRef}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 700ms cubic-bezier(0.32,0.72,0,1), transform 700ms cubic-bezier(0.32,0.72,0,1)",
          }}
        >
          {isMobile ? (
            /* Mobile: vertical stack */
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {schritte.map(({ nr, titel, text }, i) => (
                <div key={nr} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading), sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(201,75,0,0.25)",
                      flexShrink: 0,
                    }}>{nr}</div>
                    {i < schritte.length - 1 && (
                      <div style={{
                        width: 0,
                        flex: 1,
                        minHeight: 24,
                        borderLeft: "2px dashed var(--border)",
                        margin: "4px 0",
                      }} />
                    )}
                  </div>
                  <div style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "18px 20px",
                    marginBottom: i < schritte.length - 1 ? 8 : 0,
                    marginTop: 4,
                    flex: 1,
                  }}>
                    <h3 style={{
                      fontFamily: "var(--font-heading), sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#111",
                      marginBottom: 6,
                    }}>{titel}</h3>
                    <p style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: 14,
                      color: "#666",
                      lineHeight: 1.65,
                    }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop: horizontal 4-col grid */
            <div style={{ position: "relative" }}>
              {/* Connecting line behind circles */}
              <div style={{
                position: "absolute",
                top: 24,
                left: "calc(12.5% + 4px)",
                right: "calc(12.5% + 4px)",
                height: 1,
                background: "var(--border)",
                zIndex: 0,
              }} />
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 24,
                position: "relative",
              }}>
                {schritte.map(({ nr, titel, text }) => (
                  <div key={nr} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                    {/* Circle */}
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading), sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(201,75,0,0.25)",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                    }}>{nr}</div>
                    {/* Content card */}
                    <div style={{
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      borderRadius: 16,
                      padding: "20px 20px",
                      width: "100%",
                    }}>
                      <h3 style={{
                        fontFamily: "var(--font-heading), sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        color: "#111",
                        marginBottom: 8,
                        lineHeight: 1.35,
                      }}>{titel}</h3>
                      <p style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: 14,
                        color: "#666",
                        lineHeight: 1.65,
                      }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
