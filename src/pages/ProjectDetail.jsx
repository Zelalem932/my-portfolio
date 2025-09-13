import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const p = projects.find(x => x.id === id);

  if (!p) {
    return (
      <div className="section container">
        <h2>Project not found</h2>
        <p className="muted">No project with id {id}</p>
        <Link to="/projects" className="btn btn-ghost">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="section container">
      <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
        <div style={{flex:"1 1 360px",minWidth:280}}>
          <div className="card">
            {p.image ? (
              <img src={p.image} alt={p.title} style={{width:"100%",height:220,objectFit:"cover",borderRadius:8}} />
            ) : (
              <div style={{height:220,borderRadius:8,background:"#111",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div className="muted">Project image</div>
              </div>
            )}
            <h2 style={{marginTop:12}}>{p.title}</h2>
            <p className="muted">{p.short}</p>
            <div style={{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"}}>
              {p.tech.map(t => <span key={t} className="skill">{t}</span>)}
            </div>
            <div style={{marginTop:16,display:"flex",gap:8}}>
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">Code</a>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary">Live</a>}
              <Link to="/projects" className="btn btn-ghost">Back</Link>
              <Link to="/testimonials" className="btn btn-ghost">Testimonials</Link>
            </div>
          </div>
        </div>

        <div style={{flex:"2 1 480px"}}>
          <div className="card">
            <h3>Problem</h3>
            <p className="muted">{p.desc}</p>

            <h3 style={{marginTop:12}}>Solution & Architecture</h3>
            <p className="muted">Explain architecture here. Add screenshots below.</p>

            {Array.isArray(p.images) && p.images.length > 0 && (
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12,marginTop:12}}>
                {p.images.map((src, idx) => (
                  <img key={idx} src={src} alt={`${p.title} screenshot ${idx+1}`} style={{width:"100%",height:180,objectFit:"cover",borderRadius:8}} />
                ))}
              </div>
            )}

            <h3 style={{marginTop:12}}>Key takeaways</h3>
            <ul className="muted">
              <li>What you built</li>
              <li>Tradeoffs</li>
              <li>Next steps</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
