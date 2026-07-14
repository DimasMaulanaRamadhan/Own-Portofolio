import { useState, useEffect } from "react";
import { smoothScrollTo } from './utils/smoothScroll'
import TitleScreen from "./components/layout/TitleScreen";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import JourneyLog from "./components/layout/JourneyLog";
import SkillTree from "./components/layout/SkillTree";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const title = document.getElementById("title");
    if (!title) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowNavbar(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  const handleStart = () => {
    smoothScrollTo('hero', 1000)
  };

  return (
    <div className="bg-bg text-parchment font-body">
      <Navbar visible={showNavbar} />
      <TitleScreen onStart={handleStart} />
      <Hero />
      <About />
      <JourneyLog />
      <Projects />
      <SkillTree />
      <Contact />
    </div>
  );
}
