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
  title: "Michael Digital — Web & Automatisierung für Handwerksbetriebe",
  description: "Ich baue Websites und automatisiere Büroprozesse für Handwerksbetriebe im Raum Attendorn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}