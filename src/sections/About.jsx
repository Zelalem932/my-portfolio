// src/pages/About.jsx
import React from "react";
import SkillBadge from "../components/SkillBadge";

export default function About() {
  return (
    <main className="section container about-grid">
      <div className="about-left">
        <h1>About Me</h1>
        <h1>Web Developer — Zelalem Belay<span style={{color: "var(--primary)"}}>•</span></h1>
        <h3 className="muted">Skills & Journey</h3>

        <p>
          I build clean, responsive websites and web apps using HTML, CSS, JavaScript, Bootstrap and React, 
          and I’m comfortable on the backend with Python, PHP and MySQL.<b> I’ve delivered real projects including 
          a WordPress e-commerce site (Yeti Fashion), a full-stack face-scan attendance system, and a full-stack complaint 
          management system.</b>
        </p>

        <p>
          I know how to take an idea from design to a working product. I stay current with
           modern tools and best practices, focus on usability and performance, and deliver work on time.
            If you need a reliable developer to turn your requirements into a polished, maintainable solution,
             I’m ready to help.
        </p>
      </div>

      <div className="about-right">
        <section>
          <h3>💻 Programming & Tools</h3>
          <div className="badge-grid">
            {["HTML","CSS","JavaScript","React","WordPress","Python","PHP","MySQL","UI/UX Design"]
              .map((s) => <SkillBadge key={s} label={s} />)}
          </div>
        </section>
        <section style={{marginTop: "2rem"}}>
          <h3>📝 Certificates</h3>
          <div className="badge-grid">
            {["Udacity Nanodegree","Frontend Development","Web Development and Database Administration"]
              .map((c) => <SkillBadge key={c} label={c} />)}
          </div>
        </section>

      </div>
    </main>
  );
}
