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

        <h1 className="mx-auto mt-6 max-w-[18ch] text-balance font-display text-[1.75rem] leading-[1.12] tracking-tight text-navy uppercase sm:max-w-[22ch] sm:text-5xl lg:text-6xl">
          Reviva Pokémon{" "}
          <span className="inline-block whitespace-nowrap rounded-lg border-2 border-navy bg-poke-red-light px-1.5 text-navy">
            Red
          </span>
          ,{" "}
          <span className="inline-block whitespace-nowrap rounded-lg border-2 border-navy bg-poke-blue-light px-1.5 text-navy">
            Blue
          </span>{" "}
          e{" "}
          <span className="inline-block whitespace-nowrap rounded-lg border-2 border-navy bg-poke-yellow px-1.5 text-navy">
            Yellow
          </span>{" "}
          agora em{" "}
          <span className="inline-block whitespace-nowrap rounded-xl border-2 border-navy bg-surface px-2 text-navy">
            3D
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-[24ch] text-balance font-display text-sm leading-snug tracking-[0.08em] text-navy uppercase sm:text-base">
          No Android e no PC
        </p>

        <p className="mx-auto mt-5 max-w-xl text-pretty rounded-2xl border-2 border-navy bg-surface px-5 py-4 text-[15px] leading-relaxed font-semibold text-navy sm:text-lg">
          O Pokémon da sua infância, remasterizado em 3D. Instale em minutos e volte a explorar
          Kanto hoje mesmo — sem console novo e sem complicação.
        </p>



        <HeroVideo />

        <div className="mx-auto mt-8 max-w-xl">
          <Cta className="hero-cta">Quero jogar Pokémon 3D</Cta>
        </div>

        <img
          src={phoneSmall}
          srcSet={`${phoneSmall} 208w, ${phoneLarge} 416w`}
          alt="Pokémon em 3D rodando no celular"
          className="mx-auto mt-8 w-52 rounded-3xl border-4 border-surface sm:w-64"
          width={208}
          height={371}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 208px, 256px"
        />


        <p className="mx-auto mt-6 max-w-md text-balance font-display text-[13px] leading-[2] text-navy uppercase sm:text-sm">
          <span className="whitespace-nowrap rounded border-2 border-navy bg-poke-red-light px-1.5 text-navy">
            Red.
          </span>{" "}
          <span className="whitespace-nowrap rounded border-2 border-navy bg-poke-blue-light px-1.5 text-navy">
            Blue.
          </span>{" "}
          <span className="whitespace-nowrap rounded border-2 border-navy bg-poke-yellow px-1.5 text-navy">
            Yellow.
          </span>{" "}
          A mesma nostalgia. Uma nova aventura.
        </p>



        <img
          src={bonusArt}
          alt="5 bônus grátis: +50 jogos clássicos Pokémon, Kanto/Johto/Hoenn/Sinnoh, trocas e batalhas online, emulador otimizado e guia de instalação — R$ 255 em bônus incluídos"
          className="mx-auto mt-8 w-full max-w-sm rounded-3xl border-2 border-surface shadow-[0_6px_0_0_var(--aqua-deep)]"
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