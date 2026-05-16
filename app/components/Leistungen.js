"use client";
import { useState, useEffect, useRef } from "react";
import {
  Globe,
  MapPin,
  EnvelopeSimple,
  Lightning,
  Wrench,
  DeviceMobile,
} from "@phosphor-icons/react";

const leistungen = [
  {
    Icon: Globe,
    titel: "Professionelle Website",
    text: "Mobile-optimiert, schnell ladend, mit deinem Logo, Fotos und Texten. Kunden finden dich — auf jedem Gerät.",
  },
  {
    Icon: MapPin,
    titel: "Google-Präsenz",
    text: "Google Business Profil einrichten und optimieren, damit du bei lokalen Suchen ganz oben auftauchst.",
  },
  {
    Icon: EnvelopeSimple,
    titel: "Kontaktformular & Anfragen",
    text: "Kunden können direkt Anfragen schicken. Du bekommst eine E-Mail — kein Termin-Chaos mehr.",
  },
  {
    Icon: Lightning,
    titel: "Schnelle Umsetzung",
    text: "Vom ersten Gespräch zur fertigen Website in 1 Woche. Kein Hin-und-Her, kein Warten.",
  },
  {
    Icon: Wrench,
    titel: "Pflege & Updates",
    text: "Wenn sich etwas ändert — Preise, Leistungen, Fotos — aktualisiere ich das für dich. Schnell und unkompliziert.",
  },
  {
    Icon: DeviceMobile,
    titel: "Handy-optimiert",
    text: "Über 70 % deiner Kunden schauen mit dem Handy. Deine Website sieht auf jedem Display perfekt aus.",
  },
];

export default function Leistungen() {
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observers = leistungen.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, i]);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      if (itemRefs.current[i]) observer.observe(itemRefs.current[i]);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="leistungen" style={{
      background: "#fff",
      padding: isMobile ? "80px 20px" : "120px 40px",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: isMobile ? "block" : "grid",
        gridTemplateColumns: isMobile ? undefined : "340px 1fr",
        gap: isMobile ? undefined : 80,
        alignItems: "flex-start",
      }}>

        {/* Left: sticky header */}
        <div style={{
          position: isMobile ? "static" : "sticky",
          top: 100,
          marginBottom: isMobile ? 48 : 0,
        }}>
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
            marginBottom: 20,
          }}>
            Was du bekommst
          </h2>

          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 16,
            color: "#666",
            lineHeight: 1.7,
            maxWidth: 300,
          }}>
            Alles, was ein Handwerksbetrieb braucht, um professionell aufzutreten und neue Kunden zu gewinnen.
          </p>

          {!isMobile && (
            <a href="#kontakt" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 32,
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--accent)",
            }}>
              Jetzt anfragen
              <span style={{ fontSize: 16 }}>→</span>
            </a>
          )}
        </div>

        {/* Right: feature list */}
        <div>
          {leistungen.map(({ Icon, titel, text }, i) => (
            <div
              key={titel}
              ref={(el) => (itemRefs.current[i] = el)}
              style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                padding: "28px 0",
                borderBottom: i < leistungen.length - 1 ? "1px solid var(--border)" : "none",
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i) ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) ${i * 60}ms, transform 500ms cubic-bezier(0.23, 1, 0.32, 1) ${i * 60}ms`,
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "var(--bg)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}>
                <Icon size={18} weight="regular" color="var(--accent)" />
              </div>

              <div>
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
                  maxWidth: 480,
                }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
