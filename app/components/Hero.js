"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TEL_DISPLAY = "01575 2987113";
const TEL_HREF = "tel:+4915752987113";

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
      padding: isMobile ? "72px 20px 96px" : "120px 40px 160px",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
            Websites für Handwerker in Siegen
          </div>

          <h1 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? "clamp(36px, 10vw, 48px)" : "clamp(48px, 5vw, 72px)",
            lineHeight: 1.15,
            color: "#111",
            marginBottom: 24,
          }}>
            Mehr Aufträge durch eine Website,{" "}
            <span style={{ color: "var(--accent)" }}>die in Siegen gefunden wird</span>
          </h1>

          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 18,
            color: "#666",
            lineHeight: 1.75,
            maxWidth: 560,
            margin: isMobile ? "0 auto 40px" : "0 0 40px",
          }}>
            Professionelle Website + Google Business Profil + laufende Betreuung.
            Fertig in 7 Tagen. Persönlicher Termin bei dir im Betrieb.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: "flex",
            gap: 12,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
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
                padding: "14px 14px 14px 24px",
                borderRadius: 100,
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "var(--font-body), sans-serif",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 360 : "none",
                justifyContent: isMobile ? "center" : "flex-start",
                minHeight: 48,
                transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: primaryPressed ? "scale(0.97)" : "scale(1)",
              }}
            >
              Termin vereinbaren
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
              href={TEL_HREF}
              onMouseDown={() => setSecondaryPressed(true)}
              onMouseUp={() => setSecondaryPressed(false)}
              onMouseLeave={() => setSecondaryPressed(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                color: "#111",
                padding: "14px 24px",
                borderRadius: 100,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: "var(--font-body), sans-serif",
                border: "1px solid var(--border)",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 360 : "none",
                minHeight: 48,
                transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: secondaryPressed ? "scale(0.97)" : "scale(1)",
              }}
            >
              {TEL_DISPLAY}
            </a>
          </div>

          {/* TODO: Nach ersten Kunden — Kundenzahl + kurzes Statement einbauen */}
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        maxWidth: 800,
        margin: "64px auto 0",
        display: "flex",
        gap: isMobile ? 32 : 64,
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
      }}>
        {[
          { zahl: "7 Tage", label: "bis zur fertigen Website" },
          { zahl: "100%", label: "Fokus auf Handwerker in Siegen" },
          { zahl: "1 Ansprechpartner", label: "für alles — Website, Google, Support" },
        ].map(({ zahl, label }) => (
          <div key={label} style={{ textAlign: isMobile ? "center" : "left" }}>
            <div style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? 28 : 32,
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
