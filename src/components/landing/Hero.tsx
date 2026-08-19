import logoSmall from "@/assets/media/logo-288.webp";
import phoneSmall from "@/assets/media/phone-208.webp";
import phoneLarge from "@/assets/media/phone-416.webp";
import bonusArt from "@/assets/media/bonus-art.png";
import { Cta } from "./ui";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <header className="hero-shell bg-kanto">

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
          <Cta className="hero-cta">Quero jogar Pokémon 3D</Cta>
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


        <p className="mt-6 font-display text-sm text-surface uppercase drop-shadow-[0_2px_0_var(--aqua-deep)]">
          <span className="text-poke-red">Red.</span> <span className="text-poke-blue">Blue.</span>{" "}
          <span className="text-poke-yellow">Yellow.</span> A mesma nostalgia. Uma nova experiência.
        </p>

        <img
          src={bonusArt}
          alt="5 bônus grátis: +50 jogos clássicos Pokémon, Kanto/Johto/Hoenn/Sinnoh, trocas e batalhas online, emulador otimizado e guia de instalação — R$ 255 em bônus incluídos"
          className="mx-auto mt-8 w-full max-w-sm rounded-3xl border-2 border-navy shadow-[0_6px_0_0_var(--navy)]"
          width={1024}
          height={1408}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, 384px"
        />
      </div>
    </header>
  );
}