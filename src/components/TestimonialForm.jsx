// src/components/TestimonialForm.jsx
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // make sure uuid is installed (npm i uuid)

export default function TestimonialForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    avatar: "",
    rating: 5,
    message: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please provide your name and message.");
      return;
    }

    setSaving(true);
    const newTestimonial = {
      id: uuidv4(),
      name: form.name.trim(),
      role: form.role.trim() || "Client",
      avatar: form.avatar.trim() || "/assets/avatar.jpg",
      rating: Math.max(1, Math.min(5, Number(form.rating) || 5)),
      message: form.message.trim(),
      date: new Date().toISOString().slice(0, 10),
    };

    try {
      // call parent
      onAdd(newTestimonial);

      // reset
      setForm({ name: "", role: "", avatar: "", rating: 5, message: "" });
    } catch (err) {
      setError("Could not save testimonial.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} aria-label="Submit testimonial">
      <h3 style={{ marginBottom: 8 }}>Leave a testimonial</h3>

      <div style={{ display: "grid", gap: 8 }}>
        <input
          className="input"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          name="role"
          placeholder="Your role (optional)"
          value={form.role}
          onChange={handleChange}
        />
        <input
          className="input"
          name="avatar"
          placeholder="Avatar URL (optional)"
          value={form.avatar}
          onChange={handleChange}
        />
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="muted" style={{ minWidth: 70 }}>Rating</span>
          <select name="rating" value={form.rating} onChange={handleChange} className="input" style={{ maxWidth: 100 }}>
            <option value={5}>5 — Excellent</option>
            <option value={4}>4 — Very good</option>
            <option value={3}>3 — Good</option>
            <option value={2}>2 — Fair</option>
            <option value={1}>1 — Poor</option>
          </select>
        </label>

        <textarea
          name="message"
          placeholder="Write a short testimonial (what you liked, results, etc.)"
          value={form.message}
          onChange={handleChange}
          className="input"
          required
        />

        {error && <div style={{ color: "#251616ff" }}>{error}</div>}

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? "Saving…" : "Submit"}
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setForm({ name: "", role: "", avatar: "", rating: 5, message: "" })}>
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
