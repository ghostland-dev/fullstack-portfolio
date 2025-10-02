import {
  ArrowRight,
  Code,
  Database,
  FileCode,
  Figma,
  GitBranch,
  Layout,
  Layers,
  MessageSquare,
  Server,
  Smartphone,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Services</h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Comprehensive development and design solutions for your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12">
            <ServiceSection
              id="front-end-development"
              title="Front-End Development"
              description="Creating responsive, interactive user interfaces with modern frameworks"
              icon={<Layout className="h-8 w-8" />}
              technologies={["React", "Next.js", "Vue.js", "Angular", "Svelte", "SolidJS"]}
              details={[
                "Responsive web design for all devices",
                "Interactive UI components and animations",
                "State management with Redux, Zustand, or Context API",
                "Performance optimization and code splitting",
                "Accessibility compliance (WCAG)",
                "Cross-browser compatibility",
              ]}
            />

            <ServiceSection
              id="back-end-development"
              title="Back-End Development"
              description="Building robust server-side applications and APIs"
              icon={<Server className="h-8 w-8" />}
              technologies={[
                "Node.js",
                "NestJS",
                "PHP",
                "Laravel",
                "Symfony",
                "Python",
                "Django",
                "FastAPI",
                "Java",
                "Spring Boot",
                "C#",
                "ASP.NET Core",
                "Ruby",
                "Ruby on Rails",
              ]}
              details={[
                "RESTful API development",
                "GraphQL API implementation",
                "Authentication and authorization systems",
                "Database integration and ORM usage",
                "Serverless function development",
                "Microservices architecture",
              ]}
            />

            <ServiceSection
              id="full-stack-development"
              title="Full-Stack Development"
              description="End-to-end application development from UI to server"
              icon={<Code className="h-8 w-8" />}
              technologies={["MERN Stack", "MEAN Stack", "Laravel + Vue", "Django + React", "Spring Boot + Angular"]}
              details={[
                "Complete application architecture design",
                "Front-end and back-end integration",
                "Full application lifecycle management",
                "Performance optimization across the stack",
                "Deployment and DevOps integration",
                "Maintenance and scaling strategies",
              ]}
            />

            <ServiceSection
              id="database-design"
              title="Database Design"
              description="Designing efficient and scalable database architectures"
              icon={<Database className="h-8 w-8" />}
              technologies={[
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Elasticsearch",
                "Firebase",
                "DynamoDB",
                "Cassandra",
              ]}
              details={[
                "Relational database schema design",
                "NoSQL database modeling",
                "Database normalization and optimization",
                "Query performance tuning",
                "Data migration strategies",
                "Backup and recovery planning",
              ]}
            />

            <ServiceSection
              id="uml-diagrams"
              title="UML Diagrams"
              description="Creating clear visual representations of system architecture"
              icon={<FileCode className="h-8 w-8" />}
              technologies={[
                "Class Diagrams",
                "Sequence Diagrams",
                "Use Case Diagrams",
                "Activity Diagrams",
                "Component Diagrams",
                "Deployment Diagrams",
              ]}
              details={[
                "System architecture visualization",
                "Object-oriented design modeling",
                "Process flow documentation",
                "Component interaction mapping",
                "Deployment strategy planning",
                "Documentation for development teams",
              ]}
            />

            <ServiceSection
              id="microservices-architecture"
              title="Microservices Architecture"
              description="Designing distributed systems with cloud technologies"
              icon={<Layers className="h-8 w-8" />}
              technologies={[
                "Docker",
                "Kubernetes",
                "AWS",
                "Azure",
                "GCP",
                "Serverless",
                "API Gateway",
                "Service Mesh",
              ]}
              details={[
                "Microservices decomposition strategy",
                "Service communication patterns",
                "Containerization with Docker",
                "Orchestration with Kubernetes",
                "Cloud-native application design",
                "Scalability and resilience planning",
              ]}
            />

            <ServiceSection
              id="ui-ux-design"
              title="UI/UX Design"
              description="Creating intuitive user experiences with Figma"
              icon={<Figma className="h-8 w-8" />}
              technologies={["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Testing"]}
              details={[
                "User interface design",
                "User experience planning",
                "Wireframing and prototyping",
                "Design system creation",
                "Usability testing",
                "Responsive design principles",
              ]}
            />

            <ServiceSection
              id="mobile-development"
              title="Mobile Development"
              description="Building native and cross-platform mobile applications"
              icon={<Smartphone className="h-8 w-8" />}
              technologies={[
                "React Native",
                "Flutter",
                "Android (Java/Kotlin)",
                "iOS (Swift)",
                "Ionic",
                "Progressive Web Apps",
              ]}
              details={[
                "Cross-platform mobile app development",
                "Native Android application development",
                "Native iOS application development",
                "Mobile UI/UX design",
                "App store deployment",
                "Mobile app performance optimization",
              ]}
            />

            <ServiceSection
              id="devops"
              title="DevOps"
              description="Streamlining development and operations processes"
              icon={<GitBranch className="h-8 w-8" />}
              technologies={[
                "CI/CD",
                "Jenkins",
                "GitHub Actions",
                "GitLab CI",
                "Docker",
                "Kubernetes",
                "Terraform",
                "Ansible",
              ]}
              details={[
                "Continuous Integration/Continuous Deployment",
                "Infrastructure as Code",
                "Containerization and orchestration",
                "Monitoring and logging solutions",
                "Automated testing strategies",
                "Cloud infrastructure management",
              ]}
            />

            <ServiceSection
              id="technical-documentation"
              title="Technical Documentation"
              description="Creating comprehensive project documentation"
              icon={<FileCode className="h-8 w-8" />}
              technologies={[
                "API Documentation",
                "Technical Specifications",
                "User Guides",
                "System Architecture",
                "Test Plans",
                "Markdown",
                "Swagger/OpenAPI",
              ]}
              details={[
                "API documentation with Swagger/OpenAPI",
                "Technical specification documents",
                "User guides and manuals",
                "System architecture documentation",
                "Test plans and test cases",
                "Project wikis and knowledge bases",
              ]}
            />

            <ServiceSection
              id="consultation"
              title="Consultation"
              description="Technical advice and project planning"
              icon={<MessageSquare className="h-8 w-8" />}
              technologies={[
                "Project Planning",
                "Technical Advisory",
                "Architecture Review",
                "Technology Selection",
                "Team Training",
                "Code Review",
              ]}
              details={[
                "Technical feasibility assessment",
                "Technology stack selection",
                "Architecture review and recommendations",
                "Performance optimization consulting",
                "Team training and knowledge transfer",
                "Code review and best practices",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceSection({ id, title, description, icon, technologies, details }) {
  return (
    <div id={id} className="scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
          <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">What I Offer</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {details.map((detail) => (
                <li key={detail} className="flex items-start">
                  <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
