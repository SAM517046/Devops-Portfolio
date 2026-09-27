import { Download, FileText } from "lucide-react";
import { profile } from "../data/profile";

function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="section-container">
        <div className="resume-card">
          <div className="resume-icon">
            <FileText size={26} />
          </div>

          <div className="resume-content">
            <span className="section-label">05 / Resume</span>

            <h2>View my professional resume.</h2>

            <p>
              A concise overview of my technical skills, projects,
              certifications, and DevOps-focused experience.
            </p>
          </div>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            View Resume
            <Download size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;