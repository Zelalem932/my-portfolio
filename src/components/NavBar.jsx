import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css"; // Using the more complete navbar styles
import { Menu, X } from 'lucide-react'; // Using icons for the toggle button

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div className="nav-wrap">
      <header className="navbar" ref={navRef}>
        <NavLink to="/" className="nav-logo">
          Zelalem Belay
        </NavLink>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-menu-list"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav>
          <ul id="nav-menu-list" className={`nav-menu ${open ? 'open' : ''}`}>
            <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/testimonials" onClick={() => setOpen(false)}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/resume" onClick={() => setOpen(false)}>Resume</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
