"use client";

import { motion } from "framer-motion";
import { PROCESO } from "@/lib/constants";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export default function Proceso() {
  return (
    <section id="proceso" className="bg-charcoal-light/72 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl tracking-tight text-ink md:text-[2.25rem]">
            De la idea al sistema funcionando, en 4 pasos.
          </h2>
        </Reveal>

        <RevealGroup className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="absolute top-6 left-0 right-0 hidden h-1 bg-charcoal-lighter md:block"
            aria-hidden="true"
          />
          {PROCESO.map((paso) => (
            <RevealItem key={paso.step} className="relative">
              <div className="flex items-center gap-4 md:block">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2 border-charcoal bg-lime font-display text-lg text-charcoal"
                >
                  {paso.step}
                </motion.div>
                <div className="md:mt-5">
                  <h3 className="font-display text-base text-ink">
                    {paso.title}
                    {paso.meta && (
                      <span className="ml-2 font-mono text-xs font-medium text-ink-soft">
                        — {paso.meta}
                      </span>
                    )}
                  </h3>
                </div>
              </div>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink-soft md:mt-4">
                {paso.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
