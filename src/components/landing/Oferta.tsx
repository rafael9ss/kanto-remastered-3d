import { useState } from "react";
import { Section, Eyebrow, Title, Check, Price, Seals } from "./ui";
import {
  CHECKOUT_BASICO,
  CHECKOUT_PREMIUM,
  CHECKOUT_UPSELL_PREMIUM,
  SHOW_PLANO_BASICO,
  bonus,
} from "./data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const base = [
  "Pokémon Red Remastered 3D",
  "Pokémon Blue Remastered 3D",
  "Pokémon Yellow Remastered 3D",
  "Mod 3D aplicado aos 3 jogos",
  "Versões para Android e PC",
  "Tutorial rápido de instalação",
];

function CheckoutButton({
  href,
  children,
  tone,
  pulse = true,
  onPress,
}: {
  href?: string;
  children: React.ReactNode;
  tone: "yellow" | "red" | "green" | "muted";
  pulse?: boolean;
  onPress?: () => void;
}) {
  const className = cn(
    "block w-full rounded-full border-2 px-6 py-5 text-center font-display text-base uppercase sm:text-lg",
    pulse && "animate-cta-pulse",
    tone === "muted"
      ? "border-navy/30 bg-transparent py-3.5 text-sm text-navy/80 hover:text-navy sm:text-base"
      : "cta-shine border-navy shadow-[0_6px_0_0_var(--navy)] active:shadow-[0_2px_0_0_var(--navy)]",

    tone === "yellow" && "bg-poke-yellow text-navy",
    tone === "red" && "bg-poke-red text-surface",
    tone === "green" && "bg-poke-green-deep text-surface",
  );

  if (onPress) {
    return (
      <button type="button" onClick={onPress} suppressHydrationWarning className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} suppressHydrationWarning className={className}>
      {children}
    </a>
  );
}

