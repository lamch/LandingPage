"use client";

import { Check } from "lucide-react";
import { PLANES, PLANES_NOTA, waLink } from "@/lib/constants";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useContactDialog } from "@/components/ContactDialogProvider";

export default function Planes() {
  const { openDialog } = useContactDialog();

  return (
    <section id="planes" className="bg-charcoal-light/72 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl tracking-tight text-ink md:text-[2.25rem]">
            Planes claros. Sin letra chica.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {PLANES.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={`relative flex h-full flex-col p-8 ${
                  plan.highlighted
                    ? "border-2 border-lime bg-charcoal text-ink lg:-mt-4 lg:scale-[1.03]"
                    : "border-2 border-charcoal-lighter bg-charcoal text-ink"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 border-2 border-charcoal bg-lime px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
                    Más elegido
                  </span>
                )}

                <h3 className="font-display text-xl">{plan.name}</h3>
                <p className="mt-1 font-mono text-sm text-ink-soft">{plan.para}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-mono text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlighted ? "text-lime" : "text-ink-soft"
                        }`}
                      />
                      <span className="text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {plan.prefix && (
                    <span className="font-mono text-xs text-ink-soft">{plan.prefix} </span>
                  )}
                  <span className="font-display text-2xl text-ink">{plan.precio}</span>
                </div>

                {plan.name === "Enterprise" ? (
                  <a
                    href={waLink("Hola ByteCodex, quiero hablar sobre el plan Enterprise.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center border-2 border-ink px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-lime hover:text-lime"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => openDialog(`Plan ${plan.name}`)}
                    className={`mt-6 inline-flex items-center justify-center border-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                      plan.highlighted
                        ? "border-charcoal bg-lime text-charcoal hover:shadow-[4px_4px_0px_var(--ink)]"
                        : "border-ink text-ink hover:border-lime hover:text-lime hover:shadow-[4px_4px_0px_var(--lime)]"
                    }`}
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-xs text-ink-soft">
          {PLANES_NOTA}
        </p>
      </div>
    </section>
  );
}
