import selo from "@/assets/selo-garantia.png";
import { Section, Title, Card } from "./ui";

export function Garantia() {
  return (
    <Section id="garantia" variant="aqua">
      <Card className="grid items-center gap-8 p-6 sm:grid-cols-[220px_1fr] sm:p-8">
        <img
          src={selo}
          alt="Selo de garantia incondicional de 14 dias"
          loading="lazy"
          width={1024}
          height={1024}
          className="mx-auto w-40 sm:w-full"
          decoding="async"
          sizes="(max-width: 640px) 160px, 220px"
        />
        <div>
          <Title onAqua={false}>Garantia Incondicional de 14 Dias</Title>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-body sm:text-lg">
            <p>Você tem 14 dias para acessar e conhecer o material.</p>
            <p>
              Se por qualquer motivo achar que não é para você, devolvemos 100% do seu investimento.
            </p>
            <p className="font-black text-navy">Sem perguntas. Sem burocracia.</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
