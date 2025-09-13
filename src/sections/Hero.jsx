import React from "react";
import ProfileCard from "../components/ProfileCard";

export default function Hero() {
  return (
    <section className="hero-panel">
      <div className="hero-grid">
        <aside className="hero-left">
          <div style={{maxWidth:360}}>
            <ProfileCard
              name="Zelalem Belay"
              title="Web Developer"
              handle="yourhandle"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/avatar.jpg"
              onContactClick={() => { alert("Contact clicked") }}
            />
          </div>
        </aside>
        <div>
          <div className="muted">Hi, My name is</div>
          <h1 className="hero-title">Zelalem Belay<br/>I build things for the web.</h1>
          <p className="hero-sub">I build polished Web Development experiences and production-ready web apps.</p>
          <div style={{display:"flex",gap:12}}>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-ghost">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
