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
        "block w-full animate-cta-pulse rounded-full border-2 border-navy px-6 py-5 text-center font-display text-base leading-tight tracking-wide uppercase shadow-[0_6px_0_0_var(--navy)] transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_var(--navy)] motion-reduce:animate-none sm:text-xl",
        tone === "yellow" ? "bg-poke-yellow text-navy" : "bg-poke-red text-surface",
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
  variant = "aqua",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "aqua" | "light";
}) {
  return (
    <section
      id={id}
      className={cn(
        "landing-section px-5 py-16 sm:py-24",
        variant === "aqua" ? "bg-kanto" : "bg-surface-2",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-block rounded-full bg-poke-yellow px-4 py-1.5 text-[11px] font-black tracking-[0.18em] text-navy uppercase shadow-[0_3px_0_0_var(--navy)]">
      {children}
    </p>
  );
}

export function Title({
  children,
  className,
  onAqua = true,
}: {
  children: React.ReactNode;
  className?: string;
  onAqua?: boolean;
}) {
  return (
    <h2
      className={cn(
        "font-display text-3xl leading-[1.05] uppercase sm:text-5xl",
        onAqua ? "text-surface drop-shadow-[0_3px_0_var(--aqua-deep)]" : "text-navy",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-body">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-poke-blue text-[11px] font-black text-surface">
        ✓
      </span>
      <span className="text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export function Price({ from, to }: { from: string; to: string }) {
  return (
    <div className="rounded-3xl border-2 border-navy bg-poke-yellow p-5 text-center">
      <p className="text-sm font-semibold text-navy/80">
        De <span className="line-through">{from}</span> por apenas
      </p>
      <p className="font-display text-4xl text-navy sm:text-5xl">{to}</p>
    </div>
  );
}

export function Seals({ light = false }: { light?: boolean }) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 text-[11px] font-black tracking-wide uppercase",
        light ? "text-navy" : "text-navy",
      )}
    >
      {[
        { i: "🔒", t: "Compra 100% segura" },
        { i: "🛡️", t: "Garantia de 14 dias" },
        { i: "📱", t: "Android · PC" },
      ].map((s) => (
        <li
          key={s.t}
          className="flex items-center gap-2 rounded-full border-2 border-navy bg-surface px-3 py-1.5"
        >
          <span>{s.i}</span> {s.t}
        </li>
      ))}
    </ul>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border-2 border-navy bg-surface p-5 shadow-[0_6px_0_0_var(--navy)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
