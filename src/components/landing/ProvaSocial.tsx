import { Section, Eyebrow, Title, Card } from "./ui";
import { depoimentos } from "./data";
import wpp9 from "@/assets/wpp-9.png.asset.json";
import wpp10 from "@/assets/wpp-10.png.asset.json";
import wpp11 from "@/assets/wpp-11.png.asset.json";

const prints = [
  { src: wpp9.url, alt: "Cliente mostrando o jogo rodando liso no celular pelo WhatsApp" },
  { src: wpp10.url, alt: "Cliente confirmando compra e instalação rápida pelo WhatsApp" },
  { src: wpp11.url, alt: "Cliente jogando uma batalha Pokémon no celular pelo WhatsApp" },
];

export function ProvaSocial() {
  return (
    <Section id="prova" variant="light">
      <div className="text-center">
        <Eyebrow>Prova social</Eyebrow>
        <Title onAqua={false}>
          É exatamente isso que os fãs de Pokémon clássico estavam pedindo
        </Title>
        <p className="mx-auto mt-4 max-w-xl text-[15px] font-semibold text-body">
          Mensagens reais de quem já está jogando Pokémon em 3D no celular.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {prints.map((p) => (
          <figure
            key={p.src}
            className="overflow-hidden rounded-3xl border-2 border-navy bg-surface shadow-[0_6px_0_0_var(--navy)]"
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full object-cover"
              width={640}
              height={640}
            />
          </figure>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
