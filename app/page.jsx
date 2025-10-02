import Link from "next/link"
import { ArrowRight, Code, Database, Layout, Layers, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CTAButton from "@/components/cta-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-muted text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Ismail MOUYAHADA
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                DevOps Engineer & Full-Stack Developer
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/services">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Découvrir mes services
                </Button>
              </Link>
              <CTAButton type="booking" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Des solutions complètes de développement et de conception pour vos projets
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ServiceCard
              title="Développement Front-End"
              description="Création d'interfaces utilisateur réactives et interactives avec des frameworks modernes"
              icon={<Layout className="h-6 w-6" />}
            />
            <ServiceCard
              title="Développement Back-End"
              description="Construction d'applications robustes côté serveur et d'APIs"
              icon={<Code className="h-6 w-6" />}
            />
            <ServiceCard
              title="Conception de Base de Données"
              description="Conception d'architectures de bases de données efficaces et évolutives"
              icon={<Database className="h-6 w-6" />}
            />
            <ServiceCard
              title="Architecture Microservices"
              description="Conception de systèmes distribués avec des technologies cloud"
              icon={<Layers className="h-6 w-6" />}
            />
            <ServiceCard
              title="Design UI/UX"
              description="Création d'expériences utilisateur intuitives avec Figma"
              icon={<Layout className="h-6 w-6" />}
            />
            <ServiceCard
              title="Consultation"
              description="Conseils techniques et planification de projets"
              icon={<MessageSquare className="h-6 w-6" />}
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button variant="secondary">
                Voir tous les services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Expertise dans une large gamme de langages de programmation et de frameworks
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <TechBadge>JavaScript</TechBadge>
            <TechBadge>TypeScript</TechBadge>
            <TechBadge>React</TechBadge>
            <TechBadge>Next.js</TechBadge>
            <TechBadge>Vue.js</TechBadge>
            <TechBadge>Angular</TechBadge>
            <TechBadge>Node.js</TechBadge>
            <TechBadge>NestJS</TechBadge>
            <TechBadge>PHP</TechBadge>
            <TechBadge>Laravel</TechBadge>
            <TechBadge>Symfony</TechBadge>
            <TechBadge>Python</TechBadge>
            <TechBadge>Django</TechBadge>
            <TechBadge>FastAPI</TechBadge>
            <TechBadge>Java</TechBadge>
            <TechBadge>Spring Boot</TechBadge>
            <TechBadge>C#</TechBadge>
            <TechBadge>ASP.NET Core</TechBadge>
            <TechBadge>Ruby</TechBadge>
            <TechBadge>Ruby on Rails</TechBadge>
            <TechBadge>Flutter</TechBadge>
            <TechBadge>React Native</TechBadge>
            <TechBadge>Docker</TechBadge>
            <TechBadge>Kubernetes</TechBadge>
            <TechBadge>AWS</TechBadge>
            <TechBadge>Azure</TechBadge>
            <TechBadge>GCP</TechBadge>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/technologies">
              <Button variant="outline">
                Voir mes compétences détaillées <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Réservez une consultation pour discuter de vos besoins et comment je peux vous aider
              </p>
            </div>
            <div className="space-x-4">
              <CTAButton type="booking" variant="secondary" />
              <CTAButton type="contact" variant="outline" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ title, description, icon }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-full bg-secondary/10 text-secondary">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm text-accent hover:underline flex items-center focus-visible-outline"
        >
          En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}

function TechBadge({ children }) {
  return (
    <Badge variant="secondary" className="text-sm py-1 px-3 m-1">
      {children}
    </Badge>
  )
}

