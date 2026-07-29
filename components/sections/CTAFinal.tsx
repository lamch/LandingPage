"use client";

import { CTA_FINAL, waLink } from "@/lib/constants";
import Reveal from "@/components/Reveal";
import { useContactDialog } from "@/components/ContactDialogProvider";

export default function CTAFinal() {
  const { openDialog } = useContactDialog();

  return (
    <section className="border-y-4 border-charcoal bg-lime py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl tracking-tight text-charcoal md:text-[2.25rem]">
            {CTA_FINAL.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-mono text-[1.0625rem] leading-relaxed text-charcoal/80">
            {CTA_FINAL.text}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-charcoal bg-charcoal px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-lime transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--charcoal)]"
            >
              {CTA_FINAL.ctaWhatsapp}
            </a>
            <button
              type="button"
              onClick={() => openDialog()}
              className="inline-flex items-center justify-center border-2 border-charcoal px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-lime"
            >
              {CTA_FINAL.ctaForm}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
