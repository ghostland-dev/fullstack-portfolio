"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 md:p-6 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Utilisation des cookies</h3>
          <p className="text-muted-foreground text-sm">
            Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre
            utilisation des cookies conformément à notre{" "}
            <Link href="/privacy-policy" className="text-primary underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" onClick={declineCookies}>
            Refuser
          </Button>
          <Button onClick={acceptCookies}>Accepter</Button>
          <Button variant="ghost" size="icon" onClick={declineCookies} className="ml-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
