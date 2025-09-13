import React from "react";
import posts from "../data/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="section container">
      <h2>Blog</h2>
      <div style={{marginTop:12,display:"grid",gap:12}}>
        {posts.map(p => (
          <article key={p.id} className="card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <h3 style={{marginBottom:6}}>{p.title}</h3>
                <div className="muted">{p.date}</div>
                <p className="muted" style={{marginTop:8}}>{p.excerpt}</p>
              </div>
              <div>
                <Link to="#" className="btn btn-ghost">Read</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
