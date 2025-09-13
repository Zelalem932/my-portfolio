// src/pages/Testimonials.jsx
import React from "react";
import TestimonialsList from "../components/TestimonialsList";
import TestimonialForm from "../components/TestimonialForm";

export default function Testimonials() {
  const handleAddExternal = (t) => {
    // optional callback when form adds a testimonial — nothing needed for now
    console.log("New testimonial added:", t);
  };

  return (
    <main className="section container">
      <h1 style={{ marginBottom: 8 }}>Testimonials</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Read feedback from clients and colleagues. Add your own testimonial below (saved locally).
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 18 }}>
        <div>
          <TestimonialsList onAdd={handleAddExternal} />
        </div>

        <aside>
          <TestimonialForm
            onAdd={(t) => {
              // update local storage via the list component: we use custom event pattern
              // find existing items and prepend — simplest approach: read storage and write
              try {
                const key = "my_portfolio_testimonials_v1";
                const raw = localStorage.getItem(key);
                const list = raw ? JSON.parse(raw) : [];
                list.unshift(t);
                localStorage.setItem(key, JSON.stringify(list));
              } catch (err) {
                console.error(err);
              }
              handleAddExternal(t);
              // also dispatch a custom event so listing components can pick it up if necessary
              window.dispatchEvent(new CustomEvent("testimonial:added", { detail: t }));
            }}
          />
        </aside>
      </div>
    </main>
  );
}
