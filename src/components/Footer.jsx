// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css"; // make sure you import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Lawal Abiola. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

