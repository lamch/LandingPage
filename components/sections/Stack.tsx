import { STACK } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function Stack() {
  const loopItems = [...STACK, ...STACK];

  return (
    <section className="bg-charcoal-light/72 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl tracking-tight text-ink md:text-[2.25rem]">
            Construimos con tecnología que no pasa de moda.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden border-y-4 border-charcoal [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 py-4">
          {loopItems.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-lg uppercase text-ink-soft/50 transition-colors duration-300 hover:text-lime"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
