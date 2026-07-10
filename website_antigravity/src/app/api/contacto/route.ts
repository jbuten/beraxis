import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  nombre?: string;
  organizacion?: string;
  correo?: string;
  mensaje?: string;
};

function buildEmailHtml(nombre: string, correo: string, organizacion: string, mensaje: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 8px;">
      <div style="background: #0f2744; padding: 20px 24px; border-radius: 6px 6px 0 0;">
        <h2 style="color: #ffffff; margin: 0; font-size: 18px;">Nueva solicitud de contacto — BERAXIS</h2>
      </div>
      <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; width: 140px;">Nombre</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Correo</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${correo}" style="color: #2563eb; font-size: 14px;">${correo}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase;">Organización</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${organizacion}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-size: 12px; font-weight: bold; text-transform: uppercase; vertical-align: top;">Mensaje</td>
            <td style="padding: 10px 0; color: #0f172a; font-size: 14px; line-height: 1.6;">${mensaje.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      </div>
      <p style="color: #94a3b8; font-size: 11px; text-align: center; margin-top: 16px;">
        Enviado desde el formulario de contacto de beraxis.com
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactRequestBody;
    const { nombre, organizacion, correo, mensaje } = body;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Campos requeridos faltantes (nombre, correo, mensaje)" },
        { status: 400 }
      );
    }

    const org = organizacion || "No especificada";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contacto API] RESEND_API_KEY no configurada.");
      return NextResponse.json({ success: true, message: "Solicitud recibida." });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "BERAXIS Contacto <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "contacto@beraxis.com",
      replyTo: correo,
      subject: `Nueva solicitud de contacto de ${nombre} — ${org}`,
      html: buildEmailHtml(nombre, correo, org, mensaje),
    });

    if (error) {
      console.error("[Contacto API] Error Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
        { status: 500 }
      );
    }

    // Forward to chatbot (optional)
    const chatbotUrl = process.env.CHATBOT_CONTACT_URL;
    if (chatbotUrl) {
      try {
        await fetch(chatbotUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: nombre, phone: "", email: correo,
            company: org, interest: "Contacto General Website BERAXIS",
            source: "beraxis_website", nombre, correo, organizacion: org, mensaje,
          }),
          signal: AbortSignal.timeout(8000),
        });
      } catch (chatbotError) {
        console.warn("[Contacto API] Chatbot no disponible:", chatbotError instanceof Error ? chatbotError.message : chatbotError);
      }
    }

    console.log(`[Contacto API] Email enviado a ${process.env.CONTACT_EMAIL || "contacto@beraxis.com"}`);
    return NextResponse.json({ success: true, message: "Solicitud de contacto enviada con éxito." });

  } catch (error: unknown) {
    console.error("[Contacto API Error]:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar la solicitud de contacto." },
      { status: 500 }
    );
  }
}