export function Oferta() {
  const [upsellOpen, setUpsellOpen] = useState(false);

  return (
    <Section id="oferta" variant="light">
      <div className="text-center">
        <Eyebrow>Oferta</Eyebrow>
        <Title onAqua={false}>Escolha seu acesso ao Pokémon 3D Remastered</Title>
        <div className="mt-5 space-y-1 text-[15px] font-semibold text-body">
          <p>Acesso digital após a compra.</p>
          <p>Versões para Android e PC.</p>
          <p>Garantia incondicional de 14 dias.</p>
        </div>
      </div>

      <div
        className={cn(
          "mt-12 grid gap-10 lg:items-start lg:gap-8",
          SHOW_PLANO_BASICO ? "lg:grid-cols-[1fr_1.25fr]" : "mx-auto max-w-2xl",
        )}
      >
        {/* Básico */}
        {SHOW_PLANO_BASICO ? (
        <div className="order-1 rounded-3xl border border-navy/20 bg-surface/60 p-5 lg:mt-14 lg:scale-95">
          <h3 className="font-display text-base text-navy uppercase">Plano Básico</h3>
          <p className="mt-1 text-xs font-semibold text-body">Pokémon 3D Remastered</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {base.map((i) => (
              <Check key={i}>{i}</Check>
            ))}
            <li className="flex items-start gap-3 text-body">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-poke-red text-[11px] font-black text-surface">
                ✕
              </span>
              <span className="text-[14px]">Sem Atualizações</span>
            </li>
          </ul>
          <div className="mt-5">
            <Price from="R$ 97" to="R$ 14,90" />
          </div>
          <div className="mt-4">
            <CheckoutButton tone="green" pulse={false} onPress={() => setUpsellOpen(true)}>
              Quero o plano básico
            </CheckoutButton>
          </div>
          <div className="mt-5 flex flex-col items-center gap-1 rounded-2xl border-2 border-dashed border-poke-red/60 bg-poke-yellow/25 px-4 py-3 text-center">
            <p className="font-display text-sm uppercase text-navy sm:text-base">
              Existe uma oferta melhor abaixo
            </p>
            <p className="text-[13px] font-semibold text-body">
              Veja o Plano Premium com todos os bônus
            </p>
            <span aria-hidden className="mt-1 flex items-end justify-center gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="animate-bounce text-2xl leading-none text-poke-red sm:text-3xl"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  ▼
                </span>
              ))}
            </span>
          </div>
        </div>
        ) : null}

        {/* Premium */}
        <div className="relative order-2 rounded-[2rem] border-4 border-navy bg-poke-yellow p-2 shadow-[0_14px_0_0_var(--navy)] lg:-mt-4 lg:scale-[1.03]">
          <span className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded-full border-2 border-navy bg-poke-red px-5 py-2 text-[11px] font-black tracking-[0.14em] text-surface uppercase shadow-[0_4px_0_0_var(--navy)] sm:text-xs">
            ★ Mais completo · Mais vendido
          </span>

          <div className="rounded-[1.6rem] border-2 border-navy bg-surface p-6 pt-8">
            <h3 className="font-display text-2xl text-navy uppercase sm:text-3xl">Plano Premium</h3>
            <p className="mt-1 text-sm font-semibold text-body">
              Pokémon 3D Remastered + Pacote Clássico
            </p>

            <p className="mt-6 text-xs font-black tracking-[0.18em] text-poke-blue uppercase">
              Tudo do plano básico
            </p>
            <ul className="mt-3 grid gap-3">
              {base.map((i) => (
                <Check key={i}>{i}</Check>
              ))}
              <Check>Atualizações constantes</Check>
            </ul>

            <p className="mt-6 text-xs font-black tracking-[0.18em] text-poke-blue uppercase">
              + Todos os bônus
            </p>
            <ul className="mt-3 grid gap-3">
              {bonus.map((b) => (
                <Check key={b.titulo}>
                  {b.titulo.replace(/^Bônus \d — /, "")} —{" "}
                  <span className="line-through">{b.valor}</span> ·{" "}
                  <strong className="text-poke-red">GRÁTIS</strong>
                </Check>
              ))}
            </ul>

            <p className="mt-6 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 border-y-2 border-dashed border-navy/30 py-4 text-center font-display text-base uppercase text-navy sm:text-lg">
              <span className="text-poke-red text-2xl sm:text-3xl">R$ 255</span>
              <span>em bônus incluídos</span>
            </p>


            <div className="mt-4">
              <Price from="R$ 197" to="R$ 29,90" />
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-body">Pagamento único.</p>

            <div className="mt-5">
              <CheckoutButton href={CHECKOUT_PREMIUM} tone="green">
                Quero o plano premium
              </CheckoutButton>
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-body">
              Garantia incondicional de 14 dias.
            </p>
          </div>
        </div>
      </div>

      <Dialog open={upsellOpen} onOpenChange={setUpsellOpen}>
        <DialogContent className="max-w-md rounded-[2rem] border-4 border-navy bg-surface p-6">
          <DialogTitle className="text-center font-display text-2xl text-navy uppercase">
            Espera! Leve o Premium por só R$ 19,90
          </DialogTitle>
          <DialogDescription className="text-center text-[15px] font-semibold text-body">
            Por apenas R$ 5 a mais você leva tudo do básico + atualizações constantes + os 5 bônus
            (R$ 255 em bônus).
          </DialogDescription>

          <ul className="mt-1 grid gap-2">
            <Check>Atualizações constantes</Check>
            {bonus.map((b) => (
              <Check key={b.titulo}>{b.titulo.replace(/^Bônus \d — /, "")}</Check>
            ))}
          </ul>

          <div className="mt-2 grid gap-3">
            <CheckoutButton href={CHECKOUT_UPSELL_PREMIUM} tone="green">
              Sim, quero o premium por R$ 19,90
            </CheckoutButton>
            <CheckoutButton href={CHECKOUT_BASICO} tone="muted" pulse={false}>
              Não, continuar com o básico de R$ 14,90
            </CheckoutButton>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-10">
        <Seals />

      </div>
    </Section>
  );
}
