import compare from "@/assets/image-6.png.asset.json";
import kanto from "@/assets/images.jpg.asset.json";
import { Section, Eyebrow, Title, Check, Cta } from "./ui";

export function Nostalgia() {
  return (
    <Section id="nostalgia" className="bg-ink-soft">
      <Eyebrow>De 1996 para 2026</Eyebrow>
      <Title>Reviva o Pokémon da sua infância de um jeito novo</Title>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <img
          src={compare.url}
          alt="Comparativo entre o Pokémon de 1996 e a versão 3D de 2026"
          loading="lazy"
          className="w-full rounded-3xl border border-cream/10 object-cover"
          width={480}
          height={640}
        />
        <img
          src={kanto.url}
          alt="Rota de Kanto em visual 3D"
          loading="lazy"
          className="w-full rounded-3xl border border-cream/10 object-cover"
          width={640}
          height={640}
        />
      </div>

      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-cream-dim sm:text-lg">
        <p>Volte para Kanto sem sentir que está jogando um game parado em 1996.</p>
        <p>
          Explore novamente as cidades, rotas e batalhas que marcaram sua infância — agora com uma
          experiência visual em 3D.
        </p>
      </div>

      <ul className="mt-8 grid gap-4 rounded-3xl border border-cream/10 bg-ink p-6">
        <Check>Sem precisar comprar um console novo.</Check>
        <Check>Sem depender de relançamento caro.</Check>
        <Check>Sem passar horas tentando descobrir como configurar tudo.</Check>
      </ul>

      <p className="mt-8 font-display text-xl text-cream uppercase sm:text-2xl">
        Abra. Instale. Escolha sua versão. E volte para Kanto.
      </p>

      <div className="mt-8">
        <Cta tone="red">Quero reviver Kanto em 3D</Cta>
      </div>
    </Section>
  );
}
