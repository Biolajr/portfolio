import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Kubernetes Monitoring Platform",
      desc: "Prometheus + Grafana dashboard with alerts and automation.",
    },
    {
      title: "DevSecOps Automation Pipeline",
      desc: "CI/CD pipeline with security scanning and auto-deployment.",
    },
    {
      title: "Cloud Infrastructure Templates",
      desc: "Terraform modules for multi-cloud deployments.",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="card-content">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

