"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Eye, EyeOff, Plus, Save, Trash, Upload } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulation d'authentification (à remplacer par une vraie authentification)
    setTimeout(() => {
      // Exemple simple: vérifier si l'email est admin@example.com et le mot de passe est admin123
      if (email === "admin@example.com" && password === "admin123") {
        setIsAuthenticated(true)
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'interface d'administration.",
        })
      } else {
        toast({
          title: "Échec de la connexion",
          description: "Email ou mot de passe incorrect.",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  if (!isAuthenticated) {
    return (
      <div className="container py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Connexion administrateur</CardTitle>
            <CardDescription>Connectez-vous pour accéder au tableau de bord d'administration</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">
                      {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    </span>
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
            </form>
          </CardContent>
        </Card>
        <Toaster />
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tableau de bord d'administration</h1>
        <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
          Déconnexion
        </Button>
      </div>

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="portfolio">Projets Portfolio</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gérer les projets du portfolio</CardTitle>
              <CardDescription>Ajoutez, modifiez ou supprimez des projets de votre portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter un projet
                  </Button>
                </div>

                <div className="grid gap-4">
                  <ProjectItem title="E-Commerce Platform" category="web" date="2023-12-15" />
                  <ProjectItem title="Health & Fitness App" category="mobile" date="2023-10-22" />
                  <ProjectItem title="Microservices API Gateway" category="backend" date="2023-08-05" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ajouter un nouveau projet</CardTitle>
              <CardDescription>
                Remplissez le formulaire pour ajouter un nouveau projet à votre portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Titre du projet</Label>
                  <Input id="project-title" placeholder="Nom du projet" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Description</Label>
                  <Textarea id="project-description" placeholder="Description détaillée du projet" rows={4} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-category">Catégorie</Label>
                    <Select>
                      <SelectTrigger id="project-category">
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Développement Web</SelectItem>
                        <SelectItem value="mobile">Applications Mobiles</SelectItem>
                        <SelectItem value="backend">Systèmes Backend</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-date">Date de réalisation</Label>
                    <Input id="project-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-tags">Tags (séparés par des virgules)</Label>
                  <Input id="project-tags" placeholder="React, Node.js, MongoDB" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-image">Image du projet</Label>
                  <div className="flex items-center gap-4">
                    <Input id="project-image" type="file" className="hidden" />
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => document.getElementById("project-image").click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Choisir une image
                    </Button>
                    <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Aperçu</span>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  <Save className="mr-2 h-4 w-4" />
                  Enregistrer le projet
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gérer les services</CardTitle>
              <CardDescription>Ajoutez, modifiez ou supprimez les services que vous proposez</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Ajouter un service
                  </Button>
                </div>

                <div className="grid gap-4">
                  <ServiceItem
                    title="Développement Front-End"
                    description="Création d'interfaces utilisateur réactives et interactives"
                  />
                  <ServiceItem
                    title="Développement Back-End"
                    description="Construction d'applications robustes côté serveur et d'APIs"
                  />
                  <ServiceItem
                    title="Architecture Microservices"
                    description="Conception de systèmes distribués avec des technologies cloud"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres du site</CardTitle>
              <CardDescription>Gérez les paramètres généraux de votre portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Titre du site</Label>
                  <Input id="site-title" defaultValue="Ismail MOUYAHADA - DevOps & Full-Stack Developer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="site-description">Description</Label>
                  <Textarea
                    id="site-description"
                    defaultValue="Portfolio professionnel d'Ismail MOUYAHADA, Ingénieur DevOps et Développeur Full-Stack proposant des services de développement web, mobile, et cloud."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email de contact</Label>
                  <Input id="contact-email" type="email" defaultValue="contact@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="social-links">Liens sociaux (JSON)</Label>
                  <Textarea
                    id="social-links"
                    defaultValue={JSON.stringify(
                      {
                        github: "https://github.com",
                        linkedin: "https://linkedin.com",
                        twitter: "https://twitter.com",
                      },
                      null,
                      2,
                    )}
                    rows={6}
                  />
                </div>

                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Enregistrer les paramètres
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Toaster />
    </div>
  )
}

function ProjectItem({ title, category, date }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="outline">{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
          <span className="sr-only">Voir</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Save className="h-4 w-4" />
          <span className="sr-only">Modifier</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Trash className="h-4 w-4" />
          <span className="sr-only">Supprimer</span>
        </Button>
      </div>
    </div>
  )
}

function ServiceItem({ title, description }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Save className="h-4 w-4" />
          <span className="sr-only">Modifier</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Trash className="h-4 w-4" />
          <span className="sr-only">Supprimer</span>
        </Button>
      </div>
    </div>
  )
}

