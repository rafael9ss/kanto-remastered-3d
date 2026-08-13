import logoSmall from "@/assets/media/logo-288.webp";
import phoneSmall from "@/assets/media/phone-208.webp";
import phoneLarge from "@/assets/media/phone-416.webp";
import { Cta, Seals } from "./ui";
import { HeroVideo } from "./HeroVideo";
import { ball } from "./data";

const deviceBadges = [
  { label: "Android", icon: ball.poke },
  { label: "PC", icon: ball.ultra },
];

export function Hero() {
  return (
    <header className="hero-shell bg-kanto">
      <div className="bg-poke-red px-4 py-2.5 text-center text-[11px] font-black tracking-[0.12em] text-surface uppercase sm:text-xs">
        ● Oferta válida hoje ● Acesso imediato após a compra
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pt-8 pb-16 text-center sm:pt-12 sm:pb-24">
        <img
          src={logoSmall}
          alt="Pokémon Remastered 2026"
          className="mx-auto w-56 drop-shadow-[0_4px_0_var(--aqua-deep)] sm:w-72"
          width={288}
          height={157}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          sizes="(max-width: 640px) 224px, 288px"
        />

        <h1 className="mt-6 font-display text-[2rem] leading-[1.05] text-surface uppercase drop-shadow-[0_4px_0_var(--aqua-deep)] sm:text-6xl">
          Reviva Pokémon <span className="text-poke-red">Red</span>,{" "}
          <span className="text-poke-blue">Blue</span> e{" "}
          <span className="text-poke-yellow">Yellow</span> em{" "}
          <span className="inline-block rounded-xl border-2 border-navy bg-poke-yellow px-3 text-navy drop-shadow-none">
            3D
          </span>{" "}
          — Agora no Android e PC
        </h1>

        <p className="mx-auto mt-5 max-w-2xl rounded-full border-2 border-poke-yellow bg-surface px-5 py-3 text-sm font-bold text-poke-blue sm:text-base">
          O Pokémon da sua infância com visual remasterizado em 3D, pronto para você instalar e
          voltar para Kanto em minutos.
        </p>

        <HeroVideo />

        <div className="mx-auto mt-8 max-w-xl">
          <Cta className="hero-cta">Quero reviver Pokémon em 3D</Cta>
        </div>

        <img
          src={phoneSmall}
          srcSet={`${phoneSmall} 208w, ${phoneLarge} 416w`}
          alt="Pokémon em 3D rodando no celular"
          className="mx-auto mt-8 w-52 rounded-3xl border-4 border-navy sm:w-64"
          width={208}
          height={371}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 208px, 256px"
        />


        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {deviceBadges.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 rounded-full border-2 border-navy bg-surface px-4 py-2 text-xs font-black text-navy uppercase"
            >
              <img
                src={badge.icon}
                alt=""
                className="size-4"
                width={16}
                height={16}
                loading="eager"
                decoding="async"
              />{" "}
              {badge.label}
            </span>
          ))}
        </div>

        <p className="mt-6 font-display text-sm text-surface uppercase drop-shadow-[0_2px_0_var(--aqua-deep)]">
          <span className="text-poke-red">Red.</span> <span className="text-poke-blue">Blue.</span>{" "}
          <span className="text-poke-yellow">Yellow.</span> A mesma nostalgia. Uma nova experiência.
        </p>

        <div className="mt-6">
          <Seals />
        </div>
      </div>
    </header>
  );
}