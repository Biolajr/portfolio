import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />

        {/* main expands to fill remaining space */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* optional floating socials */}
        <SocialLinks />

        <Footer />
      </Router>
    </div>
  );
}

