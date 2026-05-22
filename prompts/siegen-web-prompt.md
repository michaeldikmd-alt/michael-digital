# Siegen Web — Landing Page Überarbeitung

Du arbeitest an meiner bestehenden Next.js + Tailwind Website (siegen-web.de).
Aktuell vorhanden: Hero, Leistungen, Kontaktformular.
Lies zuerst alle vorhandenen Dateien, bevor du irgendetwas änderst.

---

## Kontext

- **Unternehmen:** Siegen Web, Einzelunternehmen von Michael Dik
- **Zielgruppe:** Handwerksbetriebe (Elektriker, Maler, Klempner, Sanitär, Dachdecker) in Siegen-Wittgenstein
- **Angebot — KEINE weiteren Services hinzufügen:**
  - Einmalige Einrichtung: professionelle mobiloptimierte Website (fertig in 1 Woche), Google Business Profil Setup, Kontaktformular
  - Monatliche Betreuung: Hosting, technische Updates, Sicherheit, Inhaltsänderungen (bis 2x/Monat), WhatsApp-Support (Mo–Fr, Reaktionszeit 1 Werktag), Google Business Pflege
- **Zahlung:** 50% Anzahlung, 50% bei Fertigstellung, Banküberweisung

---

## Harte Constraints

1. **KEINE Preise nennen** — keine Euro-Beträge, keine Preiskarten, keine Zahlen im Zusammenhang mit Kosten. Nirgendwo auf der Seite.
2. **KEINE Bilder oder Fotos von Personen** — auch keine Platzhalter, keine Stockfotos, keine generischen Avatare. Sektionen die normalerweise ein Foto brauchen werden ohne Foto sauber aufgebaut.
3. **KEINE neuen Services hinzufügen** — nur Einrichtung + monatliche Betreuung existieren. Keine Add-ons, keine Zusatzpakete.
4. **KEINE erfundenen Sozialbeweise** — keine fake Testimonials, keine erfundenen Kundenzahlen, keine Logos die es nicht gibt. Wo Social Proof später hinkommt: Code-Kommentar `{/* TODO: Nach ersten Kunden einbauen */}` an die richtige Stelle setzen, aber kein sichtbarer Inhalt.

---

## Umsetzung — Sektion für Sektion

### Sticky Header

