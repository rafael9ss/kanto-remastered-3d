import { Section, Eyebrow, Title, Cta } from "./ui";
import { bonus } from "./data";

export function Bonus() {
  return (
    <Section id="bonus" className="bg-ink-soft">
      <Eyebrow>Bônus</Eyebrow>
      <Title>E você ainda recebe 5 bônus</Title>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {bonus.map((b) => (
          <article
            key={b.titulo}
            className="flex gap-4 rounded-3xl border border-cream/10 bg-ink p-5"
          >
            <img src={b.art} alt="" loading="lazy" className="size-16 shrink-0" width={64} height={64} />
            <div>
              <h3 className="font-display text-sm leading-tight text-cream uppercase">{b.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-dim">{b.desc}</p>
              <p className="mt-3 text-sm font-bold text-cream-dim">
                Valor: <span className="line-through">{b.valor}</span>{" "}
                <span className="ml-1 rounded-md bg-poke-yellow px-2 py-1 text-xs font-black text-ink">
                  GRÁTIS
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center font-display text-2xl text-poke-yellow uppercase">
        R$ 255 em bônus incluídos
      </p>

      <div className="mt-8">
        <Cta>Quero reviver Pokémon em 3D</Cta>
      </div>
    </Section>
  );
}
