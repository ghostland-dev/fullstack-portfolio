import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, date, timeSlot, serviceType, message } = body

    // Validation des données
    if (!name || !email || !date || !timeSlot || !serviceType) {
      return NextResponse.json({ error: "Veuillez remplir tous les champs obligatoires" }, { status: 400 })
    }

    // Ici, vous intégreriez un service d'envoi d'emails et/ou de gestion de calendrier
    // Exemple avec un service fictif:
    /*
    // Envoi d'email de confirmation au client
    await emailService.send({
      to: email,
      from: "contact@example.com",
      subject: "Confirmation de votre rendez-vous",
      text: `Bonjour ${name}, votre rendez-vous a été confirmé pour le ${date} à ${timeSlot}.`,
      html: `
        <h1>Confirmation de rendez-vous</h1>
        <p>Bonjour ${name},</p>
        <p>Votre rendez-vous a été confirmé pour le <strong>${date}</strong> à <strong>${timeSlot}</strong>.</p>
        <p>Service: ${serviceType}</p>
        ${message ? `<p>Votre message: ${message}</p>` : ''}
        <p>Merci de votre confiance.</p>
      `,
    });

    // Notification pour Ismail
    await emailService.send({
      to: "contact@example.com",
      from: "no-reply@example.com",
      subject: "Nouveau rendez-vous",
      text: `Nouveau rendez-vous avec ${name} (${email}) le ${date} à ${timeSlot} pour ${serviceType}.`,
      html: `
        <h1>Nouveau rendez-vous</h1>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Heure:</strong> ${timeSlot}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `,
    });

    // Ajout au calendrier
    await calendarService.addEvent({
      title: `Rendez-vous avec ${name}`,
      description: `Service: ${serviceType}\nEmail: ${email}\nMessage: ${message || 'Aucun'}`,
      start: new Date(`${date}T${timeSlot}`),
      end: new Date(`${date}T${timeSlot}`).setHours(new Date(`${date}T${timeSlot}`).getHours() + 1),
    });
    */

    // Simulation (à remplacer par un vrai service)
    console.log("Rendez-vous enregistré:", { name, email, date, timeSlot, serviceType, message })

    // Réponse de succès
    return NextResponse.json(
      {
        success: true,
        message: "Votre rendez-vous a été confirmé. Vous recevrez un email de confirmation.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du rendez-vous:", error)

    return NextResponse.json({ error: "Une erreur est survenue lors de la prise de rendez-vous" }, { status: 500 })
  }
}
