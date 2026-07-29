import { ShieldCheck } from "lucide-react";
import { GARANTIAS, ESTANDARES_CALIDAD } from "@/lib/constants";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Garantias() {
  return (
    <section
      id="garantias"
      className="relative overflow-hidden bg-charcoal/72 py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl tracking-tight text-ink md:text-[2.25rem]">
            Nuestra palabra, por escrito.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {GARANTIAS.map((g) => (
            <RevealItem key={g.title}>
              <div className="flex h-full gap-4 border-2 border-charcoal-lighter bg-charcoal-light p-6 transition-colors hover:border-lime">
                <ShieldCheck
                  className="h-5 w-5 shrink-0 text-lime"
                  strokeWidth={1.75}
                />
                <div>
                  <h3 className="font-display text-base text-ink">
                    {g.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-ink-soft">
                    {g.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14 border-t border-charcoal-lighter pt-10">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {ESTANDARES_CALIDAD.map((item) => (
              <span
                key={item}
                className="font-mono text-xs uppercase tracking-widest text-ink-soft"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
