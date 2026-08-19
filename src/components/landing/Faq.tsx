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
    <Section id="faq" variant="light">
      <div className="text-center">
        <Eyebrow>Perguntas frequentes</Eyebrow>
        <Title onAqua={false}>FAQ</Title>
      </div>

      <Accordion type="single" collapsible className="mt-8 w-full">
        {faq.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="mb-3 rounded-2xl border-2 border-navy bg-surface px-5"
          >
            <AccordionTrigger className="py-5 text-left font-display text-sm text-navy uppercase hover:no-underline sm:text-base">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[15px] leading-relaxed text-body">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mx-auto mt-12 max-w-xl">
        <Cta>Quero jogar Pokémon 3D</Cta>
      </div>
      <div className="mt-6">
        <Seals />
      </div>
    </Section>
  );
}
