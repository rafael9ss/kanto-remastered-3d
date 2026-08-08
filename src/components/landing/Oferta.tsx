import { Section, Eyebrow, Title, Check, Price, Seals } from "./ui";
import { CHECKOUT_BASICO, CHECKOUT_PREMIUM, bonus } from "./data";
import { cn } from "@/lib/utils";

const base = [
  "Pokémon Red Remastered 3D",
  "Pokémon Blue Remastered 3D",
  "Pokémon Yellow Remastered 3D",
  "Mod 3D aplicado aos 3 jogos",
  "Versões para Android, iOS e PC",
  "Tutorial rápido de instalação",
];

function CheckoutButton({
  href,
  children,
  tone,
  pulse = true,
}: {
  href: string;
  children: React.ReactNode;
  tone: "yellow" | "red" | "muted";
  pulse?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "block w-full rounded-full border-2 px-6 py-5 text-center font-display text-base uppercase transition-transform hover:-translate-y-0.5 active:translate-y-1 sm:text-lg",
        pulse && "animate-cta-pulse motion-reduce:animate-none",
        tone === "muted"
          ? "border-navy/30 bg-transparent py-3.5 text-sm text-navy/60 hover:text-navy sm:text-base"
          : "border-navy shadow-[0_6px_0_0_var(--navy)] active:shadow-[0_2px_0_0_var(--navy)]",
        tone === "yellow" && "bg-poke-yellow text-navy",
        tone === "red" && "bg-poke-red text-surface",
      )}
    >
      {children}
    </a>
  );
}

export function Oferta() {
  return (
    <Section id="oferta" variant="light">
      <div className="text-center">
        <Eyebrow>Oferta</Eyebrow>
        <Title onAqua={false}>Escolha seu acesso ao Pokémon 3D Remastered</Title>
        <div className="mt-5 space-y-1 text-[15px] font-semibold text-body">
          <p>Acesso digital após a compra.</p>
          <p>Versões para Android, iOS e PC.</p>
          <p>Garantia incondicional de 14 dias.</p>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-8">
        {/* Básico */}
        <div className="order-2 rounded-3xl border-2 border-navy bg-surface p-6 opacity-95 shadow-[0_6px_0_0_var(--navy)] lg:order-1 lg:mt-8">
          <h3 className="font-display text-xl text-navy uppercase">Plano Básico</h3>
          <p className="mt-1 text-sm font-semibold text-body">Pokémon 3D Remastered</p>
          <ul className="mt-6 grid gap-3">
            {base.map((i) => (
              <Check key={i}>{i}</Check>
            ))}
            <li className="flex items-start gap-3 text-body">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-poke-red text-[11px] font-black text-surface">
                ✕
              </span>
              <span className="text-[15px]">Sem Atualizações</span>
            </li>
          </ul>
          <div className="mt-6">
            <Price from="R$ 97" to="R$ 17,90" />
          </div>
          <div className="mt-5">
            <CheckoutButton href={CHECKOUT_BASICO} tone="red">
              Quero o plano básico
            </CheckoutButton>
          </div>
        </div>

        {/* Premium */}
        <div className="relative order-1 rounded-[2rem] border-4 border-navy bg-poke-yellow p-2 shadow-[0_14px_0_0_var(--navy)] lg:order-2 lg:-mt-4 lg:scale-[1.03]">
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

            <p className="mt-6 rounded-2xl border-2 border-navy bg-poke-red px-4 py-3 text-center font-display text-base text-surface uppercase sm:text-lg">
              R$ 255 em bônus incluídos
            </p>

            <div className="mt-4">
              <Price from="R$ 197" to="R$ 29,90" />
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-body">Pagamento único.</p>

            <div className="mt-5">
              <CheckoutButton href={CHECKOUT_PREMIUM} tone="yellow">
                Quero o plano premium
              </CheckoutButton>
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-body">
              Garantia incondicional de 14 dias.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Seals />
      </div>
    </Section>
  );
}
