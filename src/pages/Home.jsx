import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ProjectsSection from "../sections/ProjectsSection";
import Contact from "../sections/Contact"


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
