export default function sitemap() {
  const baseUrl = "https://ismail-mouyahada.com"

  // Liste des routes statiques
  const routes = ["", "/services", "/about", "/portfolio", "/booking", "/contact", "/privacy-policy"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
}
