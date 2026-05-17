import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Leistungen from "./components/Leistungen";
import Ablauf from "./components/Ablauf";
import Warum from "./components/Warum";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Leistungen />
      <Ablauf />
      <Warum />
      <Kontakt />
      <Footer />
      <CookieBanner />
    </main>
  );
}
