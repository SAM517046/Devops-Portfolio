import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, index, onView }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

          <span className="project-card-type">
              CASE STUDY
          </span>

        <button
          type="button"
          className="project-github"
          onClick={onView}
          aria-label={`View ${project.title} details`}
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="project-content">
        <span className="project-subtitle">
          {project.subtitle}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <button  type="button" onClick={onView}>
          View case study
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;