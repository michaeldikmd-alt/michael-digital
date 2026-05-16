import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Leistungen from "./components/Leistungen";
import Pakete from "./components/Pakete";
import Ablauf from "./components/Ablauf";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Leistungen />
      <Pakete />
      <Ablauf />
      <Kontakt />
      <Footer />
    </main>
  );
}
