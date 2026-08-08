import { Section, Eyebrow, Title } from "./ui";
import wpp9 from "@/assets/wpp-9.png.asset.json";
import wpp10 from "@/assets/wpp-10.png.asset.json";
import wpp11 from "@/assets/wpp-11.png.asset.json";

const prints = [
  {
    src: wpp9.url,
    alt: "Print do WhatsApp mostrando o jogo rodando liso no celular",
  },
  {
    src: wpp10.url,
    alt: "Print do WhatsApp confirmando instalação rápida",
  },
  {
    src: wpp11.url,
    alt: "Print do WhatsApp mostrando batalha Pokémon em 3D no celular",
  },
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
          Conversas reais de quem já está jogando Pokémon em 3D no celular.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {prints.map((p) => (
          <figure
            key={p.src}
            className="rounded-3xl border-2 border-navy bg-surface p-2 shadow-[0_6px_0_0_var(--navy)]"
          >
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-[#e5ddd5]">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full object-contain"
                width={640}
                height={640}
              />
            </div>
            <figcaption className="mt-2 text-center text-xs font-black uppercase tracking-wide text-navy/70">
              {"\n"}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-center text-sm font-bold text-navy/80">
        Resultados reais de quem já reviviu Kanto em 3D.
      </p>
    </Section>
  );
}
