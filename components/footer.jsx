import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 md:py-8">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="text-lg font-semibold">Ismail MOUYAHADA</p>
          <p className="text-sm text-muted-foreground">DevOps & Full-Stack Developer</p>
        </div>

        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="font-medium mb-2">Liens rapides</p>
          <div className="flex flex-col space-y-2">
            <Link href="/services" className="text-sm text-muted-foreground hover:text-accent focus-visible-outline">
              Services
            </Link>
            <Link
              href="/technologies"
              className="text-sm text-muted-foreground hover:text-accent focus-visible-outline"
            >
              Technologies
            </Link>
            <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-accent focus-visible-outline">
              Portfolio
            </Link>
            <Link href="/booking" className="text-sm text-muted-foreground hover:text-accent focus-visible-outline">
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <p className="font-medium mb-2">Légal</p>
          <div className="flex flex-col space-y-2">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-accent focus-visible-outline"
            >
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-accent focus-visible-outline">
              Conditions d'utilisation
            </Link>
            <Link
              href="/mentions-legales"
              className="text-sm text-muted-foreground hover:text-accent focus-visible-outline"
            >
              Mentions légales
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="font-medium mb-2">Réseaux sociaux</p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="focus-visible-outline"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-accent" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-visible-outline"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-accent" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="focus-visible-outline"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-accent" />
            </Link>
            <Link href="mailto:contact@example.com" aria-label="Email" className="focus-visible-outline">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-accent" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ismail MOUYAHADA. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
