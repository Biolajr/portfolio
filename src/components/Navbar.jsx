import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";  // new stylesheet for navbar only

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="container">
        <h2 className="logo">Abiola Lawal</h2>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}


