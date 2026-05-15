"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#pakete", label: "Pakete" },
  { href: "#ablauf", label: "Ablauf" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [ctaPressed, setCtaPressed] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function closeMenu() {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, 150);
  }

  function openMenu() {
    setMenuOpen(true);
  }

  return (
    <>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: isMobile ? "12px 16px" : "16px 20px",
      }}>
        <nav style={{
          maxWidth: 1000,
          margin: "0 auto",
          background: "rgba(248,247,244,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--border)",
          borderRadius: 100,
          padding: "10px 10px 10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <a href="#" style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: 17,
            color: "#111",
            flexShrink: 0,
          }}>
            Michael<span style={{ color: "var(--accent)" }}>.</span>digital
          </a>

          {!isMobile && (
            <div style={{ display: "flex", gap: 28 }}>
              {links.map(({ href, label }) => (
                <a key={href} href={href} style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  fontFamily: "var(--font-body), sans-serif",
                  transition: "color 0.2s",
                }}>
                  {label}
                </a>
              ))}
            </div>
          )}

          {!isMobile && (
            <a
              href="#kontakt"
              onMouseDown={() => setCtaPressed(true)}
              onMouseUp={() => setCtaPressed(false)}
              onMouseLeave={() => setCtaPressed(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent)",
                color: "#fff",
                padding: "10px 10px 10px 20px",
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "var(--font-body), sans-serif",
                transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                transform: ctaPressed ? "scale(0.97)" : "scale(1)",
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
          )}

          {isMobile && (
            <button
              onClick={() => menuOpen ? closeMenu() : openMenu()}
              style={{
                background: "none",
                border: "none",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
              }}
              aria-label="Menü öffnen"
            >
              <span style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#111",
                borderRadius: 2,
                transition: "transform 0.25s cubic-bezier(0.32,0.72,0,1)",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                transformOrigin: "center",
              }} />
              <span style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#111",
                borderRadius: 2,
                transition: "transform 0.25s cubic-bezier(0.32,0.72,0,1)",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                transformOrigin: "center",
              }} />
            </button>
          )}
        </nav>
      </header>

      {menuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(248,247,244,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          zIndex: 99,
          padding: "100px 32px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 8,
          opacity: menuClosing ? 0 : 1,
          transition: menuClosing
            ? "opacity 150ms cubic-bezier(0.23, 1, 0.32, 1)"
            : "opacity 300ms cubic-bezier(0.32, 0.72, 0, 1)",
        }}>
          {links.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: 32,
                color: "#111",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s cubic-bezier(0.32,0.72,0,1) ${i * 60}ms, transform 0.4s cubic-bezier(0.32,0.72,0,1) ${i * 60}ms`,
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={closeMenu}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "var(--accent)",
              color: "#fff",
              padding: "16px 24px 16px 28px",
              borderRadius: 100,
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "var(--font-body), sans-serif",
              marginTop: 24,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.4s cubic-bezier(0.32,0.72,0,1) ${links.length * 60}ms, transform 0.4s cubic-bezier(0.32,0.72,0,1) ${links.length * 60}ms`,
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
            }}>→</span>
          </a>
        </div>
      )}
    </>
  );
}
