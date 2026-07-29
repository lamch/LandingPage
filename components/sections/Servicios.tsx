"use client";

import {
  Code2,
  BrainCircuit,
  MessageSquareText,
  Workflow,
  Server,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { SERVICIOS, type Servicio } from "@/lib/constants";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { useContactDialog } from "@/components/ContactDialogProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  BrainCircuit,
  MessageSquareText,
  Workflow,
  Server,
  Compass,
};

function ServicioCard({
  servicio,
  onOpen,
}: {
  servicio: Servicio;
  onOpen: (title: string) => void;
}) {
  const Icon = ICONS[servicio.icon];
  return (
    <div className="group relative flex h-full flex-col border-2 border-charcoal-lighter bg-charcoal-light p-6 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:border-lime hover:shadow-[6px_6px_0px_var(--lime)]">
      <div className="flex h-11 w-11 items-center justify-center border-2 border-lime text-lime">
        <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 font-display text-lg text-ink">{servicio.title}</h3>
      <p className="mt-2 flex-1 font-mono text-sm leading-relaxed text-ink-soft">
        {servicio.description}
      </p>
      <button
        type="button"
        onClick={() => onOpen(servicio.title)}
        className="mt-5 inline-flex items-center gap-1.5 self-start font-mono text-sm font-bold uppercase tracking-wide text-lime transition-colors hover:text-ink"
      >
        Saber más <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

export default function Servicios() {
  const { openDialog } = useContactDialog();

  return (
    <section id="servicios" className="bg-charcoal/72 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl tracking-tight text-ink md:text-[2.25rem]">
            Todo lo que tu empresa necesita, bajo un mismo techo.
          </h2>
        </Reveal>

        {/* Tablet / desktop: grid de cards */}
        <RevealGroup className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((servicio) => (
            <RevealItem key={servicio.title}>
              <ServicioCard servicio={servicio} onOpen={openDialog} />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Móvil: Tabs para navegar servicios de a uno */}
        <Reveal className="mt-10 sm:hidden">
          <Tabs defaultValue={0}>
            <TabsList
              variant="line"
              className="h-auto w-full flex-nowrap justify-start gap-1 overflow-x-auto"
            >
              {SERVICIOS.map((servicio, i) => (
                <TabsTrigger key={servicio.title} value={i} className="shrink-0 px-2.5 py-1.5">
                  {servicio.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {SERVICIOS.map((servicio, i) => (
              <TabsContent key={servicio.title} value={i} className="mt-5">
                <ServicioCard servicio={servicio} onOpen={openDialog} />
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
