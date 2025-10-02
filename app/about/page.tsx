import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Me</h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                DevOps Engineer & Full-Stack Developer with a passion for creating efficient, scalable solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Ismail MOUYAHADA"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <h2 className="text-2xl font-bold">Ismail MOUYAHADA</h2>
                  <p className="text-muted-foreground">DevOps Engineer & Full-Stack Developer</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>DevOps</Badge>
                    <Badge>Full-Stack</Badge>
                    <Badge>Architect</Badge>
                    <Badge>UI/UX</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">My Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hello! I'm Ismail MOUYAHADA, a passionate DevOps Engineer and Full-Stack Developer with over 10
                    years of experience in the software development industry. My journey in technology began with a
                    fascination for building things that solve real-world problems.
                  </p>
                  <p>
                    Throughout my career, I've worked with a diverse range of technologies and frameworks, from
                    front-end development with React, Vue, and Angular to back-end systems using Node.js, PHP, Python,
                    and Java. My expertise extends to database design, microservices architecture, and DevOps practices.
                  </p>
                  <p>
                    I believe in creating solutions that are not only technically sound but also user-friendly and
                    scalable. My approach combines technical expertise with a deep understanding of business needs to
                    deliver results that exceed expectations.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge through technical articles and mentoring.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Experience</h2>
                <div className="space-y-6">
                  <ExperienceCard
                    title="Senior Full-Stack Developer"
                    company="Tech Innovations Inc."
                    period="2020 - Present"
                    description="Leading development of enterprise-level applications using React, Node.js, and microservices architecture. Implementing CI/CD pipelines and DevOps practices."
                    technologies={["React", "Node.js", "Docker", "Kubernetes", "AWS"]}
                  />

                  <ExperienceCard
                    title="DevOps Engineer"
                    company="Cloud Solutions Ltd."
                    period="2018 - 2020"
                    description="Designed and implemented cloud infrastructure using AWS and Azure. Automated deployment processes and improved system reliability and performance."
                    technologies={["AWS", "Azure", "Terraform", "Jenkins", "Docker"]}
                  />

                  <ExperienceCard
                    title="Full-Stack Developer"
                    company="Web Creators"
                    period="2015 - 2018"
                    description="Developed web applications using various technologies including PHP, Laravel, Vue.js, and MySQL. Collaborated with design teams to implement UI/UX designs."
                    technologies={["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript"]}
                  />
                </div>
              </div>

              {/* Education */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Education</h2>
                <div className="space-y-6">
                  <EducationCard
                    degree="Master's in Computer Science"
                    institution="University of Technology"
                    period="2013 - 2015"
                    description="Specialized in Software Engineering and Distributed Systems. Thesis on microservices architecture optimization."
                  />

                  <EducationCard
                    degree="Bachelor's in Computer Science"
                    institution="National Institute of Technology"
                    period="2010 - 2013"
                    description="Focused on programming fundamentals, data structures, algorithms, and web development."
                  />
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CertificationCard
                    title="AWS Certified Solutions Architect"
                    issuer="Amazon Web Services"
                    year="2021"
                  />

                  <CertificationCard
                    title="Certified Kubernetes Administrator"
                    issuer="Cloud Native Computing Foundation"
                    year="2020"
                  />

                  <CertificationCard
                    title="Microsoft Certified: Azure DevOps Engineer"
                    issuer="Microsoft"
                    year="2019"
                  />

                  <CertificationCard title="Professional Scrum Master I" issuer="Scrum.org" year="2018" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExperienceCard({ title, company, period, description, technologies }) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 mt-1">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <Briefcase className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground">
            <span>{company}</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

function EducationCard({ degree, institution, period, description }) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 mt-1">
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          <GraduationCap className="h-5 w-5" />
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <h3 className="text-xl font-bold">{degree}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground">
            <span>{institution}</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function CertificationCard({ title, issuer, year }) {
  return (
    <Card>
      <CardContent className="p-4 flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            <Award className="h-4 w-4" />
          </div>
        </div>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">
            {issuer} • {year}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

