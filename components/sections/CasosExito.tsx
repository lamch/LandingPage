import { Bus, Package, FileSpreadsheet } from "lucide-react";
import { CASOS_EXITO } from "@/lib/constants";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import CountUp from "@/components/CountUp";

const ICONS = [Bus, Package, FileSpreadsheet];

export default function CasosExito() {
  return (
    <section className="bg-charcoal/72 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl tracking-tight text-ink md:text-[2.25rem]">
            Resultados, no diapositivas.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CASOS_EXITO.map((caso, i) => (
            <RevealItem key={caso.sector}>
              <div className="flex h-full flex-col overflow-hidden border-2 border-charcoal-lighter bg-charcoal-light transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:border-lime hover:shadow-[6px_6px_0px_var(--lime)]">
                <PlaceholderImage
                  icon={ICONS[i]}
                  label={caso.title}
                  className="h-44 w-full border-b-2 border-charcoal-lighter"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-wide text-lime">
                    {caso.sector}
                  </p>
                  <h3 className="mt-2 font-display text-base text-ink">
                    {caso.title}
                  </h3>
                  <p className="mt-4 text-3xl text-gradient-brand">
                    <CountUp value={caso.metric} />
                  </p>
                  <p className="mt-1 font-mono text-sm text-ink-soft">{caso.metricLabel}</p>
                  {caso.quote && (
                    <p className="mt-4 flex-1 border-t border-charcoal-lighter pt-4 font-mono text-sm italic leading-relaxed text-ink-soft">
                      &ldquo;{caso.quote}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
