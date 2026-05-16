"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const [secondaryPressed, setSecondaryPressed] = useState(false);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.08 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={{
      background: "var(--bg)",
      padding: isMobile ? "80px 20px 100px" : "120px 40px 160px",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: isMobile ? "block" : "grid",
        gridTemplateColumns: isMobile ? undefined : "1fr 1fr",
        gap: isMobile ? undefined : 80,
        alignItems: "center",
      }}>
        {/* Left column */}
        <div
          ref={contentRef}
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Eyebrow pill */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: 100,
            padding: "5px 14px",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontFamily: "var(--font-body), sans-serif",
            marginBottom: 28,
          }}>
            Websites für Handwerker
          </div>

          <h1 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? "clamp(40px, 11vw, 52px)" : "clamp(52px, 5vw, 80px)",
            lineHeight: 1.15,
            color: "#111",
            maxWidth: isMobile ? "none" : 540,
            margin: isMobile ? "0 auto 20px" : "0 0 20px",
          }}>
            Dein Betrieb.<br />
            <span style={{ color: "var(--accent)" }}>Online sichtbar.</span><br />
            Kunden gewinnen.
          </h1>

          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 17,
            color: "#666",
            lineHeight: 1.75,
            maxWidth: 440,
            margin: isMobile ? "0 auto 44px" : "0 0 44px",
          }}>
            Ich baue professionelle Websites für Handwerksbetriebe — schnell, unkompliziert und ohne technischen Aufwand für dich. Einfach anfragen und in 1 Woche live gehen.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: "flex",
            gap: 12,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            marginBottom: isMobile ? 56 : 0,
          }}>
            <a
              href="#kontakt"
              onMouseDown={() => setPrimaryPressed(true)}
              onMouseUp={() => setPrimaryPressed(false)}
              onMouseLeave={() => setPrimaryPressed(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent)",
                color: "#fff",
                padding: "13px 13px 13px 22px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "var(--font-body), sans-serif",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 340 : "none",
                justifyContent: isMobile ? "center" : "flex-start",
                transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: primaryPressed ? "scale(0.97)" : "scale(1)",
              }}
            >
              Kostenlos anfragen
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                fontSize: 16,
                flexShrink: 0,
              }}>→</span>
            </a>
            <a
              href="#pakete"
              onMouseDown={() => setSecondaryPressed(true)}
              onMouseUp={() => setSecondaryPressed(false)}
              onMouseLeave={() => setSecondaryPressed(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "#111",
                padding: "13px 24px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "var(--font-body), sans-serif",
                border: "1px solid var(--border)",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 340 : "none",
                transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: secondaryPressed ? "scale(0.97)" : "scale(1)",
              }}
            >
              Pakete ansehen
            </a>
          </div>
        </div>

        {/* Right column — decorative card mockup (desktop only) */}
        {!isMobile && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <div style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: 24,
              width: "100%",
              maxWidth: 380,
              boxShadow: "0 24px 64px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
            }}>
              {/* Fake browser chrome */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 16,
                paddingBottom: 12,
                borderBottom: "1px solid var(--border)",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbf47" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff6b6b" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#6bcb77" }} />
                <div style={{
                  flex: 1,
                  height: 22,
                  background: "var(--bg)",
                  borderRadius: 6,
                  marginLeft: 8,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                }}>
                  <span style={{ fontSize: 11, color: "#aaa", fontFamily: "var(--font-body), sans-serif" }}>
                    malermeister-fischer.de
                  </span>
                </div>
              </div>

              {/* Colored hero area */}
              <div style={{
                background: "linear-gradient(135deg, #FFF3EE 0%, #FFE5D5 100%)",
                borderRadius: 12,
                padding: "20px 18px",
                marginBottom: 16,
              }}>
                <div style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#111",
                  marginBottom: 6,
                }}>
                  Malermeister Fischer
                </div>
                <div style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 12,
                  color: "#777",
                  lineHeight: 1.5,
                  marginBottom: 14,
                }}>
                  Professionelle Malerarbeiten in Siegen-Wittgenstein
                </div>
                <div style={{
                  display: "inline-block",
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: 100,
                  fontFamily: "var(--font-body), sans-serif",
                }}>
                  Jetzt anfragen
                </div>
              </div>

              {/* Placeholder content rows */}
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                {["Innenarbeiten", "Außenfassaden", "Tapezieren"].map((item) => (
                  <div key={item} style={{
                    flex: 1,
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "8px 6px",
                    textAlign: "center",
                    fontSize: 10,
                    fontFamily: "var(--font-body), sans-serif",
                    color: "#777",
                  }}>{item}</div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[100, 80, 92].map((w, i) => (
                  <div key={i} style={{
                    height: 8,
                    borderRadius: 4,
                    background: "var(--border)",
                    width: `${w}%`,
                  }} />
                ))}
              </div>

              {/* Stars row */}
              <div style={{
                marginTop: 14,
                paddingTop: 12,
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}>
                <span style={{ color: "#f5a623", fontSize: 13 }}>★★★★★</span>
                <span style={{ fontSize: 11, color: "#999", fontFamily: "var(--font-body), sans-serif" }}>
                  4.9 · 32 Bewertungen
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats row */}
      <div style={{
        maxWidth: 1100,
        margin: isMobile ? "0 auto" : "64px auto 0",
        marginTop: isMobile ? 56 : 64,
        display: "flex",
        gap: isMobile ? 24 : 64,
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
      }}>
        {[
          { zahl: "1 Wo.", label: "bis zur fertigen Website" },
          { zahl: "100%", label: "Handwerker-Fokus" },
          { zahl: "fest", label: "Preise, keine Überraschungen" },
        ].map(({ zahl, label }) => (
          <div key={label} style={{ textAlign: isMobile ? "center" : "left" }}>
            <div style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: 36,
              color: "var(--accent)",
              lineHeight: 1,
              marginBottom: 6,
            }}>{zahl}</div>
            <div style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              color: "#777",
            }}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
