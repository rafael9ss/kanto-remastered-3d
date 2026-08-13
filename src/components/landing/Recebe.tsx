import shot1Small from "@/assets/media/kanto-city-240.webp";
import shot1Large from "@/assets/media/kanto-city-480.webp";
import shot3Small from "@/assets/media/kanto-routes-240.webp";
import shot3Large from "@/assets/media/kanto-routes-480.webp";
import shot7Small from "@/assets/media/kanto-first-person-240.webp";
import shot7Large from "@/assets/media/kanto-first-person-480.webp";
import shotPcSmall from "@/assets/media/kanto-pc-240.webp";
import shotPcLarge from "@/assets/media/kanto-pc-480.webp";
import { Section, Eyebrow, Title, Check, Cta, Card } from "./ui";
import { jogos } from "./data";

export function Recebe() {
  return (
    <Section id="recebe" variant="light">
      <div className="text-center">
        <Eyebrow>O que você recebe</Eyebrow>
        <Title onAqua={false}>3 Pokémon Clássicos Remasterizados em 3D</Title>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { src: shot1Small, srcSet: `${shot1Small} 240w, ${shot1Large} 480w`, alt: "Cidade de Kanto em 3D" },
          { src: shot3Small, srcSet: `${shot3Small} 240w, ${shot3Large} 480w`, alt: "Rotas e casas de Kanto em 3D" },
          { src: shot7Small, srcSet: `${shot7Small} 240w, ${shot7Large} 480w`, alt: "Visão do jogo 3D em primeira pessoa" },
          { src: shotPcSmall, srcSet: `${shotPcSmall} 240w, ${shotPcLarge} 480w`, alt: "Pokémon 3D rodando no PC" },
        ].map((img) => (
          <img
            key={img.src}
            src={img.src}
            srcSet={img.srcSet}
            alt={img.alt}
            loading="lazy"
            className="aspect-square w-full rounded-2xl border-2 border-navy object-cover"
            width={240}
            height={240}
            decoding="async"
            sizes="(max-width: 640px) calc((100vw - 52px) / 2), 240px"
          />
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {jogos.map((j) => (
          <Card key={j.nome} className="flex items-center gap-3">
            <img
              src={j.art}
              alt=""
              loading="lazy"
              className="size-14 shrink-0"
              width={56}
              height={56}
              decoding="async"
              sizes="56px"
            />
            <p className="font-display text-sm leading-tight text-navy uppercase">{j.nome}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 p-6">
        <ul className="grid gap-4 sm:grid-cols-2">
          <Check>Mod 3D já aplicado aos jogos.</Check>
          <Check>Versões para Android e PC.</Check>
          <Check>Tutorial rápido para instalar e começar a jogar em minutos.</Check>
          <Check>Atualizações constantes para deixar a experiência cada vez melhor.</Check>
        </ul>
      </Card>

      <div className="mx-auto mt-8 max-w-xl">
        <Cta>Quero reviver Pokémon em 3D</Cta>
      </div>
    </Section>
  );
}