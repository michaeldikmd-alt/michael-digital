"use client";
import { useState, useEffect } from "react";

const EMAIL = "info@siegen-web.de";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer style={{
      background: "#111",
      padding: isMobile ? "64px 20px 40px" : "96px 40px 48px",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: isMobile ? 40 : 0,
          marginBottom: isMobile ? 40 : 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: "#fff",
              marginBottom: 10,
            }}>
              Siegen Web
            </div>
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              color: "#555",
              lineHeight: 1.65,
              maxWidth: 220,
              marginBottom: 14,
            }}>
              Websites für Handwerksbetriebe in Siegen-Wittgenstein.
            </p>
            <a href={`mailto:${EMAIL}`} style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              color: "#666",
            }}>
              {EMAIL}
            </a>
          </div>

          {/* Nav */}
          <div>
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 18,
            }}>Navigation</p>
            {[
              { href: "/#leistungen", label: "Leistungen" },
              { href: "/#ablauf", label: "Ablauf" },
              { href: "/#warum", label: "Warum Siegen Web" },
              { href: "/#kontakt", label: "Kontakt" },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{
                display: "block",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                color: "#666",
                marginBottom: 10,
              }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1e1e1e",
          paddingTop: 24,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: 10,
        }}>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 13,
            color: "#333",
          }}>
            © 2026 Siegen Web — Michael Dik
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/impressum" style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 13,
              color: "#444",
            }}>Impressum</a>
            <a href="/datenschutz" style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 13,
              color: "#444",
            }}>Datenschutzerklärung</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
