import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ as FAQ_ITEMS } from "@/lib/constants";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="bg-charcoal/72 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-5xl tracking-tight text-ink md:text-[3.5rem]">
            Preguntas frecuentes.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Accordion defaultValue={[]}>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={item.question} value={i}>
                <AccordionTrigger className="font-display text-base uppercase text-ink">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-mono text-sm leading-relaxed text-ink-soft">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
