import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Handwerker Website Siegen-Wittgenstein | Michael Digital",
  description: "Professionelle Websites für Handwerksbetriebe in Siegen-Wittgenstein. Google Business Einrichtung inklusive. Ab 600€, fertig in 1 Woche. Jetzt kostenlos anfragen.",
  openGraph: {
    title: "Michael Digital — Handwerker-Websites in Siegen-Wittgenstein",
    description: "Professionelle Website + Google Business für Handwerksbetriebe. Ab 600€ einmalig, fertig in 1 Woche.",
    url: "https://michael-digital.vercel.app",
    type: "website",
    siteName: "Michael Digital",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Michael Digital",
  "description": "Professionelle Websites für Handwerksbetriebe",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Siegen",
    "addressRegion": "Nordrhein-Westfalen",
    "addressCountry": "DE",
  },
  "areaServed": "Siegen-Wittgenstein",
  "email": "michael.dik.md@gmail.com",
  "telephone": "+4915752987113",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}