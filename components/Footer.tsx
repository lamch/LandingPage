import Link from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { FOOTER_COLUMNS, SITE, NAV_LINKS } from "@/lib/constants";
import BinaryClicker from "@/components/BinaryClicker";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-8 border-lime bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo-icon.svg"
                alt="ByteCodex Software Development"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-base text-lime uppercase">BYTECODEX//DEV</span>
            </div>
            <p className="mt-3 max-w-xs font-mono text-sm text-ink-soft">{SITE.tagline}</p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink-soft transition-colors hover:text-lime"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink-soft transition-colors hover:text-lime"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink-soft transition-colors hover:text-lime"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Servicios</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COLUMNS.servicios.map((item) => (
                <li key={item}>
                  <a
                    href="#servicios"
                    className="font-mono text-sm text-ink-soft transition-colors hover:text-lime"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Empresa</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-ink-soft transition-colors hover:text-lime"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COLUMNS.legal.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-mono text-sm text-ink-soft transition-colors hover:text-lime"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-ink">Contacto</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <a href={`mailto:${SITE.email}`} className="font-mono hover:text-lime">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>

        <BinaryClicker />

        <div className="mt-6 border-t border-border pt-6 text-center text-xs text-ink-soft">
          © {year} ByteCodex Software Development
        </div>
      </div>
    </footer>
  );
}
