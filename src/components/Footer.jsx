import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Zelalem Belay · All rights reserved.
      </div>
    </footer>
  );
}
