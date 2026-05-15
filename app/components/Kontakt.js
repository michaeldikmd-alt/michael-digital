"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Kontakt() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ name: "", telefon: "", betrieb: "", nachricht: "" });
  const [gesendet, setGesendet] = useState(false);
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [submitPressed, setSubmitPressed] = useState(false);
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.08 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLaden(true);
    setFehler("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Unbekannter Fehler");
      }

      setGesendet(true);
    } catch (err) {
      setFehler("Etwas ist schiefgelaufen. Bitte schreib mir direkt an michael.dik.md@gmail.com");
    } finally {
      setLaden(false);
    }
  }

  function getInputStyle(fieldName) {
    const isFocused = focusedField === fieldName;
    return {
      width: "100%",
      padding: "12px 14px",
      borderRadius: 10,
      border: isFocused ? "1px solid var(--accent)" : "1px solid var(--border)",
      boxShadow: isFocused ? "0 0 0 3px rgba(201,75,0,0.1)" : "none",
      background: "#fff",
      fontFamily: "var(--font-body), sans-serif",
      fontSize: 15,
      color: "#111",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 0.2s, box-shadow 0.2s",
    };
  }

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-body), sans-serif",
    fontSize: 13,
    fontWeight: 500,
    color: "#555",
    marginBottom: 6,
  };

  return (
    <section id="kontakt" style={{
      background: "#fff",
      padding: isMobile ? "80px 20px" : "120px 40px",
    }}>
      <div style={{
        maxWidth: 620,
        margin: "0 auto",
      }}>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 12,
          fontWeight: 500,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 12,
          textAlign: "center",
        }}>Kontakt</p>

        <h2 style={{
          fontFamily: "var(--font-heading), sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? 28 : 40,
          color: "#111",
          marginBottom: 12,
          textAlign: "center",
        }}>
          Kostenlos anfragen
        </h2>
        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: 16,
          color: "#666",
          lineHeight: 1.6,
          textAlign: "center",
          marginBottom: 48,
        }}>
          Schreib mir kurz — ich melde mich innerhalb von 24 Stunden und wir besprechen alles ganz entspannt.
        </p>

        {gesendet ? (
          <div style={{
            background: "rgba(0,0,0,0.025)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: 24,
            padding: 6,
          }}>
            <div style={{
              background: "#fff",
              borderRadius: 19,
              padding: isMobile ? "40px 24px" : "56px 40px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>✅</div>
              <h3 style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#111",
                marginBottom: 8,
              }}>Nachricht erhalten!</h3>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 15,
                color: "#666",
              }}>Ich melde mich innerhalb von 24 Stunden bei dir. Bis gleich!</p>
            </div>
          </div>
        ) : (
          <div
            ref={formRef}
            style={{
              background: "rgba(0,0,0,0.025)",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 24,
              padding: 6,
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 800ms cubic-bezier(0.32,0.72,0,1), transform 800ms cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#fff",
                borderRadius: 19,
                padding: isMobile ? "28px 20px" : "40px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 16,
              }}>
                <div>
                  <label style={labelStyle} htmlFor="name">Dein Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Max Mustermann"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle("name")}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="telefon">Telefon / WhatsApp</label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    placeholder="0170 1234567"
                    value={form.telefon}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("telefon")}
                    onBlur={() => setFocusedField(null)}
                    style={getInputStyle("telefon")}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle} htmlFor="betrieb">Dein Betrieb *</label>
                <input
                  id="betrieb"
                  name="betrieb"
                  type="text"
                  required
                  placeholder="z.B. Malerbetrieb Fischer, Elektro Bauer…"
                  value={form.betrieb}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("betrieb")}
                  onBlur={() => setFocusedField(null)}
                  style={getInputStyle("betrieb")}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="nachricht">Was brauchst du?</label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  placeholder="Kurze Beschreibung — was machst du, was soll die Website leisten?"
                  value={form.nachricht}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("nachricht")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...getInputStyle("nachricht"), resize: "vertical", minHeight: 100 }}
                />
              </div>

              {fehler && (
                <p style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 14,
                  color: "#c00",
                  background: "#fff0f0",
                  border: "1px solid #fcc",
                  borderRadius: 8,
                  padding: "10px 14px",
                }}>{fehler}</p>
              )}

              <button
                type="submit"
                disabled={laden}
                onMouseDown={() => !laden && setSubmitPressed(true)}
                onMouseUp={() => setSubmitPressed(false)}
                onMouseLeave={() => setSubmitPressed(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background: laden ? "#999" : "var(--accent)",
                  color: "#fff",
                  border: "none",
                  padding: "14px 14px 14px 28px",
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "var(--font-body), sans-serif",
                  cursor: laden ? "not-allowed" : "pointer",
                  width: "100%",
                  transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
                  transform: submitPressed && !laden ? "scale(0.97)" : "scale(1)",
                }}
              >
                {laden ? "Wird gesendet…" : "Anfrage absenden"}
                {!laden && (
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    fontSize: 16,
                    flexShrink: 0,
                  }}>→</span>
                )}
              </button>

              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 12,
                color: "#aaa",
                textAlign: "center",
                marginTop: -8,
              }}>
                Kostenlos & unverbindlich. Keine Weitergabe deiner Daten.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
