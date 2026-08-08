import { Section, Eyebrow, Title } from "./ui";
import { depoimentos } from "./data";

export function ProvaSocial() {
  return (
    <Section id="prova" className="bg-ink">
      <Eyebrow>Prova social</Eyebrow>
      <Title>É exatamente isso que os fãs de Pokémon clássico estavam pedindo</Title>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {depoimentos.map((d) => (
          <figure
            key={d.autor}
            className="flex flex-col gap-4 rounded-3xl border border-cream/10 bg-ink-soft p-5"
          >
            <div className="flex items-center gap-3">
              <img
                src={d.art}
                alt=""
                loading="lazy"
                className="size-10 rounded-full bg-ink p-1"
                width={40}
                height={40}
              />
              <span className="text-xs font-semibold tracking-wide text-cream-dim uppercase">
                Comunidade Pokémon
              </span>
            </div>
            <blockquote className="text-[15px] leading-relaxed text-cream">“{d.texto}”</blockquote>
            <figcaption className="mt-auto text-xs text-cream-dim">— {d.autor}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
