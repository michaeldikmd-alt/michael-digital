"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

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
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: isMobile ? 48 : 0,
          marginBottom: isMobile ? 48 : 64,
        }}>
          {/* Brand block */}
          <div>
            <div style={{
              fontFamily: "var(--font-heading), sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#fff",
              marginBottom: 12,
            }}>
              Michael<span style={{ color: "var(--accent)" }}>.</span>digital
            </div>
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: 14,
              color: "#666",
              lineHeight: 1.65,
              maxWidth: 240,
            }}>
              Web & Automatisierung für Handwerksbetriebe im Raum Attendorn.
            </p>
          </div>

          {/* Links block */}
          <div style={{ display: "flex", gap: isMobile ? 48 : 80 }}>
            <div>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#444",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 20,
              }}>Navigation</p>
              {["#leistungen", "#referenzen", "#pakete", "#ablauf", "#kontakt"].map((href) => (
                <a key={href} href={href} style={{
                  display: "block",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 14,
                  color: "#777",
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}>
                  {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
                </a>
              ))}
            </div>

            <div>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#444",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 20,
              }}>Kontakt</p>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 14,
                color: "#777",
                marginBottom: 16,
                lineHeight: 1.5,
              }}>michael.dik.md<br />@gmail.com</p>
              <a
                href="#kontakt"
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => setCtaHover(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "9px 9px 9px 16px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "var(--font-body), sans-serif",
                  transition: "opacity 0.2s",
                  opacity: ctaHover ? 0.85 : 1,
                }}
              >
                Anfragen
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  fontSize: 13,
                }}>→</span>
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid #1e1e1e",
          paddingTop: 28,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: 12,
        }}>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 13,
            color: "#444",
          }}>
            © {new Date().getFullYear()} Michael Digital. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Impressum", "Datenschutz"].map((link) => (
              <a key={link} href={`/${link.toLowerCase()}`} style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 13,
                color: "#444",
                transition: "color 0.2s",
              }}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
