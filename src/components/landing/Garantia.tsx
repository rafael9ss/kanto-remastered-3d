import seal from "@/assets/media/guarantee-220.webp";
import sealLarge from "@/assets/media/guarantee-440.webp";
import { Section, Title, Card } from "./ui";

export function Garantia() {
  return (
    <Section id="garantia" variant="aqua">
      <Card className="grid items-center gap-8 p-6 sm:grid-cols-[220px_1fr] sm:p-8">
        <img
          src={seal}
          srcSet={`${seal} 220w, ${sealLarge} 440w`}
          alt="Selo de garantia incondicional de 14 dias"
          loading="lazy"
          width={220}
          height={220}
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

