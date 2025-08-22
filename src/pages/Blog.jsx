import React from "react";
import "../styles/Blog.css";

export default function Blog() {
  const blogs = [
    { title: "Implementing Secure CI/CD Pipelines", link: "#" },
    { title: "Terraform Multi-Cloud Strategies", link: "#" },
    { title: "Monitoring Kubernetes with Prometheus", link: "#" },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest Blog Posts</h2>
      <div className="blog-list">
        {blogs.map((blog, i) => (
          <a key={i} href={blog.link} className="blog-card">
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>Read more →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

