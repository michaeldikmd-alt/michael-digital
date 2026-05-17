"use client";
import { useState, useEffect } from "react";
import { X, CheckCircle } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const andere = [
  "Versteckte Preise — du weißt erst nach 3 Telefonaten was es kostet",
  "Lange Wartezeiten — Wochen bis Monate bis zur fertigen Seite",
  "Kein Support nach Fertigstellung — Probleme löst du dann selber",
  "Sitzen in Berlin oder Hamburg — kein persönlicher Termin möglich",
];

const ichBiete = [
  "Transparenter Festpreis — du weißt vorher was es kostet. Punkt.",
  "Fertig in 7 Tagen — nicht 7 Wochen",
  "WhatsApp-Support — schreib mir, ich antworte",
  "Aus Siegen für Siegen — ich komme persönlich zu dir in den Betrieb",
];

export default function Warum() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.12 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.12 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="warum" style={{
      background: "var(--bg)",
      padding: isMobile ? "80px 20px" : "120px 40px",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>Der Unterschied</p>
          <h2 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? 28 : 40,
            color: "#111",
          }}>
            Warum Siegen Web?
          </h2>
        </div>

        {/* Two columns */}
        <div style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: isMobile ? "column" : undefined,
          gridTemplateColumns: isMobile ? undefined : "1fr 1fr",
          gap: 20,
        }}>

          {/* Left — Andere */}
          <div
            ref={leftRef}
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "32px 28px",
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#aaa",
              marginBottom: 16,
            }}>Andere Webdesigner…</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {andere.map((punkt) => (
                <li key={punkt} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 15,
                  color: "#777",
                  lineHeight: 1.5,
                }}>
                  <X
                    size={18}
                    weight="bold"
                    color="#ccc"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  {punkt}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Bei mir */}
          <div
            ref={rightRef}
            style={{
              background: "#111",
              borderRadius: 20,
              padding: "32px 28px",
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, transform 600ms cubic-bezier(0.23, 1, 0.32, 1) 100ms",
            }}
          >
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}>Bei mir bekommst du…</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {ichBiete.map((punkt) => (
                <li key={punkt} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.5,
                }}>
                  <CheckCircle
                    size={18}
                    weight="fill"
                    color="var(--accent)"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  {punkt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
