import { Section, Eyebrow, Title, Card } from "./ui";
import { depoimentos } from "./data";

export function ProvaSocial() {
  return (
    <Section id="prova" variant="light">
      <div className="text-center">
        <Eyebrow>Prova social</Eyebrow>
        <Title onAqua={false}>
          É exatamente isso que os fãs de Pokémon clássico estavam pedindo
        </Title>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {depoimentos.map((d) => (
          <Card key={d.autor} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={d.art}
                alt=""
                loading="lazy"
                className="size-10 rounded-full border-2 border-navy bg-surface-2 p-1"
                width={40}
                height={40}
              />
              <span className="text-xs font-black tracking-wide text-poke-blue uppercase">
                Comunidade Pokémon
              </span>
            </div>
            <blockquote className="text-[15px] leading-relaxed font-semibold text-navy">
              “{d.texto}”
            </blockquote>
            <figcaption className="mt-auto text-xs text-body">— {d.autor}</figcaption>
          </Card>
        ))}
      </div>
    </Section>
  );
}
