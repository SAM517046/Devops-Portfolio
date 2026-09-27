import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">
            03 / Selected Projects
          </span>

          <h2>
            Hands-on work across
            <br />
            the DevOps lifecycle.
          </h2>
        </div>

        <div className="projects-intro">
          <p>
            A selection of projects covering cloud infrastructure,
            infrastructure as code, CI/CD, containers, Kubernetes,
            and observability.
          </p>
        </div>

        <div className="projects-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onView={() => setSelectedProject(project)}
              />
            ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;