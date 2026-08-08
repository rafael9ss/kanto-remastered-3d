import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Recebe } from "@/components/landing/Recebe";
import { Nostalgia } from "@/components/landing/Nostalgia";
import { ProvaSocial } from "@/components/landing/ProvaSocial";
import { Bonus } from "@/components/landing/Bonus";
import { Oferta } from "@/components/landing/Oferta";
import { Garantia } from "@/components/landing/Garantia";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/ui";

const title = "Pokémon 3D Remastered 2026 — Red, Blue e Yellow em 3D";
const description =
  "Reviva Pokémon Red, Blue e Yellow com visual remasterizado em 3D no Android, iOS e PC. Instalação em minutos, 5 bônus e garantia de 14 dias.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="min-h-screen bg-ink font-sans text-cream antialiased">
      <Hero />
      <Recebe />
      <Nostalgia />
      <ProvaSocial />
      <Bonus />
      <Oferta />
      <Garantia />
      <Faq />

      <footer className="border-t border-cream/10 bg-ink px-5 py-10 text-center">
        <p className="font-display text-sm text-cream uppercase">Pokémon 3D Remastered 2026</p>
        <p className="mt-2 text-sm text-cream-dim">
          Red. Blue. Yellow. A mesma nostalgia. Uma nova experiência.
        </p>
      </footer>

      {/* CTA fixo mobile */}
      <div className="sticky bottom-0 z-40 border-t border-cream/10 bg-ink/95 p-3 backdrop-blur sm:hidden">
        <Cta className="py-4 text-base">Quero reviver Pokémon em 3D</Cta>
      </div>
    </main>
  );
}
