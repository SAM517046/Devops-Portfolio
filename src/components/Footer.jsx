import { ArrowUp, Code2, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              {profile.shortName}
            </div>

            <div>
              <strong>{profile.name}</strong>
              <span>{profile.title}</span>
            </div>
          </div>

          <div className="footer-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ExternalLink size={14} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ExternalLink size={14} />
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#resume">
              Resume
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} {profile.name}. All rights reserved.
          </span>

          <span className="footer-built">
            <Code2 size={14} />
            Built with React & Vite
          </span>

          <a href="#top" className="back-to-top">
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;