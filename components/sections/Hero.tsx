"use client";

import { motion } from "framer-motion";
import { HERO, waLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-charcoal/72">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-2 md:pb-24 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex w-fit items-center gap-2 border-2 border-lime bg-charcoal px-4 py-2">
            <span className="h-2.5 w-2.5 animate-ping rounded-full bg-lime" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">
              {HERO.eyebrow}
            </span>
          </div>

          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.25rem)] font-display uppercase leading-[1.05] tracking-tight text-ink">
            {HERO.headingPre}{" "}
            <span className="bg-lime px-2 text-charcoal">{HERO.headingHighlight}</span>{" "}
            {HERO.headingPost}
          </h1>

          <p className="mt-6 max-w-xl border-l-4 border-lime pl-4 font-mono text-[1.0625rem] leading-relaxed text-ink-soft">
            {HERO.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-charcoal bg-lime px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-charcoal transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--ink)]"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center border-2 border-ink px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-ink transition-all hover:-translate-x-1 hover:-translate-y-1 hover:border-lime hover:text-lime hover:shadow-[6px_6px_0px_var(--lime)]"
            >
              {HERO.ctaSecondary}
            </a>
          </div>

          <p className="mt-8 font-mono text-[0.8125rem] text-ink-soft">
            {HERO.socialProof}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-md rotate-2 border-4 border-lime bg-charcoal-light p-2 transition-transform duration-300 hover:rotate-0 md:max-w-none"
        >
          <video
            className="aspect-square w-full object-cover"
            src="/hero-video.mp4"
            poster="/hero-video-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            aria-label="ByteCodex: animación del logo BC"
          />
        </motion.div>
      </div>
    </section>
  );
}
