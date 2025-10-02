import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "web",
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description:
        "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "Redux"],
      category: "mobile",
    },
    {
      id: 3,
      title: "Microservices API Gateway",
      description:
        "A scalable API gateway that routes requests to appropriate microservices with authentication and rate limiting.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Docker", "Kubernetes", "Redis"],
      category: "backend",
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      description:
        "A platform connecting property buyers, sellers, and agents with property listings, virtual tours, and appointment scheduling.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Django", "PostgreSQL", "AWS"],
      category: "web",
    },
    {
      id: 5,
      title: "Inventory Management System",
      description:
        "A comprehensive system for tracking inventory, managing suppliers, and generating reports for a retail business.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "Laravel", "MySQL"],
      category: "web",
    },
    {
      id: 6,
      title: "Travel Companion App",
      description:
        "A mobile app for travelers with itinerary planning, local recommendations, and offline maps functionality.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      category: "mobile",
    },
    {
      id: 7,
      title: "Content Management System",
      description: "A custom CMS with role-based access control, content workflow, and multi-language support.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Angular", "Spring Boot", "PostgreSQL"],
      category: "web",
    },
    {
      id: 8,
      title: "Event Ticketing Platform",
      description:
        "A platform for event organizers to create events, sell tickets, and manage attendees with QR code check-in.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
    },
    {
      id: 9,
      title: "Data Processing Pipeline",
      description: "A scalable data processing pipeline for ingesting, transforming, and analyzing large datasets.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Apache Kafka", "Spark", "AWS"],
      category: "backend",
    },
  ]

  const webProjects = projects.filter((project) => project.category === "web")
  const mobileProjects = projects.filter((project) => project.category === "mobile")
  const backendProjects = projects.filter((project) => project.category === "backend")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">My Portfolio</h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                A showcase of my projects and work across various technologies and domains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="backend">Backend Systems</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mobileProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backendProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
