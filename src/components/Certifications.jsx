import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">04 / Certifications</span>

          <h2>
            Continuous learning
            <br />
            through focused training.
          </h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.id}>
              <div className="certification-icon">
                <Award size={22} />
              </div>

              <div className="certification-content">
                <span className="certification-issuer">
                  {certification.issuer}
                </span>

                <h3>{certification.name}</h3>

                {certification.year && (
                  <span className="certification-year">
                    {certification.year}
                  </span>
                )}
              </div>

              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                  aria-label={`View ${certification.name}`}
                >
                  <ExternalLink size={17} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;