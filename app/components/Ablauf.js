"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const schritte = [
  {
    nr: "01",
    titel: "Kostenloses Gespräch",
    text: "Wir reden kurz per Telefon oder WhatsApp. Du erzählst mir von deinem Betrieb und ich erkläre, was ich machen kann. Kein Druck, kein Verkaufen.",
  },
  {
    nr: "02",
    titel: "Angebot & Freigabe",
    text: "Du bekommst ein klares Angebot mit Preis und Umfang. Wenn alles passt, fangen wir an — so einfach ist das.",
  },
  {
    nr: "03",
    titel: "Ich baue deine Website",
    text: "Du schickst mir Fotos und ein paar Infos zu deinem Betrieb. Den Rest erledige ich. Du musst dich um nichts kümmern.",
  },
  {
    nr: "04",
    titel: "Du gibst Feedback",
    text: "Ich zeige dir die fertige Website. Du sagst, was du ändern möchtest. Wir feilen so lange, bis du zufrieden bist.",
  },
  {
    nr: "05",
    titel: "Live schalten",
    text: "Deine Website geht online. Ich richte alles ein — Domain, Hosting, Google. Du kannst direkt loslegen.",
  },
];

export default function Ablauf() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal({ threshold: 0.06 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="ablauf" style={{
      background: "var(--bg)",
      padding: isMobile ? "80px 20px" : "120px 40px",
    }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 12,
          textAlign: "center",
        }}>Ablauf</p>

        <h2 style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? 28 : 40,
          color: "#111",
          marginBottom: 12,
          textAlign: "center",
        }}>
          So läuft es ab
        </h2>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 16,
          color: "#666",
          maxWidth: 400,
          lineHeight: 1.6,
          textAlign: "center",
          margin: "0 auto 64px",
        }}>
          Von der ersten Anfrage bis zur fertigen Website — in 5 einfachen Schritten.
        </p>

        <div
          ref={timelineRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            opacity: timelineVisible ? 1 : 0,
            transform: timelineVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 800ms cubic-bezier(0.32,0.72,0,1), transform 800ms cubic-bezier(0.32,0.72,0,1)",
          }}
        >
          {schritte.map(({ nr, titel, text }, index) => (
            <div key={nr} style={{
              display: "flex",
              gap: isMobile ? 16 : 24,
              alignItems: "flex-start",
              position: "relative",
            }}>
              {/* Left: circle + dashed connector */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
              }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#fff",
                  flexShrink: 0,
                  boxShadow: "0 4px 16px rgba(201,75,0,0.25)",
                  zIndex: 1,
                  position: "relative",
                }}>{nr}</div>
                {index < schritte.length - 1 && (
                  <div style={{
                    width: 0,
                    minHeight: 32,
                    flex: 1,
                    borderLeft: "2px dashed var(--border)",
                    margin: "4px 0",
                  }} />
                )}
              </div>

              {/* Right: content card */}
              <div style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "20px 24px",
                marginLeft: 16,
                marginBottom: index < schritte.length - 1 ? 0 : 0,
                marginTop: 4,
                flex: 1,
                marginBottom: index < schritte.length - 1 ? 8 : 0,
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#111",
                  marginBottom: 8,
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
    </section>
  );
}
