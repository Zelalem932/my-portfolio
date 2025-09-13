import React from "react";

export default function Resume() {
  return (
    <div className="section container">
      <h2>Resume</h2>
      <div className="card" style={{padding:20}}>
        <h3>Zelalem Belay</h3>
        <p className="muted">Frontend Developer — building UIs & full-stack apps.</p>

        <h4 style={{marginTop:12}}>Experience</h4>
        <ul className="muted">
          <li>Yeti Fashion — Frontend Developer (2024-2025)</li>
          <li>Face Scan Attendance — Fullstack Developer (2024-2025)</li>
          <li>Complaint Management — Fullstack Developer (2024-2025)</li>
        </ul>

        <h4 style={{marginTop:12}}>Education</h4>
        <div className="muted">Web Development and Database Administration — Adama Politechnic Collage</div>

        <div style={{marginTop:16}}>
          <a href="/resume.pdf" className="btn btn-primary">Download PDF</a>
        </div>
      </div>
    </div>
  );
}
