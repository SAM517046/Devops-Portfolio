import {
  ArrowUpRight,
  Cloud,
  Container,
  GitBranch,
  Server,
} from "lucide-react";

import { profile } from "../data/profile";
import profileImage from "../assets/images/mohammad-anees-shaik.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            Azure & DevOps Engineer
          </div>

          <h1>
            Mohammad Anees
            <span>Shaik.</span>
          </h1>

          <p className="hero-description">{profile.headline}</p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              GitHub
            </a>
          </div>

          <div className="hero-meta">
            <span>Cloud Infrastructure</span>
            <span>CI/CD</span>
            <span>Infrastructure as Code</span>
            <span>Kubernetes</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-profile">
            <div className="hero-profile-image">
              <img
                src={profileImage}
                alt="Mohammad Anees Shaik"
              />
            </div>

            <div className="hero-profile-info">
              <span>Azure & DevOps Engineer</span>
              <strong>Cloud • Automation • Kubernetes</strong>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="terminal-title">
                devops-engineer
              </span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span>cloud --platform azure</span>
              </div>

              <div className="terminal-output">
                <Cloud size={18} />
                <span>Azure infrastructure ready</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span>deploy --pipeline ci-cd</span>
              </div>

              <div className="terminal-output">
                <GitBranch size={18} />
                <span>Pipeline configured</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span>cluster --runtime kubernetes</span>
              </div>

              <div className="terminal-output">
                <Container size={18} />
                <span>Container platform running</span>
              </div>

              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span>monitor --stack prometheus</span>
              </div>

              <div className="terminal-output">
                <Server size={18} />
                <span>Observability enabled</span>
              </div>

              <div className="terminal-cursor">_</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;