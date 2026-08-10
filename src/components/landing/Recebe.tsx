import shot1 from "@/assets/image.png.asset.json";
import shot3 from "@/assets/image-3.png.asset.json";
import shot7 from "@/assets/image-7.png.asset.json";
import shotPc from "@/assets/image-5.png.asset.json";
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
          { src: shot1.url, alt: "Cidade de Kanto em 3D" },
          { src: shot3.url, alt: "Rotas e casas de Kanto em 3D" },
          { src: shot7.url, alt: "Visão do jogo 3D em primeira pessoa" },
          { src: shotPc.url, alt: "Pokémon 3D rodando no PC" },
        ].map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="aspect-square w-full rounded-2xl border-2 border-navy object-cover"
            width={600}
            height={600}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {jogos.map((j) => (
          <Card key={j.nome} className="flex items-center gap-3">
            <img src={j.art} alt="" loading="lazy" className="size-14" width={56} height={56} />
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
