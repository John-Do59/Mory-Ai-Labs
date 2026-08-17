import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Si une clé d'accès Web3Forms ou Resend est configurée dans l'environnement
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (accessKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Nouveau Projet IA : ${name} (${company || "Non spécifié"})`,
            from_name: name,
            email: email,
            message: `Nom: ${name}\nEmail: ${email}\nEntreprise: ${company || "Non renseigné"}\n\nBesoin:\n${message}`,
            to: "rammanatamaury@gmail.com",
          }),
        });
      } catch (err) {
        console.error("Erreur d'envoi Web3Forms:", err);
      }
    } else {
      console.log("Demande de contact reçue :", { name, email, company, message });
    }

    return NextResponse.json({ success: true, message: "Demande reçue avec succès" });
  } catch (error) {
    console.error("Erreur serveur contact:", error);
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}
