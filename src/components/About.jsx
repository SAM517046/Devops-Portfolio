import {
  Cloud,
  Code2,
  Container,
  GitBranch,
  LineChart,
  Server,
} from "lucide-react";

function About() {
  const expertise = [
    {
      icon: <Cloud size={21} />,
      title: "Azure Cloud",
      description:
        "Cloud infrastructure and application services using Microsoft Azure.",
    },
    {
      icon: <GitBranch size={21} />,
      title: "CI/CD & Automation",
      description:
        "Automated build, validation, testing, and deployment workflows.",
    },
    {
      icon: <Code2 size={21} />,
      title: "Infrastructure as Code",
      description:
        "Repeatable Azure infrastructure provisioning using Terraform.",
    },
    {
      icon: <Container size={21} />,
      title: "Containers & Kubernetes",
      description:
        "Containerized applications and Kubernetes-based environments.",
    },
    {
      icon: <LineChart size={21} />,
      title: "Monitoring",
      description:
        "Application and Kubernetes observability using Prometheus and Grafana.",
    },
    {
      icon: <Server size={21} />,
      title: "Linux & Systems",
      description:
        "Linux-based development, administration, scripting, and troubleshooting.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">01 / About</span>
          <h2>Engineering with automation in mind.</h2>
        </div>

        <div className="about-layout">
          <div className="about-content">
            <p className="about-lead">
              I focus on building cloud infrastructure and delivery workflows
              that are repeatable, automated, and easier to operate.
            </p>

            <p>
              My hands-on work covers Microsoft Azure, infrastructure as code
              with Terraform, CI/CD pipelines, Docker, Kubernetes, and
              monitoring with Prometheus and Grafana.
            </p>

            <p>
              Through practical projects, I have worked across the software
              delivery lifecycle — from source control and automated testing
              to infrastructure provisioning, container deployment, and
              observability.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.title}>
                <div className="expertise-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;