import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, type } = body

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Veuillez remplir tous les champs obligatoires" }, { status: 400 })
    }

    // Ici, vous intégreriez un service d'envoi d'emails comme SendGrid, Mailgun, etc.
    // Exemple avec un service fictif:
    /*
    await emailService.send({
      to: "contact@example.com",
      from: email,
      subject: subject || `Nouveau message de ${name}`,
      text: message,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${type ? `<p><strong>Type:</strong> ${type}</p>` : ''}
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    */

    // Simulation d'envoi d'email (à remplacer par un vrai service)
    console.log("Email envoyé:", { name, email, subject, message, type })

    // Réponse de succès
    return NextResponse.json({ success: true, message: "Votre message a été envoyé avec succès" }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)

    return NextResponse.json({ error: "Une erreur est survenue lors de l'envoi de votre message" }, { status: 500 })
  }
}

