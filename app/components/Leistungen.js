"use client";
import { useState, useEffect } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const einrichtung = [
  "Professionelle, mobiloptimierte Website",
  "Fertig in 1 Woche",
  "Google Business Profil einrichten und optimieren",
  "Kontaktformular — Anfragen kommen direkt aufs Handy",
  "50% Anzahlung, Rest bei Fertigstellung",
];

const betreuung = [
  "Hosting & Uptime — Website bleibt zuverlässig online",
  "Technische Updates & Sicherheit",
  "Inhaltsänderungen auf Wunsch (bis 2× pro Monat)",
  "WhatsApp-Support Mo–Fr, Antwort innerhalb 1 Werktag",
  "Google Business Pflege",
];

function Karte({ titel, punkte, highlight, delay }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      style={{
        background: highlight ? "#111" : "#fff",
        border: highlight ? "none" : "1px solid var(--border)",
        borderRadius: 20,
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 600ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms, transform 600ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      {/* Card label */}
      <p style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--accent)",
        margin: 0,
      }}>
        {highlight ? "Monatliche Betreuung" : "Einmalige Einrichtung"}
      </p>

      <h3 style={{
        fontFamily: "var(--font-heading), sans-serif",
        fontWeight: 700,
        fontSize: 24,
        color: highlight ? "#fff" : "#111",
        lineHeight: 1.3,
        margin: 0,
      }}>
        {titel}
      </h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {punkte.map((punkt) => (
          <li key={punkt} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 15,
            color: highlight ? "rgba(255,255,255,0.8)" : "#444",
            lineHeight: 1.5,
          }}>
            <CheckCircle
              size={20}
              weight="fill"
              color="var(--accent)"
              style={{ flexShrink: 0, marginTop: 1 }}
            />
            {punkt}
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: highlight ? "var(--accent)" : "var(--bg)",
          color: highlight ? "#fff" : "#111",
          border: highlight ? "none" : "1px solid var(--border)",
          padding: "13px 20px",
          borderRadius: 100,
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "var(--font-body), sans-serif",
          marginTop: "auto",
          minHeight: 48,
        }}
      >
        Termin vereinbaren →
      </a>
    </div>
  );
}

export default function Leistungen() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="leistungen" style={{
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
          }}>Leistungen</p>
          <h2 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? 28 : 40,
            color: "#111",
            marginBottom: 16,
          }}>
            Einrichtung & Betreuung
          </h2>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 16,
            color: "#666",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto",
          }}>
            Du bekommst deine Website und einen Partner, der langfristig dahintersteht.
            Kein Zusammenstückeln, kein Hin-und-Her.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: isMobile ? "column" : undefined,
          gridTemplateColumns: isMobile ? undefined : "1fr 1fr",
          gap: 20,
        }}>
          <Karte
            titel="Website, Google Business & Kontaktformular"
            punkte={einrichtung}
            highlight={false}
            delay={0}
          />
          <Karte
            titel="Alles läuft — auch wenn du nicht dran denkst"
            punkte={betreuung}
            highlight={true}
            delay={100}
          />
        </div>
      </div>
    </section>
  );
}
