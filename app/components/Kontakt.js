"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TEL_DISPLAY = "01575 2987113";
const TEL_HREF = "tel:+4915752987113";
const EMAIL = "info@siegen-web.de";

export default function Kontakt() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    name: "",
    telefon: "",
    email: "",
    erreichbarkeit: "",
    nachricht: "",
    dsgvo: false,
    website: "",
  });
  const [gesendet, setGesendet] = useState(false);
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [submitPressed, setSubmitPressed] = useState(false);
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.06 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
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
    } catch {
      setFehler("Etwas ist schiefgelaufen. Bitte schreib mir direkt an " + EMAIL);
    } finally {
      setLaden(false);
    }
  }

  function getInputStyle(fieldName) {
    const isFocused = focusedField === fieldName;
    return {
      width: "100%",
      padding: "13px 16px",
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
          }}>Kontakt</p>
          <h2 style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? 28 : 40,
            color: "#111",
            marginBottom: 16,
          }}>
            Termin vereinbaren
          </h2>
          <p style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: 16,
            color: "#666",
            lineHeight: 1.6,
            maxWidth: 420,
            margin: "0 auto",
          }}>
            Schreib mir kurz — ich melde mich persönlich bei dir.
          </p>
        </div>

        {gesendet ? (
          <div style={{
            maxWidth: 560,
            margin: "0 auto",
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
              }}>Danke für deine Anfrage!</h3>
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: 15,
                color: "#666",
              }}>Ich melde mich innerhalb von 1 Werktag persönlich bei dir.</p>
            </div>
          </div>
        ) : (
          <div
            ref={formRef}
            style={{
              display: isMobile ? "flex" : "grid",
              flexDirection: isMobile ? "column" : undefined,
              gridTemplateColumns: isMobile ? undefined : "1fr 380px",
              gap: 40,
              alignItems: "flex-start",
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 700ms cubic-bezier(0.32,0.72,0,1), transform 700ms cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            {/* Form */}
            <div style={{
              background: "rgba(0,0,0,0.025)",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 24,
              padding: 6,
            }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#fff",
                  borderRadius: 19,
                  padding: isMobile ? "28px 20px" : "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  position: "relative",
                }}
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0,0,0,0)",
                    whiteSpace: "nowrap",
                    border: 0,
                  }}
                />

                {/* Name */}
                <div>
                  <label style={labelStyle} htmlFor="name">Name *</label>
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

                {/* Telefon + E-Mail */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: 16,
                }}>
                  <div>
                    <label style={labelStyle} htmlFor="telefon">Telefon *</label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      required
                      placeholder="0170 1234567"
                      value={form.telefon}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("telefon")}
                      onBlur={() => setFocusedField(null)}
                      style={getInputStyle("telefon")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">E-Mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="max@betrieb.de"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={getInputStyle("email")}
                    />
                  </div>
                </div>

                {/* Beste Erreichbarkeit */}
                <div>
                  <label style={labelStyle} htmlFor="erreichbarkeit">Beste Erreichbarkeit *</label>
                  <select
                    id="erreichbarkeit"
                    name="erreichbarkeit"
                    required
                    value={form.erreichbarkeit}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("erreichbarkeit")}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle("erreichbarkeit"),
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      paddingRight: 40,
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>Bitte wählen…</option>
                    <option value="8-12">8–12 Uhr</option>
                    <option value="12-16">12–16 Uhr</option>
                    <option value="16-20">16–20 Uhr</option>
                    <option value="jederzeit">Jederzeit</option>
                  </select>
                </div>

                {/* Kurze Projektinfo */}
                <div>
                  <label style={labelStyle} htmlFor="nachricht">Kurze Projektinfo (optional)</label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={3}
                    placeholder="Was machst du, was soll die Website leisten?"
                    value={form.nachricht}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("nachricht")}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...getInputStyle("nachricht"), resize: "vertical", minHeight: 90 }}
                  />
                </div>

                {/* DSGVO */}
                <label style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  cursor: "pointer",
                }}>
                  <input
                    type="checkbox"
                    name="dsgvo"
                    required
                    checked={form.dsgvo}
                    onChange={handleChange}
                    style={{
                      width: 18,
                      height: 18,
                      marginTop: 1,
                      accentColor: "var(--accent)",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}
                  />
                  <span style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.6,
                  }}>
                    Ich stimme zu, dass die in das Formular eingegebenen Daten verarbeitet und zur Kontaktaufnahme verwendet werden können.*
                  </span>
                </label>

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
                    minHeight: 48,
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
              </form>
            </div>

            {/* Sidebar */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              paddingTop: isMobile ? 0 : 8,
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}>Lieber direkt?</p>

                <a href={TEL_HREF} style={{
                  display: "block",
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? 28 : 32,
                  color: "#111",
                  marginBottom: 12,
                  lineHeight: 1.1,
                }}>
                  {TEL_DISPLAY}
                </a>

                <a href={`mailto:${EMAIL}`} style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 15,
                  color: "#666",
                }}>
                  {EMAIL}
                </a>
              </div>

              <div style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 28,
              }}>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 14,
                  color: "#666",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}>
                  Oder such dir direkt einen Termin aus — kostenlos, unverbindlich, 30 Minuten.
                </p>

                {/*
                  TODO: Google Calendar Terminplanung einbetten
                  1. calendar.google.com öffnen
                  2. Einstellungen → Terminplanung → Neuer Termintyp
                  3. "Erstgespräch 30 Min" anlegen
                  4. Buchungsseiten-Link unten einsetzen
                  Link-Format: https://calendar.google.com/calendar/appointments/...
                */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "var(--bg)",
                    color: "#111",
                    border: "1px solid var(--border)",
                    padding: "13px 20px",
                    borderRadius: 100,
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: "var(--font-body), sans-serif",
                    minHeight: 48,
                    cursor: "default",
                    opacity: 0.5,
                  }}
                >
                  Termin direkt buchen →
                </a>
                <p style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: 12,
                  color: "#bbb",
                  marginTop: 8,
                }}>Google Calendar kommt noch</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
