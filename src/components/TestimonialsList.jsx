// src/components/TestimonialsList.jsx
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import sampleTestimonials from "../data/testimonials";

const STORAGE_KEY = "my_portfolio_testimonials_v1";

export default function TestimonialsList() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest"); // or 'rating'

  useEffect(() => {
    // load from localStorage then fallback to sample
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      let list = raw ? JSON.parse(raw) : null;
      if (!list || !Array.isArray(list) || list.length === 0) list = sampleTestimonials;
      setItems(list);
    } catch {
      setItems(sampleTestimonials);
    }
  }, []);

  useEffect(() => {
    // persist on items change
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  // add handler removed (was unused)

  const visible = items
    .filter((it) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        it.name.toLowerCase().includes(q) ||
        it.role?.toLowerCase().includes(q) ||
        it.message?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
      // newest
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div style={{ display: "grid", gap: 18 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <input className="input" placeholder="Search testimonials..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="input" value={sort} onChange={(e) => setSort(e.target.value)} style={{ maxWidth: 180 }}>
          <option value="newest">Newest first</option>
          <option value="rating">Highest rating</option>
        </select>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        {visible.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>

      {/* small callback button for demo */}
      <div className="muted" style={{ fontSize: 13 }}>
        Showing {visible.length} testimonial(s). New submissions are saved locally in your browser.
      </div>
    </div>
  );
}
