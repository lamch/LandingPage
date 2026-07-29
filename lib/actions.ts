"use server";

import { contactSchema, type ContactFormValues } from "@/lib/schemas";

export type ContactActionResult = {
  success: boolean;
  message: string;
};

export async function sendContactMessage(
  values: ContactFormValues
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Revisa los datos del formulario." };
  }

  if (parsed.data.website) {
    // honeypot: bot detectado, respondemos éxito sin procesar nada
    return { success: true, message: "Mensaje enviado." };
  }

  console.log("[contacto] Nuevo lead:", {
    nombre: parsed.data.nombre,
    empresa: parsed.data.empresa,
    whatsapp: parsed.data.whatsapp,
    servicio: parsed.data.servicio,
    mensaje: parsed.data.mensaje,
  });

  return {
    success: true,
    message: "Mensaje enviado. Te respondemos en menos de 24 horas hábiles.",
  };
}
