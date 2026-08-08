import heroCity from "@/assets/image-2.png.asset.json";
import phone from "@/assets/image-4.png.asset.json";
import { Cta, Seals } from "./ui";
import { ball } from "./data";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <img
        src={heroCity.url}
        alt="Cidade de Kanto remasterizada em 3D ao pôr do sol"
        className="absolute inset-0 size-full object-cover opacity-35"
        width={1500}
        height={600}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-poke-yellow/40 bg-poke-yellow/10 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-poke-yellow uppercase">
            Pokémon 3D Remastered 2026
          </span>
          <span className="rounded-full border border-cream/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-cream-dim uppercase">
            Red. Blue. Yellow.
          </span>
        </div>

        <h1 className="font-display text-[2rem] leading-[1.05] text-cream uppercase sm:text-6xl">
          Reviva Pokémon Red, Blue e Yellow em <span className="text-poke-yellow">3D</span> — Agora
          no Android, iOS e PC
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-dim sm:text-lg">
          O Pokémon da sua infância com visual remasterizado em 3D, pronto para você instalar e
          voltar para Kanto em minutos.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-[1.6fr_1fr] sm:items-center">
          {/* Espaço reservado para a VSL */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-cream/15 bg-ink-soft shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
            <img
              src={heroCity.url}
              alt="Prévia do Pokémon Red, Blue e Yellow remasterizados em 3D"
              className="size-full object-cover opacity-60"
              width={1500}
              height={600}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="flex size-16 items-center justify-center rounded-full bg-poke-red text-2xl text-cream shadow-lg">
                ▶
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-cream uppercase">
                Assista ao vídeo
              </span>
            </div>
          </div>

          <img
            src={phone.url}
            alt="Pokémon em 3D rodando no celular"
            className="mx-auto w-44 rounded-3xl border border-cream/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] sm:w-full"
            width={333}
            height={592}
          />
        </div>

        <div className="mt-8">
          <Cta>Quero reviver Pokémon em 3D</Cta>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {[
            { l: "Android", i: ball.poke },
            { l: "iOS", i: ball.great },
            { l: "PC", i: ball.ultra },
          ].map((b) => (
            <span
              key={b.l}
              className="flex items-center gap-2 rounded-full border border-cream/15 bg-ink-soft/80 px-4 py-2 text-xs font-bold tracking-wide text-cream uppercase"
            >
              <img src={b.i} alt="" className="size-4" width={16} height={16} /> {b.l}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Seals />
        </div>
      </div>
    </header>
  );
}
