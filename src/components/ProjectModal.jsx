import { ArrowUpRight, X } from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <div className="project-modal-header">
          <span className="project-subtitle">
            {project.subtitle}
          </span>

          <h2>{project.title}</h2>

          <p>{project.overview}</p>
        </div>
        <div className="project-modal-section">
          <h3>Architecture & workflow</h3>

          <div className="architecture-flow">
            {project.architecture.map((step, index) => (
             <div className="architecture-item" key={step}>
             <div className="architecture-node">
               <span>{String(index + 1).padStart(2, "0")}</span>
               <strong>{step}</strong>
        </div>

        {index < project.architecture.length - 1 && (
          <div className="architecture-arrow">→</div>
        )}
      </div>
    ))}
  </div>
</div>

        <div className="project-modal-section">
          <h3>Key implementation details</h3>

           <ul>
             {project.implementation.map((item) => (
              <li key={item}>{item}</li>
        ))}
    </ul>
</div>
        <div className="project-modal-section">
          <h3>What I implemented</h3>

          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-modal-section">
          <h3>DevOps workflow</h3>

          <div className="workflow-list">
            {project.workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-modal-section">
          <h3>Technologies</h3>

          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <div className="project-modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            View GitHub Repository
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;