import React from "react";
import "../styles/Resume.css"; // make sure this file exists

export default function Resume() {
  return (
    <section className="resume">
      <h1 className="resume__title">My Resume</h1>

      <div className="resume__viewer">
        <iframe
          src="/resume.pdf"            // place resume.pdf in /public
          title="Resume PDF"
          className="resume__iframe"
        />
      </div>

      <div className="resume__actions">
        <a
          href="/resume.pdf"
          download="Lawal_Abiola_Resume.pdf"
          className="btn btn--primary"
        >
          Download Resume
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost"
        >
          Open in new tab
        </a>
      </div>
    </section>
  );
}


