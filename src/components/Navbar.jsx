import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="container">
        {/* Logo (acts as home link now) */}
        <Link to="/" className="logo">
          Abiola Lawal
        </Link>

        {/* Nav links */}
        <nav className="nav-links">
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}


