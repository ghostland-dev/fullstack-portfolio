"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { CalendarClock, Check } from "lucide-react"

// Mock available time slots
const AVAILABLE_TIMES = {
  "2024-03-26": ["09:00", "11:00", "14:00", "16:00"],
  "2024-03-27": ["10:00", "13:00", "15:00", "17:00"],
  "2024-03-28": ["09:00", "12:00", "14:00", "16:00"],
  "2024-03-29": ["10:00", "11:00", "15:00", "17:00"],
  "2024-03-30": ["09:00", "11:00", "13:00", "15:00"],
  "2024-04-01": ["09:00", "11:00", "14:00", "16:00"],
  "2024-04-02": ["10:00", "13:00", "15:00", "17:00"],
  "2024-04-03": ["09:00", "12:00", "14:00", "16:00"],
  "2024-04-04": ["10:00", "11:00", "15:00", "17:00"],
  "2024-04-05": ["09:00", "11:00", "13:00", "15:00"],
}

// Mock service types
const SERVICE_TYPES = [
  "Développement Front-End",
  "Développement Back-End",
  "Développement Full-Stack",
  "Conception de base de données",
  "Diagrammes UML",
  "Architecture Microservices",
  "Design UI/UX",
  "Développement Mobile",
  "DevOps",
  "Documentation Technique",
  "Consultation",
]

export default function BookingPage() {
  const [date, setDate] = useState(null)
  const [timeSlot, setTimeSlot] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formattedDate = date ? date.toISOString().split("T")[0] : null
  const availableTimeSlots = formattedDate ? AVAILABLE_TIMES[formattedDate] || [] : []

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!date || !timeSlot || !name || !email || !serviceType) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Appel à l'API pour enregistrer le rendez-vous
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          date: formattedDate,
          timeSlot,
          serviceType,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue")
      }

      setIsSubmitted(true)

      toast({
        title: "Rendez-vous confirmé",
        description: `Votre consultation a été réservée pour le ${formattedDate} à ${timeSlot}.`,
      })
    } catch (error) {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de la prise de rendez-vous.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="container py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Rendez-vous confirmé !</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Votre consultation a été programmée pour le {formattedDate} à {timeSlot}.
        </p>
        <p className="text-muted-foreground mb-8 max-w-md">
          Vous recevrez un email de confirmation avec tous les détails. J'ai hâte de discuter de votre projet !
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false)
            setDate(null)
            setTimeSlot("")
            setName("")
            setEmail("")
            setServiceType("")
            setMessage("")
          }}
        >
          Réserver un autre rendez-vous
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prendre rendez-vous</h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Planifiez une consultation pour discuter de vos besoins et comment je peux vous aider à atteindre vos
          objectifs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarClock className="mr-2 h-5 w-5" />
              Sélectionnez une date et une heure
            </CardTitle>
            <CardDescription>
              Choisissez une date et un créneau horaire disponible pour notre consultation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => {
                  const formattedDate = date.toISOString().split("T")[0]
                  return (
                    !AVAILABLE_TIMES[formattedDate] ||
                    date < new Date() ||
                    date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                  )
                }}
              />

              {date && (
                <div className="space-y-2">
                  <Label htmlFor="time-slot">Créneaux horaires disponibles</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {availableTimeSlots.length > 0 ? (
                      availableTimeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={timeSlot === time ? "default" : "outline"}
                          onClick={() => setTimeSlot(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))
                    ) : (
                      <p className="text-muted-foreground col-span-4">Aucun créneau disponible pour cette date.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vos informations</CardTitle>
            <CardDescription>Veuillez fournir vos coordonnées et les détails de votre demande</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom *</Label>
                <Input
                  id="name"
                  placeholder="Votre nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service-type">Type de service *</Label>
                <Select value={serviceType} onValueChange={setServiceType} required>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_TYPES.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Détails du projet</Label>
                <Textarea
                  id="message"
                  placeholder="Veuillez fournir une brève description de votre projet et de vos besoins"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={!date || !timeSlot || !name || !email || !serviceType || isSubmitting}
              >
                {isSubmitting ? "Soumission en cours..." : "Réserver la consultation"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}
