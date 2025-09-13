import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid" style={{marginTop:12}}>
          {projects.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
}
