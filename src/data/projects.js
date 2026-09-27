export const projects = [
  {
    id: 1,
    title: "CloudTask Manager",
    subtitle: "CI/CD Web Application",

    description:
      "A Flask-based web application implemented with automated testing and CI/CD practices using GitHub, Azure DevOps, and Azure App Service.",

    overview:
      "A Python Flask web application created to demonstrate an end-to-end application delivery workflow, including source control, automated testing, and cloud deployment.",
    architecture: [
       "Developer",
       "GitHub",
       "Azure Pipelines",
       "Automated Tests",
       "Build",
       "Azure App Service",
    ],
    implementation: [
      "Source code managed with Git and GitHub.",
     "Automated tests executed using pytest.",
     "CI/CD workflow configured with Azure Pipelines.",
     "Application prepared for deployment on Azure App Service.",
    ],
    responsibilities: [
      "Developed a Flask-based web application.",
      "Implemented automated application tests using pytest.",
      "Configured CI/CD using Azure Pipelines.",
      "Managed source code using Git and GitHub.",
      "Prepared the application for deployment to Azure App Service.",
    ],

    workflow: [
      "Developer pushes code to GitHub.",
      "Azure Pipeline is triggered.",
      "Automated tests are executed.",
      "Build and validation steps run.",
      "Application is prepared for Azure deployment.",
    ],

    technologies: [
      "Python",
      "Flask",
      "Pytest",
      "Git",
      "GitHub",
      "Azure DevOps",
      "Azure Pipelines",
      "Azure App Service",
      "CI/CD",
    ],

    github: "https://github.com/SAM517046/CloudTask-manager.git",

    featured: true,
  },

  {
    id: 2,
    title: "Azure Terraform DevOps",
    subtitle: "Infrastructure as Code",

    description:
      "An Azure infrastructure project using Terraform to provision cloud resources and Azure DevOps pipelines to validate, plan, and deploy infrastructure.",

    overview:
      "An Infrastructure as Code project focused on provisioning Azure resources with Terraform and integrating infrastructure changes with an Azure DevOps pipeline workflow.",
    architecture: [
       "Developer",
       "GitHub",
       "Azure Pipelines",
       "Terraform Validate",
       "Terraform Plan",
       "Terraform Apply",
       "Azure Infrastructure",
    ],
    implementation: [
      "Azure infrastructure defined using Terraform.",
     "Terraform configuration validated before deployment.",
     "Terraform plan used to review infrastructure changes.",
     "Azure DevOps pipelines used for infrastructure deployment.",
     "Terraform state stored remotely in Azure Storage.",
    ],
    responsibilities: [
      "Created Azure infrastructure using Terraform.",
      "Configured Terraform validation and planning workflows.",
      "Implemented Terraform deployment through Azure DevOps pipelines.",
      "Configured Azure Storage for Terraform remote state.",
      "Organized infrastructure configuration for repeatable deployments.",
    ],

    workflow: [
      "Terraform configuration is committed to source control.",
      "Pipeline validates the Terraform configuration.",
      "Terraform plan identifies infrastructure changes.",
      "Deployment pipeline applies the approved infrastructure changes.",
      "Terraform state is maintained using Azure Storage.",
    ],

    technologies: [
      "Microsoft Azure",
      "Terraform",
      "Azure DevOps",
      "Azure Pipelines",
      "Infrastructure as Code",
      "Azure Storage",
      "Git",
      "GitHub",
    ],

    github:
      "https://github.com/SAM517046/azure-terraform-devops-project.git",

    featured: true,
  },

  {
    id: 3,
    title: "Azure Container DevOps",
    subtitle: "Containerized Application Platform",

    description:
      "A container-focused DevOps project using Docker and Docker Compose with Azure container services and infrastructure automation.",

    overview:
      "A containerization-focused project demonstrating how application components can be packaged, configured, and managed using Docker while integrating Azure container services.",
    architecture: [
     "Source Code",
     "Docker",
     "Docker Compose",
     "Azure Container Registry",
     "Azure Container Apps",
    ],
    implementation: [
      "Application components packaged as Docker containers.",
     "Docker Compose used to coordinate application services.",
     "Container images integrated with Azure Container Registry.",
     "Azure Container Apps used as the target container platform.",
     "Terraform used for infrastructure configuration.",
    ],
    responsibilities: [
      "Containerized application components using Docker.",
      "Created Docker Compose configuration for application services.",
      "Organized frontend and backend application components.",
      "Worked with Azure container services.",
      "Integrated infrastructure configuration using Terraform.",
    ],

    workflow: [
      "Application components are maintained in source control.",
      "Docker images are built for application services.",
      "Docker Compose is used to coordinate services locally.",
      "Container images can be managed through Azure Container Registry.",
      "Container workloads can be deployed using Azure container services.",
    ],

    technologies: [
      "Docker",
      "Docker Compose",
      "Microsoft Azure",
      "Azure Container Registry",
      "Azure Container Apps",
      "Terraform",
      "Git",
      "GitHub",
    ],

    github:
      "https://github.com/SAM517046/azure-container-devops-project.git",

    featured: true,
  },

  {
    id: 4,
    title: "Kubernetes Observability Platform",
    subtitle: "Prometheus & Grafana Monitoring",

    description:
      "A Kubernetes observability environment using Minikube, Helm, Prometheus, Grafana, and ServiceMonitor to collect and visualize application metrics.",

    overview:
      "A Kubernetes monitoring project that demonstrates application deployment, metrics collection, service discovery, and visualization using the Prometheus and Grafana ecosystem.",
    architecture: [
     "Application",
     "Kubernetes",
     "ServiceMonitor",
     "Prometheus",
     "Grafana",
    ],
    implementation: [
     "Kubernetes cluster created using Minikube.",
     "Application deployed as a Kubernetes workload.",
     "Prometheus and Grafana installed using Helm.",
      "ServiceMonitor configured for application metric discovery.",
     "Prometheus used for metric collection and Grafana for visualization.",
    ],
    responsibilities: [
      "Created and managed a local Kubernetes cluster using Minikube.",
      "Deployed an application workload to Kubernetes.",
      "Installed the kube-prometheus-stack using Helm.",
      "Configured a ServiceMonitor for application metrics.",
      "Used Prometheus to collect application and Kubernetes metrics.",
      "Used Grafana to visualize monitoring data.",
    ],

    workflow: [
      "Application is deployed to the Kubernetes cluster.",
      "Application exposes a metrics endpoint.",
      "ServiceMonitor defines how Prometheus discovers the application.",
      "Prometheus scrapes the application metrics.",
      "Grafana uses Prometheus data for visualization.",
    ],

    technologies: [
      "Kubernetes",
      "Minikube",
      "kubectl",
      "Helm",
      "Prometheus",
      "Grafana",
      "ServiceMonitor",
      "Docker",
    ],

    github:
      "https://github.com/SAM517046/kubernetes-prometheus-grafana-project.git",

    featured: true,
  },
];