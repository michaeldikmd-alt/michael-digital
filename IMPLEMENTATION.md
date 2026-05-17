# Implementation — Siegen Web Überarbeitung

## 1. Was gemacht wurde

| Datei | Änderung |
|-------|----------|
| `app/layout.js` | Metadata ohne Preise, `metadataBase`, `canonical`, `twitter`, `robots`; JSON-LD mit `url`, `contactPoint` (telephone + email), kein `priceRange` |
| `app/page.js` | `Pakete` entfernt; `Warum` und `CookieBanner` hinzugefügt |
| `app/components/Navbar.js` | Tel-Link immer sichtbar (Desktop + Mobile Top-Bar); CTA → "Termin vereinbaren"; Nav-Links aktualisiert (Leistungen, Ablauf, Warum Siegen Web) |
| `app/components/Hero.js` | Neue outcome-fokussierte Headline; Subheadline ohne Preis; primärer CTA "Termin vereinbaren" → #kontakt; sekundärer CTA als `tel:` Link; fake Desktop-Karte mit erfundenen Bewertungen entfernt; TODO-Kommentar für Social Proof gesetzt |
| `app/components/Leistungen.js` | Komplett neu: zwei Karten nebeneinander (Einmalige Einrichtung / Monatliche Betreuung) mit `CheckCircle`-Icons; kein Preis; mobile gestapelt |
| `app/components/Ablauf.js` | 4 Schritte statt 5; horizontal auf Desktop (4-Spalten-Grid mit verbindender Linie), vertikal auf Mobile; neuer Inhalt laut Spec |
| `app/components/Warum.js` | **Neu.** Zwei-Spalten-Vergleich: "Andere Webdesigner…" (X-Icons) vs. "Bei mir bekommst du…" (Checkmarks); mobile gestapelt |
| `app/components/Kontakt.js` | Neue Felder: E-Mail (Pflicht), Telefon (jetzt Pflicht), Beste Erreichbarkeit (Select, Pflicht), DSGVO-Checkbox (Pflicht); Layout zweispaltig (Formular + Kontakt-Sidebar mit Tel, E-Mail, Google Calendar Platzhalter); `betrieb`-Feld entfernt |
| `app/components/CookieBanner.js` | **Neu.** Fixiert unten, `localStorage`, zwei Buttons: "Nur essenzielle" / "Alle akzeptieren"; verschwindet nach Auswahl permanent |
| `app/components/Footer.js` | `info@siegen-web.de` ergänzt; Nav-Links aktualisiert; Copyright-Text → "© 2026 Siegen Web — Michael Dik" |
| `app/api/kontakt/route.js` | Felder `email` (Pflicht) und `erreichbarkeit` hinzugefügt; `betrieb` entfernt; `replyTo` auf Absender-E-Mail gesetzt; E-Mail-Template aktualisiert |
| `app/impressum/page.js` | Titel → "Impressum — Siegen Web" |
| `app/datenschutz/page.js` | Titel → "Datenschutzerklärung — Siegen Web"; Abschnitt 6 aktualisiert (localStorage für Cookie-Banner korrekt beschrieben, kein Tracking-Cookie) |
| `app/components/Pakete.js` | **Gelöscht** (zeigte Preise — Constraint #1) |
| `app/robots.js` | Bereits korrekt — keine Änderung |
| `app/sitemap.js` | Bereits korrekt — keine Änderung |

---

## 2. Was du jetzt sofort manuell erledigen musst

**Google Calendar:**
- calendar.google.com → Einstellungen → Terminplanung → Neuer Termintyp
- "Erstgespräch 30 Min" anlegen
- Buchungslink in `app/components/Kontakt.js` einsetzen (TODO-Kommentar im Code markiert die Stelle)
- Button-Opacity von `0.5` auf `1` setzen und `href="#"` durch den echten Link ersetzen

**Resend (E-Mail-Versand):**
- In `app/api/kontakt/route.js` den `from`-Wert von `onboarding@resend.dev` auf eine verifizierte Domain-E-Mail umstellen sobald `siegen-web.de` bei Resend verifiziert ist

**Google Search Console:**
- Search Console einrichten
- Sitemap unter `https://siegen-web.de/sitemap.xml` submitten

**Favicon:**
- Echtes Favicon erstellen (Tool: favicon.io)
- `app/favicon.ico` ersetzen

**PageSpeed Insights:**
- `https://pagespeed.web.dev` → siegen-web.de eingeben
- Core Web Vitals prüfen, besonders LCP und CLS

**Google Business Profil:**
- Profil für "Siegen Web" anlegen (gleichzeitig Testlauf für den Service, den du verkaufst)

---

## 3. Was nach den ersten Kunden kommt

- **Social Proof im Hero:** Kundenzahl + kurzes Statement direkt unter den CTA-Buttons einbauen — TODO-Kommentar ist im Code bereits markiert (`app/components/Hero.js`)
- **Kundenlogos:** Laufendes Band unter dem Hero
- **Case Studies:** Vorher/Nachher-Screenshots, konkrete Ergebnisse (Google-Ranking, Anfragen), Link zur fertigen Website
- **Google-Bewertungen:** Widget oder manuelle Zitate mit Name und Betrieb
- **Testimonials:** Zitat, Name, Branche — als eigene Sektion zwischen Ablauf und Kontakt
- **Eigenes Foto:** "Über mich"-Sektion mit persönlichem Foto und Kurzvorstellung
