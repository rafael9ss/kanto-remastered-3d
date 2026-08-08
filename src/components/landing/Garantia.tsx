import selo from "@/assets/selo-garantia.png";
import { Section, Title } from "./ui";

export function Garantia() {
  return (
    <Section id="garantia" className="bg-ink-soft">
      <div className="grid items-center gap-8 sm:grid-cols-[220px_1fr]">
        <img
          src={selo}
          alt="Selo de garantia incondicional de 14 dias"
          loading="lazy"
          width={1024}
          height={1024}
          className="mx-auto w-40 sm:w-full"
        />
        <div>
          <Title>Garantia Incondicional de 14 Dias</Title>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-cream-dim sm:text-lg">
            <p>Você tem 14 dias para acessar e conhecer o material.</p>
            <p>
              Se por qualquer motivo achar que não é para você, devolvemos 100% do seu investimento.
            </p>
            <p className="font-bold text-cream">Sem perguntas. Sem burocracia.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
