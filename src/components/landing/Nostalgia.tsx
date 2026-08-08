import compare from "@/assets/image-6.png.asset.json";
import kanto from "@/assets/images.jpg.asset.json";
import { Section, Eyebrow, Title, Check, Cta, Card } from "./ui";

export function Nostalgia() {
  return (
    <Section id="nostalgia" variant="aqua">
      <div className="text-center">
        <Eyebrow>De 1996 para 2026</Eyebrow>
        <Title>Reviva o Pokémon da sua infância de um jeito novo</Title>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <img
          src={compare.url}
          alt="Comparativo entre o Pokémon de 1996 e a versão 3D de 2026"
          loading="lazy"
          className="w-full rounded-3xl border-4 border-navy object-cover"
          width={480}
          height={640}
        />
        <img
          src={kanto.url}
          alt="Rota de Kanto em visual 3D"
          loading="lazy"
          className="w-full rounded-3xl border-4 border-navy object-cover"
          width={640}
          height={640}
        />
      </div>

      <Card className="mt-8 space-y-5 p-6">
        <p className="text-[15px] leading-relaxed text-body sm:text-lg">
          Volte para Kanto sem sentir que está jogando um game parado em 1996.
        </p>
        <p className="text-[15px] leading-relaxed text-body sm:text-lg">
          Explore novamente as cidades, rotas e batalhas que marcaram sua infância — agora com uma
          experiência visual em 3D.
        </p>
        <ul className="grid gap-4 border-t-2 border-dashed border-navy/20 pt-5">
          <Check>Sem precisar comprar um console novo.</Check>
          <Check>Sem depender de relançamento caro.</Check>
          <Check>Sem passar horas tentando descobrir como configurar tudo.</Check>
        </ul>
      </Card>

      <p className="mt-8 text-center font-display text-xl text-surface uppercase drop-shadow-[0_3px_0_var(--aqua-deep)] sm:text-2xl">
        Abra. Instale. Escolha sua versão. E volte para Kanto.
      </p>

      <div className="mx-auto mt-8 max-w-xl">
        <Cta tone="red">Quero reviver Kanto em 3D</Cta>
      </div>
    </Section>
  );
}
