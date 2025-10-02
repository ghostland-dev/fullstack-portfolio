"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, MessageSquare, CalendarClock } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Ne pas afficher sur les pages de contact et de réservation
  const shouldHide = pathname === "/contact" || pathname === "/booking"

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après avoir défilé de 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (shouldHide) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {isOpen ? (
        <div className="flex flex-col space-y-2">
          <Link href="/contact">
            <Button variant="secondary" size="sm" className="w-full flex items-center justify-start shadow-lg">
              <MessageSquare className="mr-2 h-4 w-4" />
              Me contacter
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="accent" size="sm" className="w-full flex items-center justify-start shadow-lg">
              <CalendarClock className="mr-2 h-4 w-4" />
              Prendre rendez-vous
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="w-10 h-10 rounded-full bg-background shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </Button>
        </div>
      ) : (
        <Button
          variant="secondary"
          size="icon"
          className="w-12 h-12 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Actions rapides</span>
        </Button>
      )}
    </div>
  )
}

