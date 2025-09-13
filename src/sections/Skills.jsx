import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Python", "PHP", "MySQL", "Tailwind"];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="card">
        <div className="skill-list">
          {skills.map(s => <div key={s} className="skill">{s}</div>)}
        </div>
      </div>
    </section>
  );
}
