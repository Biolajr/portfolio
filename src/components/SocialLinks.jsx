import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaDev, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../styles/SocialLinks.css"; // make sure file path is correct

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/biolalawal"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin"
      >
        <FaLinkedin /> LinkedIn
      </a>

      <a
        href="https://github.com/Biolajr"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link github"
      >
        <FaGithub /> GitHub
      </a>

      <a
        href="https://medium.com/@biolalawaljr"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link medium"
      >
        <FaMedium /> Medium
      </a>

      <a
        href="https://dev.to/biola_lawaljr_d5dc2882c89"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link devto"
      >
        <FaDev /> Dev.to
      </a>

      <a
        href="https://x.com/biolalawaljr"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link x"
      >
        <FaTwitter /> X
      </a>

      <a
        href="https://wa.me/2348115138207"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link whatsapp"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
};

export default SocialLinks;

