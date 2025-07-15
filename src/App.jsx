import About from "./components/About";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HiringProcess from "./components/HiringProcess";
import Perks from "./components/Perks";
import Requirements from "./components/Requirements";
import Responsibilites from "./components/Responsibilites";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Responsibilites />
      <Requirements />
      <Perks />
      <HiringProcess />
      <CTA />
    </div>
  );
};

export default App;
