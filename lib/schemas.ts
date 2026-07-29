import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo.").max(100),
  empresa: z.string().trim().min(2, "Ingresa el nombre de tu empresa.").max(100),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Ingresa un número de WhatsApp válido.")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Ingresa un número de WhatsApp válido."),
  servicio: z.string().min(1, "Selecciona un servicio.").max(100),
  mensaje: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres).")
    .max(2000, "El mensaje es demasiado largo (máximo 2000 caracteres)."),
  // honeypot antispam: debe llegar vacío
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
