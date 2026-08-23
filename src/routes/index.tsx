import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { Hero } from "@/components/landing/Hero";
import { Recebe } from "@/components/landing/Recebe";
import { Nostalgia } from "@/components/landing/Nostalgia";
import { ProvaSocial } from "@/components/landing/ProvaSocial";
import { Bonus } from "@/components/landing/Bonus";
import { Oferta } from "@/components/landing/Oferta";
import { Garantia } from "@/components/landing/Garantia";
import { Faq } from "@/components/landing/Faq";
import { HighContrastToggle } from "@/components/landing/HighContrastToggle";

import logoUrl from "@/assets/media/logo-288.webp";

const SalesNotifications = lazy(() =>
  import("@/components/landing/SalesNotifications").then((module) => ({
    default: module.SalesNotifications,
  })),
);

const title = "Pokémon 3D Remastered 2026 — Red, Blue e Yellow em 3D";
const description =
  "Reviva Pokémon Red, Blue e Yellow com visual remasterizado em 3D no Android e PC. Instalação em minutos, 5 bônus e garantia de 14 dias.";

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
    links: [
      { rel: "preload", as: "image", href: logoUrl, fetchPriority: "high" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [notificationsReady, setNotificationsReady] = useState(false);

  useEffect(() => {
    const load = () => setNotificationsReady(true);
    const idle = window.requestIdleCallback?.(load, { timeout: 5000 });
    const timeout = idle === undefined ? window.setTimeout(load, 3500) : undefined;

    return () => {
      if (idle !== undefined) window.cancelIdleCallback?.(idle);
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="min-h-dvh bg-surface-2 font-sans text-body antialiased">
      <Hero />
      <Recebe />
      <Nostalgia />
      <ProvaSocial />
      <Bonus />
      <Oferta />
      <Garantia />
      <Faq />

      <footer className="bg-navy px-5 py-10 text-center">
        <p className="font-display text-sm text-surface uppercase">Pokémon 3D Remastered 2026</p>
        <p className="mt-2 text-sm text-surface/90">
          Red. Blue. Yellow. A mesma nostalgia. Uma nova experiência.
        </p>
      </footer>


      {notificationsReady ? (
        <Suspense fallback={null}>
          <SalesNotifications />
        </Suspense>
      ) : null}
    </main>
  );
}

