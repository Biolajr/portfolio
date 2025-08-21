import React from "react";

export default function Blog() {
  const blogs = [
    { title: "Implementing Secure CI/CD Pipelines", link: "#" },
    { title: "Terraform Multi-Cloud Strategies", link: "#" },
    { title: "Monitoring Kubernetes with Prometheus", link: "#" },
  ];

  return (
    <div className="container main">
      <h2>Blog</h2>
      <ul>
        {blogs.map((blog, i) => (
          <li key={i}><a href={blog.link}>{blog.title}</a></li>
        ))}
      </ul>
    </div>
  );
}

