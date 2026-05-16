"use client";
import { useState, useEffect } from "react";

const features = [
  "Professionelle Website",
  "Mobile optimiert & schnell",
  "Kontaktformular",
  "Google Business Einrichtung",
  "Fertig in 1 Woche",
  "Hosting & Uptime",
  "Updates & Änderungen",
  "Support per WhatsApp",
];

export default function Pakete() {
  const [isMobile, setIsMobile] = useState(false);
  const [pressed, setPressed] = useState(false);

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
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 11,
          fontWeight: 600,
          color: "var(--accent)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 16,
        }}>Das Angebot</p>

        <h2 style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? 32 : 48,
          color: "#111",
          textAlign: "center",
          marginBottom: 12,
          lineHeight: 1.1,
        }}>
          Ein Paket.<br />Alles drin.
        </h2>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 16,
          color: "#777",
          textAlign: "center",
          marginBottom: 48,
          lineHeight: 1.6,
        }}>
          Kein Menü. Keine Auswahl. Genau das, was dein Betrieb braucht.
        </p>

        <div style={{
          background: "#111",
          borderRadius: 20,
          padding: isMobile ? "40px 28px" : "52px 56px",
        }}>

          {/* Price split */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 0,
            alignItems: "center",
            marginBottom: 44,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}>

            {/* Setup */}
            <div>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}>Setup — einmalig</p>
              <div style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? 28 : 52,
                color: "#fff",
                lineHeight: 1,
                marginBottom: 6,
                whiteSpace: "nowrap",
              }}>ab 600 €</div>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
              }}>Website + Google Business</p>
            </div>

            {/* Divider */}
            <div style={{
              width: 1,
              height: 80,
              background: "rgba(255,255,255,0.1)",
              margin: isMobile ? "0 20px" : "0 52px",
            }} />

            {/* Betreuung */}
            <div style={{ textAlign: "right" }}>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}>Betreuung — monatlich</p>
              <div style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? 28 : 52,
                color: "#fff",
                lineHeight: 1,
                marginBottom: 6,
                whiteSpace: "nowrap",
              }}>149 €</div>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.3)",
              }}>Hosting, Updates, Support</p>
            </div>
          </div>

          {/* Features */}
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 44px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "14px 32px",
          }}>
            {features.map((f) => (
              <li key={f} style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
              }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#kontakt"
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            onMouseLeave={() => setPressed(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "#fff",
              padding: "14px 14px 14px 24px",
              borderRadius: 100,
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "var(--font-body), sans-serif",
              transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
              transform: pressed ? "scale(0.97)" : "scale(1)",
            }}
          >
            Jetzt anfragen
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

        </div>
      </div>
    </section>
  );
}
