"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookie-consent");
      if (!saved) setVisible(true);
    } catch {
      // localStorage not available (private mode etc.)
    }
  }, []);

  function save(value) {
    try {
      localStorage.setItem("cookie-consent", value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      padding: "12px 16px",
      background: "rgba(17,17,17,0.97)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    }}>
      <p style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: 14,
        color: "rgba(255,255,255,0.7)",
        margin: 0,
        flex: "1 1 240px",
      }}>
        Diese Website verwendet essenzielle Cookies.{" "}
        <a href="/datenschutz" style={{ color: "var(--accent)", textDecoration: "underline" }}>
          Mehr erfahren
        </a>
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={() => save("essential")}
          onMouseDown={() => setPressed("essential")}
          onMouseUp={() => setPressed(null)}
          onMouseLeave={() => setPressed(null)}
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 100,
            padding: "9px 18px",
            cursor: "pointer",
            minHeight: 40,
            transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
            transform: pressed === "essential" ? "scale(0.97)" : "scale(1)",
          }}
        >
          Nur essenzielle
        </button>
        <button
          onClick={() => save("all")}
          onMouseDown={() => setPressed("all")}
          onMouseUp={() => setPressed(null)}
          onMouseLeave={() => setPressed(null)}
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: "#fff",
            background: "var(--accent)",
            border: "none",
            borderRadius: 100,
            padding: "9px 18px",
            cursor: "pointer",
            minHeight: 40,
            transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
            transform: pressed === "all" ? "scale(0.97)" : "scale(1)",
          }}
        >
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
}
