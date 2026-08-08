import { cn } from "@/lib/utils";

export function Cta({
  href = "#oferta",
  children,
  className,
  tone = "yellow",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "yellow" | "red";
}) {
  return (
    <a
      href={href}
      className={cn(
        "block w-full rounded-2xl px-6 py-5 text-center font-display text-lg leading-tight tracking-wide uppercase shadow-[0_10px_0_0_rgba(0,0,0,0.35)] transition-transform active:translate-y-1 active:shadow-[0_4px_0_0_rgba(0,0,0,0.35)] sm:text-xl",
        tone === "yellow"
          ? "bg-poke-yellow text-ink hover:brightness-105"
          : "bg-poke-red text-cream hover:brightness-110",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold tracking-[0.25em] text-poke-yellow uppercase">
      {children}
    </p>
  );
}

export function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display text-3xl leading-[1.05] text-cream uppercase sm:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-cream-dim">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-poke-yellow text-[11px] font-black text-ink">
        ✓
      </span>
      <span className="text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export function Price({ from, to }: { from: string; to: string }) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-ink p-5 text-center">
      <p className="text-sm text-cream-dim">
        De <span className="line-through">{from}</span> por apenas
      </p>
      <p className="font-display text-4xl text-poke-yellow sm:text-5xl">{to}</p>
    </div>
  );
}

export function Seals() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold tracking-wide text-cream-dim uppercase">
      <li className="flex items-center gap-2">
        <span className="text-poke-yellow">🔒</span> Compra 100% segura
      </li>
      <li className="flex items-center gap-2">
        <span className="text-poke-yellow">🛡️</span> Garantia de 14 dias
      </li>
      <li className="flex items-center gap-2">
        <span className="text-poke-yellow">📱</span> Android · iOS · PC
      </li>
    </ul>
  );
}
