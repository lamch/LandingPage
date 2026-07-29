"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { sendContactMessage } from "@/lib/actions";
import { SERVICIOS_INTERES } from "@/lib/constants";

export default function ContactForm({
  defaultService,
  onSuccess,
}: {
  defaultService?: string;
  onSuccess?: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      whatsapp: "",
      servicio: defaultService ?? "",
      mensaje: "",
      website: "",
    },
  });

  useEffect(() => {
    if (defaultService) setValue("servicio", defaultService);
  }, [defaultService, setValue]);

  const onSubmit = async (values: ContactFormValues) => {
    const result = await sendContactMessage(values);
    if (result.success) {
      toast.success(result.message);
      reset();
      onSuccess?.();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* honeypot antispam */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
        {...register("website")}
      />

      <div>
        <label htmlFor="nombre" className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          maxLength={100}
          className="mt-1.5 w-full border-2 border-charcoal-lighter bg-charcoal-light px-3.5 py-2.5 font-mono text-sm text-ink outline-none focus-visible:border-lime"
          {...register("nombre")}
        />
        {errors.nombre && (
          <p className="mt-1 text-xs text-destructive">{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="empresa" className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
          Empresa
        </label>
        <input
          id="empresa"
          type="text"
          maxLength={100}
          className="mt-1.5 w-full border-2 border-charcoal-lighter bg-charcoal-light px-3.5 py-2.5 font-mono text-sm text-ink outline-none focus-visible:border-lime"
          {...register("empresa")}
        />
        {errors.empresa && (
          <p className="mt-1 text-xs text-destructive">{errors.empresa.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="whatsapp" className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          type="tel"
          placeholder="+591 700 00000"
          maxLength={20}
          className="mt-1.5 w-full border-2 border-charcoal-lighter bg-charcoal-light px-3.5 py-2.5 font-mono text-sm text-ink outline-none focus-visible:border-lime"
          {...register("whatsapp")}
        />
        {errors.whatsapp && (
          <p className="mt-1 text-xs text-destructive">{errors.whatsapp.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="servicio" className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
          Servicio de interés
        </label>
        <select
          id="servicio"
          className="mt-1.5 w-full border-2 border-charcoal-lighter bg-charcoal-light px-3.5 py-2.5 font-mono text-sm text-ink outline-none focus-visible:border-lime"
          {...register("servicio")}
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {SERVICIOS_INTERES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.servicio && (
          <p className="mt-1 text-xs text-destructive">{errors.servicio.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">
          Cuéntanos tu problema
        </label>
        <textarea
          id="mensaje"
          rows={4}
          maxLength={2000}
          className="mt-1.5 w-full resize-none rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm text-ink outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring"
          {...register("mensaje")}
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs text-destructive">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border-2 border-charcoal bg-lime px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-charcoal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_var(--ink)] disabled:pointer-events-none disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
