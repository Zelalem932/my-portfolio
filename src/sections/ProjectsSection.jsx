import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
