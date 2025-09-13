import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        {p.image ? (
          <img src={p.image} alt={p.title} style={{width:"100%", height:"auto", display:"block", objectFit:"cover"}} />
        ) : (
          <div style={{padding:12}}>{p.title}</div>
        )}
      </div>

      <div>
        <div className="project-title">{p.title}</div>
        <div className="project-tech">{p.short}</div>
      </div>

      <div style={{marginTop:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Link to={`/projects/${p.id}`} className="btn btn-ghost" style={{fontSize:13}}>Details</Link>
        {p.live ? <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{fontSize:13}}>Live</a> : <span style={{color:"var(--muted)", fontSize:13}}>No demo</span>}
      </div>
    </article>
  );
}
