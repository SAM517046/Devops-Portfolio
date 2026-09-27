import {
  Cloud,
  Container,
  GitBranch,
  LineChart,
  Server,
  Terminal,
} from "lucide-react";

import { skills } from "../data/skills";

const skillGroups = [
  {
    key: "cloud",
    title: "Cloud",
    icon: Cloud,
  },
  {
    key: "devops",
    title: "DevOps & CI/CD",
    icon: GitBranch,
  },
  {
    key: "infrastructure",
    title: "Infrastructure",
    icon: Server,
  },
  {
    key: "containers",
    title: "Containers & Kubernetes",
    icon: Container,
  },
  {
    key: "monitoring",
    title: "Monitoring",
    icon: LineChart,
  },
  {
    key: "scripting",
    title: "Scripting & Systems",
    icon: Terminal,
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">02 / Technical Stack</span>

          <h2>
            Tools I use to build,
            <br />
            automate and operate.
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-group" key={group.key}>
                <div className="skill-group-header">
                  <div className="skill-group-icon">
                    <Icon size={19} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-list">
                  {skills[group.key].map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;