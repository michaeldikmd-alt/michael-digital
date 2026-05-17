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
  title: "Siegen Web — Websites für Handwerksbetriebe in Siegen-Wittgenstein",
  description:
    "Professionelle Website + Google Business Profil + laufende Betreuung für Handwerker in Siegen. Persönlicher Service, fertig in 7 Tagen.",
  metadataBase: new URL("https://siegen-web.de"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Siegen Web — Websites für Handwerksbetriebe in Siegen",
    description:
      "Website + Google Business + monatliche Betreuung für Handwerker in Siegen-Wittgenstein.",
    locale: "de_DE",
    type: "website",
    url: "https://siegen-web.de",
    siteName: "Siegen Web",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Siegen Web",
  description:
    "Professionelle Websites + Google Business Profil für Handwerksbetriebe in Siegen-Wittgenstein.",
  url: "https://siegen-web.de",
  areaServed: "Siegen-Wittgenstein",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siegen",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+4915752987113",
    email: "info@siegen-web.de",
    contactType: "customer service",
    availableLanguage: "German",
  },
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
