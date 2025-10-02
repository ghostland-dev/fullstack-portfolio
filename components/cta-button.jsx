import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarClock, MessageSquare } from "lucide-react"

export default function CTAButton({ type = "booking", size = "default", variant = "secondary", className = "" }) {
  const ctaConfig = {
    booking: {
      href: "/booking",
      text: "Prendre rendez-vous",
      icon: <CalendarClock className="mr-2 h-4 w-4" />,
    },
    contact: {
      href: "/contact",
      text: "Me contacter",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
  }

  const { href, text, icon } = ctaConfig[type] || ctaConfig.booking

  return (
    <Link href={href} className={className}>
      <Button variant={variant} size={size} className="focus-visible-outline">
        {icon}
        {text}
      </Button>
    </Link>
  )
}
