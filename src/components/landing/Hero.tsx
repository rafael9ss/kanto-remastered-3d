import heroCity from "@/assets/image-2.png.asset.json";
import phone from "@/assets/image-4.png.asset.json";
import { Cta, Seals } from "./ui";
import { ball } from "./data";

export function Hero() {
  return (
    <header className="bg-kanto">
      <div className="bg-poke-red px-4 py-2.5 text-center text-[11px] font-black tracking-[0.12em] text-surface uppercase sm:text-xs">
        ● Oferta válida hoje ● Acesso imediato após a compra
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pt-10 pb-16 text-center sm:pt-16 sm:pb-24">
        <p className="inline-block -rotate-1 rounded-full border-2 border-navy bg-surface px-4 py-1.5 font-display text-xs text-navy uppercase">
          Pokémon 3D Remastered 2026
        </p>

        <h1 className="mt-6 font-display text-[2rem] leading-[1.05] text-surface uppercase drop-shadow-[0_4px_0_var(--aqua-deep)] sm:text-6xl">
          Reviva Pokémon Red, Blue e Yellow em{" "}
          <span className="inline-block rounded-xl border-2 border-navy bg-poke-yellow px-3 text-navy drop-shadow-none">
            3D
          </span>{" "}
          — Agora no Android, iOS e PC
        </h1>

        <p className="mx-auto mt-5 max-w-2xl rounded-full border-2 border-poke-yellow bg-surface px-5 py-3 text-sm font-bold text-poke-blue sm:text-base">
          O Pokémon da sua infância com visual remasterizado em 3D, pronto para você instalar e
          voltar para Kanto em minutos.
        </p>

        {/* Espaço reservado para a VSL */}
        <div className="relative mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-3xl border-4 border-navy bg-navy shadow-[0_10px_0_0_rgba(0,0,0,0.25)]">
          <img
            src={heroCity.url}
            alt="Prévia do Pokémon Red, Blue e Yellow remasterizados em 3D"
            className="size-full object-cover opacity-80"
            width={1500}
            height={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="flex size-16 items-center justify-center rounded-full border-2 border-navy bg-poke-red text-2xl text-surface">
              ▶
            </span>
            <span className="font-display text-xs text-surface uppercase">Assista ao vídeo</span>
          </div>
        </div>

        <img
          src={phone.url}
          alt="Pokémon em 3D rodando no celular"
          className="mx-auto mt-8 w-52 rounded-3xl border-4 border-navy sm:w-64"
          width={333}
          height={592}
        />

        <div className="mx-auto mt-8 max-w-xl">
          <Cta>Quero reviver Pokémon em 3D</Cta>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            { l: "Android", i: ball.poke },
            { l: "iOS", i: ball.great },
            { l: "PC", i: ball.ultra },
          ].map((b) => (
            <span
              key={b.l}
              className="flex items-center gap-2 rounded-full border-2 border-navy bg-surface px-4 py-2 text-xs font-black text-navy uppercase"
            >
              <img src={b.i} alt="" className="size-4" width={16} height={16} /> {b.l}
            </span>
          ))}
        </div>

        <p className="mt-6 font-display text-sm text-surface uppercase drop-shadow-[0_2px_0_var(--aqua-deep)]">
          Red. Blue. Yellow. A mesma nostalgia. Uma nova experiência.
        </p>

        <div className="mt-6">
          <Seals />
        </div>
      </div>
    </header>
  );
}
