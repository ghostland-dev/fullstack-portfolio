import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechnologiesPage() {
  const technologies = {
    frontend: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Svelte", level: 75 },
      { name: "SolidJS", level: 70 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "SASS/SCSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 90 },
      { name: "Express", level: 95 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "Symfony", level: 75 },
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Ruby", level: 70 },
      { name: "Ruby on Rails", level: 65 },
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "C#", level: 75 },
      { name: "ASP.NET Core", level: 70 },
    ],
    mobile: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Android (Java/Kotlin)", level: 75 },
      { name: "iOS (Swift)", level: 70 },
    ],
    database: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "Elasticsearch", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "DynamoDB", level: 75 },
    ],
    devops: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "AWS", level: 85 },
      { name: "Azure", level: 80 },
      { name: "Google Cloud", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "Jenkins", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 80 },
    ],
    other: [
      { name: "Git", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "REST API", level: 95 },
      { name: "Microservices", level: 90 },
      { name: "Serverless", level: 85 },
      { name: "WebSockets", level: 80 },
      { name: "Testing (Jest, Cypress)", level: 85 },
      { name: "UML", level: 80 },
      { name: "Agile/Scrum", level: 90 },
    ],
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Avancé";
    if (level >= 70) return "Intermédiaire";
    return "Débutant";
  };

  const getLevelColor = (level) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-2">Compétences Techniques</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Une vue détaillée de mes compétences techniques et niveaux d'expertise dans différentes technologies et frameworks.
      </p>

      <div className="mb-8">
        <div className="flex items-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Expert (90-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Avancé (80-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Intermédiaire (70-79%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span>Débutant (&lt;70%)</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="frontend">Front-End</TabsTrigger>
          <TabsTrigger value="backend">Back-End</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="database">Bases de données</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="other">Autres</TabsTrigger>
        </TabsList>

        {Object.keys(technologies).map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid gap-6">
              {technologies[category].map((tech) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{tech.name}</span>
                      <Badge variant="outline">{getLevelLabel(tech.level)}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{tech.level}%</span>
                  </div>
                  <Progress value={tech.level} className="h-2" indicatorClassName={getLevelColor(tech.level)} />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
