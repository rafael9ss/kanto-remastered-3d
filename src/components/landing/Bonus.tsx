import { Section, Eyebrow, Title, Cta, Card } from "./ui";
import { bonus } from "./data";
import bonusArt from "@/assets/media/bonus-art.png";

export function Bonus() {
  return (
    <Section id="bonus" variant="aqua">
      <div className="text-center">
        <Eyebrow>Bônus</Eyebrow>
        <Title>E você ainda recebe 5 bônus</Title>
        <p className="mt-4 text-sm font-bold text-surface/90">
          Os bônus clássicos também funcionam no iOS.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {bonus.map((b) => (
          <Card key={b.titulo} className="flex gap-4">
            <img
              src={b.art}
              alt=""
              loading="lazy"
              className="size-16 shrink-0"
              width={64}
              height={64}
              decoding="async"
              sizes="64px"
            />
            <div>
              <h3 className="font-display text-sm leading-tight text-navy uppercase">{b.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{b.desc}</p>
              <p className="mt-3 text-sm font-bold text-body">
                Valor: <span className="line-through">{b.valor}</span>{" "}
                <span className="ml-1 rounded-md border-2 border-navy bg-poke-yellow px-2 py-0.5 text-xs font-black text-navy">
                  GRÁTIS
                </span>
              </p>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center font-display text-2xl text-surface uppercase drop-shadow-[0_3px_0_var(--aqua-deep)]">
        R$ 255 em bônus incluídos
      </p>

      <div className="mx-auto mt-8 max-w-xl">
        <Cta>Quero jogar Pokémon 3D</Cta>
      </div>
    </Section>
  );
}