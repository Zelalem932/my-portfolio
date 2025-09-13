// src/components/TestimonialCard.jsx
import React from "react";

export default function TestimonialCard({ t }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < (t.rating || 0) ? "★" : "☆"
  );

  return (
    <article className="testimonial-card card" aria-labelledby={`t-${t.id}-name`}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <img
          src={t.avatar || "/assets/avatar.jpg"}
          alt={`${t.name} avatar`}
          width="64"
          height="64"
          style={{
            width: 64,
            height: 64,
            objectFit: "cover",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        />
        <div>
          <div id={`t-${t.id}-name`} style={{ fontWeight: 700 }}>
            {t.name}
          </div>
          <div className="muted" style={{ fontSize: 13 }}>
            {t.role} · <span style={{ color: "var(--muted)" }}>{t.date}</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 12, color: "var(--muted)" }}>{t.message}</div>

      <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div aria-hidden style={{ color: "#ffcc33", fontSize: 16 }}>{stars.join(" ")}</div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>ID: {t.id}</div>
      </div>
    </article>
  );
}
