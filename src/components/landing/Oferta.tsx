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
}: {
  href: string;
  children: React.ReactNode;
  tone: "yellow" | "red";
}) {
  return (
    <a
      href={href}
      className={cn(
        "block w-full rounded-full border-2 border-navy px-6 py-5 text-center font-display text-base uppercase shadow-[0_6px_0_0_var(--navy)] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_var(--navy)] sm:text-lg",
        tone === "yellow" ? "bg-poke-yellow text-navy" : "bg-poke-red text-surface",
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

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Básico */}
        <div className="rounded-3xl border-2 border-navy bg-surface p-6 shadow-[0_6px_0_0_var(--navy)]">
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
        <div className="relative rounded-3xl border-4 border-poke-yellow bg-surface p-6 shadow-[0_8px_0_0_var(--navy)]">
          <span className="absolute -top-4 left-6 rounded-full border-2 border-navy bg-poke-red px-3 py-1 text-[11px] font-black tracking-wide text-surface uppercase">
            Mais completo
          </span>
          <h3 className="font-display text-xl text-navy uppercase">Plano Premium</h3>
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

          <p className="mt-6 text-center font-display text-lg text-poke-red uppercase">
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

      <div className="mt-10">
        <Seals />
      </div>
    </Section>
  );
}
