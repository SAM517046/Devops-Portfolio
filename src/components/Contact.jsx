import { Code2, Mail, MapPin, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">06 / Contact</span>

          <h2>
            Let's connect and
            <br />
            build something useful.
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-intro">
            <p>
              I'm open to opportunities involving Azure, DevOps, cloud
              infrastructure, CI/CD, containers, Kubernetes, and
              observability.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="button button-primary"
            >
              Get in touch
              <Mail size={17} />
            </a>
          </div>

          <div className="contact-details">
            <a
              href={`mailto:${profile.email}`}
              className="contact-item"
            >
              <span className="contact-item-icon">
                <Mail size={19} />
              </span>

              <span>
                <small>Email</small>
                <strong>{profile.email}</strong>
              </span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-item-icon">
                <ExternalLink size={19} />
              </span>

              <span>
                <small>LinkedIn</small>
                <strong>Connect on LinkedIn</strong>
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-item-icon">
                <Code2 size={19} />
              </span>

              <span>
                <small>GitHub</small>
                <strong>View GitHub profile</strong>
              </span>
            </a>

            <div className="contact-item">
              <span className="contact-item-icon">
                <MapPin size={19} />
              </span>

              <span>
                <small>Location</small>
                <strong>{profile.location}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;