"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, waLink } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 bg-charcoal transition-[border-color] duration-300 ${
        scrolled ? "border-b-4 border-ink" : "border-b-4 border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <img
            src="/logo-icon.svg"
            alt="ByteCodex Software Development"
            width={36}
            height={36}
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
          <span className="font-display text-lg tracking-tighter text-lime uppercase">
            BYTECODEX//DEV
          </span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-charcoal"
            >
              [ {link.label} ]
            </a>
          ))}
        </div>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border-2 border-charcoal bg-lime px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-charcoal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_var(--ink)] md:inline-block"
        >
          Agenda una llamada_
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center border-2 border-transparent p-2 text-ink transition-colors hover:border-lime md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t-4 border-ink bg-charcoal px-6 md:hidden"
          >
            <div className="flex flex-col gap-4 pb-6 pt-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                  className="font-mono text-sm font-bold uppercase tracking-widest text-ink"
                >
                  [ {link.label} ]
                </motion.a>
              ))}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="border-2 border-charcoal bg-lime px-5 py-2.5 text-center font-mono text-xs font-bold uppercase tracking-widest text-charcoal"
              >
                Agenda una llamada_
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
