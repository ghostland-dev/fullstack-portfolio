import { NextResponse } from "next/server"

// Dans un environnement de production, utilisez un système d'authentification sécurisé
// comme NextAuth.js, Clerk, ou Auth0, et stockez les informations d'identification
// dans une base de données sécurisée, pas en dur dans le code.

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    // Vérification simple (à remplacer par une authentification sécurisée)
    if (email === "admin@example.com" && password === "admin123") {
      // Dans un système réel, générez un JWT ou un cookie de session sécurisé
      return NextResponse.json({
        success: true,
        message: "Authentification réussie",
        // token: "jwt_token_would_go_here"
      })
    }

    return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
  } catch (error) {
    console.error("Erreur d'authentification:", error)

    return NextResponse.json({ error: "Une erreur est survenue lors de l'authentification" }, { status: 500 })
  }
}