- Logo links
- Telefonnummer rechts als klickbarer `tel:` Link — immer sichtbar
- CTA-Button rechts: "Termin vereinbaren" (scrollt zu #kontakt)
- Auf Mobile: Tel-Link und CTA bleiben in der Top-Bar sichtbar, restliche Nav im Hamburger-Menü
- Bleibt beim Scrollen oben fixiert (`sticky top-0 z-50`)

---

### Hero

- **Headline** outcome-fokussiert, nicht feature-fokussiert:
  "Mehr Aufträge durch eine Website, die in Siegen gefunden wird"
- **Subheadline** (1–2 Sätze), kein Preis:
  "Professionelle Website + Google Business Profil + laufende Betreuung. Fertig in 7 Tagen. Persönlicher Termin bei dir im Betrieb."
- **Primärer CTA-Button:** "Termin vereinbaren" (scrollt zu #kontakt)
- **Sekundärer CTA:** Telefonnummer als `tel:` Link direkt daneben
- Kein Foto, kein Avatar, kein Platzhalter-Bild
- Platzhalter für späteren Social Proof direkt unter den CTAs:
  `{/* TODO: Nach ersten Kunden — Kundenzahl + kurzes Statement einbauen */}`

---

### Leistungs-Sektion

Zwei Karten nebeneinander (Mobile: gestapelt).
Kein Preis auf keiner Karte.

**Karte 1 — "Einmalige Einrichtung"**
- Professionelle, mobiloptimierte Website
- Fertig in 1 Woche
- Google Business Profil einrichten und optimieren
- Kontaktformular — Anfragen kommen direkt aufs Handy
- 50% Anzahlung, Rest bei Fertigstellung

**Karte 2 — "Monatliche Betreuung"**
- Hosting & Uptime — Website bleibt zuverlässig online
- Technische Updates & Sicherheit
- Inhaltsänderungen auf Wunsch (bis 2x pro Monat)
- WhatsApp-Support Mo–Fr, Antwort innerhalb 1 Werktag
- Google Business Pflege

Jeden Punkt mit Häkchen-Icon (Lucide oder Tabler).
Aus Kundenperspektive formuliert — kein Tech-Jargon.
Beispiel: statt "SEO-Optimierung" → "Wirst bei Google gefunden wenn jemand 'Elektriker Siegen' sucht"

---

### "So läuft das ab" — Prozess-Sektion

4 Schritte horizontal (Mobile: vertikal), mit Icon und kurzem Text:

1. **Kurzes Telefonat** — du sagst mir was du brauchst, ich melde mich persönlich bei dir
2. **Live-Demo deiner Website** — ich zeige dir deine fertige Seite, bevor du was bezahlst
3. **Fertigstellung in 7 Tagen** — 50% Anzahlung, Rest bei Abnahme
4. **Laufende Betreuung** — WhatsApp wenn was ist, Inhalte ändere ich für dich

---

### "Warum Siegen Web" — Wettbewerbs-Sektion

Zwei Spalten nebeneinander (Mobile: gestapelt).

**Links — "Andere Webdesigner..."**
- Versteckte Preise — du weißt erst nach 3 Telefonaten was es kostet
- Lange Wartezeiten — Wochen bis Monate bis zur fertigen Seite
- Kein Support nach Fertigstellung — Probleme löst du dann selber
- Sitzen in Berlin oder Hamburg — kein persönlicher Termin möglich

**Rechts — "Bei mir bekommst du..."**
- Transparenter Festpreis — du weißt vorher was es kostet. Punkt.
- Fertig in 7 Tagen — nicht 7 Wochen
- WhatsApp-Support — schreib mir, ich antworte
- Aus Siegen für Siegen — ich komme persönlich zu dir in den Betrieb

---

### Kontaktformular-Sektion (`#kontakt`)

**Formular-Felder:**
- Name (Pflicht)
- Telefon (Pflicht)
- E-Mail (Pflicht)
- Beste Erreichbarkeit (Select, Pflicht): "8–12 Uhr", "12–16 Uhr", "16–20 Uhr", "Jederzeit"
- Kurze Projektinfo (Textarea, optional)
- DSGVO-Checkbox (Pflicht): "Ich stimme zu, dass die in das Formular eingegebenen Daten verarbeitet und zur Kontaktaufnahme verwendet werden können."
- Submit-Button: "Anfrage absenden"

**Neben dem Formular:**
- Telefonnummer groß als `tel:` Link
- E-Mail: info@siegen-web.de
- Google Calendar Buchungs-Link als Button: "Termin direkt buchen"

**Platzhalter für Google Calendar Embed:**
```tsx
{/*
  TODO: Google Calendar Terminplanung einbetten
  1. calendar.google.com öffnen
  2. Einstellungen → Terminplanung → Neuer Termintyp
  3. "Erstgespräch 30 Min" anlegen
  4. Buchungsseiten-Link hier einbauen
  Link-Format: https://calendar.google.com/calendar/appointments/...
*/}
```

---

### Footer

- Links: Impressum (`/impressum`), Datenschutzerklärung (`/datenschutz`)
- Mitte oder rechts: info@siegen-web.de
- Copyright: © 2026 Siegen Web — Michael Dik

---

### Impressum-Seite (`/impressum`)

Standard-Aufbau für Einzelunternehmer nach deutschem Recht.
Platzhalter `[HIER EINTRAGEN]` für:
- Vollständiger Name
- Vollständige Adresse (Straße, PLZ, Ort)
- Telefonnummer
- E-Mail
- Steuernummer oder USt-IdNr.
- Verantwortlich i.S.d. § 55 RStV

---

### Datenschutzerklärung (`/datenschutz`)

Standard-Datenschutzerklärung für Einzelunternehmer mit Kontaktformular und Vercel-Hosting.
Platzhalter `[HIER EINTRAGEN]` für Verantwortlichen-Daten.

Mindestens diese Punkte abdecken:
- Verantwortlicher
- Datenerhebung beim Website-Besuch
- Kontaktformular (Zweck, Speicherdauer, Rechtsgrundlage)
- Hosting bei Vercel (Vercel Inc., USA — mit Hinweis auf Datenübertragung)
- Rechte des Betroffenen (Auskunft, Löschung, Widerspruch)
- SSL-Verschlüsselung
- Keine Weitergabe an Dritte

---

### Cookie-Banner

- Minimales Banner, fixiert am unteren Bildschirmrand
- Text: "Diese Website verwendet essenzielle Cookies."
- Zwei Buttons: "Alle akzeptieren" und "Nur essenzielle"
- Entscheidung in `localStorage` speichern
- Banner verschwindet nach Auswahl und erscheint beim nächsten Besuch nicht mehr

---

### SEO & Metadata

In `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Siegen Web — Websites für Handwerksbetriebe in Siegen-Wittgenstein",
  description: "Professionelle Website + Google Business Profil + laufende Betreuung für Handwerker in Siegen. Persönlicher Service, transparenter Festpreis, fertig in 7 Tagen.",
  metadataBase: new URL("https://siegen-web.de"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Siegen Web — Websites für Handwerksbetriebe in Siegen",
    description: "Website + Google Business + monatliche Betreuung für Handwerker in Siegen-Wittgenstein.",
    locale: "de_DE",
    type: "website",
    url: "https://siegen-web.de",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}
```

Zusätzlich:
- JSON-LD strukturierte Daten für `LocalBusiness` in `app/page.tsx`:
  - name: "Siegen Web"
  - areaServed: "Siegen-Wittgenstein"
  - description, url, telephone, email
- `public/robots.txt` mit Sitemap-Verweis anlegen
- `public/sitemap.xml` statisch anlegen (oder `next-sitemap` konfigurieren)
- Falls noch kein Favicon: `public/favicon.ico` Platzhalter + passende Meta-Tags

---

### Mobile-Anforderungen

- Alle CTA-Buttons: `min-h-[48px]`
- Alle Telefonnummern: klickbarer `tel:` Link
- Kein horizontaler Overflow
- Form-Inputs: mindestens `py-3 px-4` für Touch-Freundlichkeit
- Auf Mobile: Leistungskarten gestapelt, Prozess-Schritte vertikal, Wettbewerbs-Spalten gestapelt

---

## Output — IMPLEMENTATION.md

Erstelle nach Abschluss eine Datei `IMPLEMENTATION.md` im Projekt-Root mit genau diesen drei Abschnitten:

### 1. Was gemacht wurde
Jede geänderte oder neue Datei — eine Zeile pro Datei, mit kurzem Hinweis was geändert wurde.

### 2. Was Michael jetzt sofort manuell erledigen muss
- Echte Daten in `/impressum` eintragen (alle `[HIER EINTRAGEN]` Stellen)
- Echte Daten in `/datenschutz` eintragen
- Google Calendar → Terminplanung aktivieren → "Erstgespräch 30 Min" anlegen → Buchungslink in Kontakt-Sektion einbauen
- Favicon erstellen und ersetzen (Tool: favicon.io)
- Google Search Console einrichten → Sitemap unter `siegen-web.de/sitemap.xml` submitten
- PageSpeed Insights auf siegen-web.de laufen lassen → Core Web Vitals prüfen
- Google Business Profil für "Siegen Web" anlegen (gleichzeitig Testlauf für den Service den du verkaufst)

### 3. Was nach den ersten Kunden kommt
- Social-Proof-Sektion einbauen: Kundenzahl + kurzes Statement (Platzhalter ist bereits im Code markiert)
- Kundenlogos als laufendes Band unter dem Hero
- Case Studies: je Kunde ein Vorher/Nachher-Screenshot, konkrete Zahlen, Link zur fertigen Website
- Google-Bewertungen einbinden (Widget oder manuell als Zitate)
- Eigenes Foto in separater "Über mich"-Sektion
- Testimonials als Zitate mit Namen und Betrieb
