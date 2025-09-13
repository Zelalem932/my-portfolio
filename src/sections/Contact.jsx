import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",message:""});
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = e => {
    e.preventDefault();
    alert("Thanks! Message not actually sent in this demo.");
    setForm({name:"",email:"",message:""});
  };

  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="contact-grid">
            <input className="input" name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
            <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
          </div>
          <div style={{marginTop:12}}>
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
          </div>
          <div style={{marginTop:12}}>
            <button type="submit" className="btn btn-primary">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
