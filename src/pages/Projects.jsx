import React from "react";

export default function Projects() {
  const projects = [
    { title: "Kubernetes Monitoring Platform", desc: "Prometheus + Grafana dashboard with alerts and automation." },
    { title: "DevSecOps Automation Pipeline", desc: "CI/CD pipeline with security scanning and auto-deployment." },
    { title: "Cloud Infrastructure Templates", desc: "Terraform modules for multi-cloud deployments." },
  ];

  return (
    <div className="container main">
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="card">
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
        </div>
      ))}
    </div>
  );
}

