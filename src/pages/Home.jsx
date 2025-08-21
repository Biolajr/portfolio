import React from "react";
import "../styles/Home.css";
import myPhoto from "../assets/me.jpg"; // your profile photo

export default function Home() {
  return (
    <section className="home-container">
      <div className="intro-card">
        <img src={myPhoto} alt="Abiola Lawal" className="profile-pic" />

        <h1 className="title">
          Hi, I'm <span className="highlight">Abiola Lawal 👋</span>
        </h1>

        <p className="subtitle">
          I’m a passionate <strong>DevSecOps & Cloud Engineer</strong>.  
          I build secure, scalable, and modern infrastructure solutions using{" "}
          <span className="keywords">Kubernetes, AWS, Azure, CI/CD</span>, and best DevOps practices.  
          I love automating everything, monitoring systems, and writing clean, production-ready code.
        </p>

        <div className="buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

