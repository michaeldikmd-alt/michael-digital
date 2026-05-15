"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projekte = [
  {
    branche: "Malerbetrieb",
    name: "Malermeister Fischer",
    beschreibung: "Moderne Website mit Galerie, Kontaktformular und Google Maps Einbindung.",
    tags: ["Website", "Galerie", "Kontaktformular"],
    farbe: "#FFF3EE",
    akzent: "#C94B00",
  },
  {
    branche: "Sanitär & Heizung",
    name: "Klempner Bauer GmbH",
    beschreibung: "Schnelle Notfall-Landingpage mit Telefon-CTA — für maximale Anrufe.",
    tags: ["Landingpage", "Notfall-CTA", "SEO"],
    farbe: "#EEF3FF",
    akzent: "#2A5BD7",
  },
  {
    branche: "Schreinerei",
    name: "Tischlerei Kern",
    beschreibung: "Portfolio-Website mit Projekt-Showcase und Anfrage-Funktion.",
    tags: ["Portfolio", "Anfragen", "Mobile"],
    farbe: "#F2FFEE",
    akzent: "#2A7D2A",
  },
];

export default function Referenzen() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.08 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="referenzen" style={{
      background: "var(--bg)",
      padding: isMobile ? "80px 20px" : "120px 40px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 12,
          textAlign: isMobile ? "center" : "left",
        }}>Referenzen</p>

        <h2 style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? 28 : 40,
          color: "#111",
          marginBottom: 12,
          textAlign: isMobile ? "center" : "left",
        }}>
          Websites für Handwerker
        </h2>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 16,
          color: "#666",
          maxWidth: 480,
          lineHeight: 1.6,
          textAlign: isMobile ? "center" : "left",
          margin: isMobile ? "0 auto 64px" : "0 0 64px",
        }}>
          Echte Projekte, echte Betriebe. Jede Website ist individuell auf den Handwerker zugeschnitten.
        </p>

        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 800ms cubic-bezier(0.32,0.72,0,1), transform 800ms cubic-bezier(0.32,0.72,0,1)",
          }}
        >
          {projekte.map(({ branche, name, beschreibung, tags, farbe, akzent }) => (
            <div key={name} style={{
              background: "rgba(0,0,0,0.025)",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 22,
              padding: 5,
            }}>
              <div style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                height: "100%",
              }}>
                <div style={{
                  background: farbe,
                  height: 160,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  borderBottom: "1px solid var(--border)",
                  padding: "0 20px",
                }}>
                  <div style={{
                    fontFamily: "var(--font-heading), sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: akzent,
                    textAlign: "center",
                    letterSpacing: "-0.01em",
                  }}>
                    {name}
                  </div>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.7)",
                    border: `1px solid ${akzent}22`,
                    borderRadius: 100,
                    padding: "3px 12px",
                    fontSize: 11,
                    fontWeight: 600,
                    color: akzent,
                    fontFamily: "var(--font-body), sans-serif",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>
                    {branche}
                  </div>
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}>{beschreibung}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {tags.map((tag) => (
                      <span key={tag} style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: 100,
                        padding: "3px 10px",
                        fontSize: 12,
                        color: "#666",
                        fontFamily: "var(--font-body), sans-serif",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
