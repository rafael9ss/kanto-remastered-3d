import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow, Title, Cta, Seals } from "./ui";
import { faq } from "./data";

export function Faq() {
  return (
    <Section id="faq" className="bg-ink">
      <Eyebrow>Perguntas frequentes</Eyebrow>
      <Title>FAQ</Title>

      <Accordion type="single" collapsible className="mt-8 w-full">
        {faq.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-cream/10">
            <AccordionTrigger className="py-6 text-left font-display text-base text-cream uppercase hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-[15px] leading-relaxed text-cream-dim">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12">
        <Cta>Quero reviver Pokémon em 3D</Cta>
      </div>
      <div className="mt-6">
        <Seals />
      </div>
    </Section>
  );
}
