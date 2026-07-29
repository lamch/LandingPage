"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIOS } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function Testimonios() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + TESTIMONIOS.length) % TESTIMONIOS.length);
  };

  const current = TESTIMONIOS[index];

  return (
    <section className="bg-charcoal/72 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl tracking-tight text-ink md:text-[2.25rem]">
            Lo que dicen quienes ya automatizaron.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <Quote className="mx-auto h-8 w-8 text-lime/40" strokeWidth={1.5} />

          <div className="relative mt-6 min-h-[13rem] overflow-hidden sm:min-h-[9rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 text-center"
              >
                <p className="font-mono text-lg leading-relaxed text-ink">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-5 font-display text-sm text-ink">
                  {current.author}
                </p>
                <p className="font-mono text-xs text-ink-soft">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center border-2 border-charcoal-lighter text-ink-soft transition-colors hover:border-lime hover:text-lime"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIOS.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  aria-label={`Ir al testimonio ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2.5 w-2.5 transition-colors ${
                    i === index ? "bg-lime" : "bg-charcoal-lighter"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente testimonio"
              className="flex h-10 w-10 items-center justify-center border-2 border-charcoal-lighter text-ink-soft transition-colors hover:border-lime hover:text-lime"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
