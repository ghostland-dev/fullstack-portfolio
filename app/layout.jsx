import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import FloatingCTA from "@/components/floating-cta"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ismail MOUYAHADA - DevOps & Full-Stack Developer",
  description:
    "Portfolio professionnel d'Ismail MOUYAHADA, Ingénieur DevOps et Développeur Full-Stack proposant des services de développement web, mobile, et cloud.",
  keywords:
    "DevOps, Full-Stack, développeur, React, Node.js, microservices, cloud, Docker, Kubernetes, développement web",
  openGraph: {
    title: "Ismail MOUYAHADA - DevOps & Full-Stack Developer",
    description: "Services de développement web, mobile et DevOps par un expert full-stack",
    url: "https://ismail-mouyahada.com",
    siteName: "Portfolio d'Ismail MOUYAHADA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ismail MOUYAHADA - DevOps & Full-Stack Developer",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://ismail-mouyahada.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Preconnect pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload des ressources critiques */}
        <link rel="preload" as="image" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
            <FloatingCTA />
            <Toaster />
          </div>
        </ThemeProvider>

        {/* Script de performance et analytics */}
        <Script id="performance-metrics" strategy="afterInteractive">
          {`
            // Mesure des Core Web Vitals
            function sendToAnalytics(metric) {
              const body = JSON.stringify({name: metric.name, value: metric.value});
              // Remplacer par votre endpoint d'analytics
              // navigator.sendBeacon('/api/analytics', body);
              console.log('Performance metric:', body);
            }

            // Web Vitals
            window.addEventListener('DOMContentLoaded', () => {
              // LCP - Largest Contentful Paint
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  const metric = {name: 'LCP', value: entry.startTime};
                  sendToAnalytics(metric);
                }
              }).observe({type: 'largest-contentful-paint', buffered: true});

              // FID - First Input Delay
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  const metric = {name: 'FID', value: entry.processingStart - entry.startTime};
                  sendToAnalytics(metric);
                }
              }).observe({type: 'first-input', buffered: true});

              // CLS - Cumulative Layout Shift
              let clsValue = 0;
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                  }
                }
                const metric = {name: 'CLS', value: clsValue};
                sendToAnalytics(metric);
              }).observe({type: 'layout-shift', buffered: true});
            });
          `}
        </Script>
      </body>
    </html>
  )
}
