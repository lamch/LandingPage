"use client";

import { useEffect, useState } from "react";
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
    <header
      className={`sticky top-0 z-50 bg-charcoal transition-[border-color] duration-300 ${
        scrolled ? "border-b-4 border-ink" : "border-b-4 border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/logo-icon.svg"
            alt="ByteCodex Software Development"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
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
              className="px-2 py-1 font-mono text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-charcoal"
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
          className="inline-flex items-center justify-center border-2 border-transparent p-2 text-ink hover:border-lime md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t-4 border-ink bg-charcoal px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm font-bold uppercase tracking-widest text-ink"
              >
                [ {link.label} ]
              </a>
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
        </div>
      )}
    </header>
  );
}
