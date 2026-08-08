import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const compras = [
  { nome: "Lucas M.", cidade: "São Paulo, SP", plano: "Plano Premium" },
  { nome: "Rafael S.", cidade: "Belo Horizonte, MG", plano: "Plano Premium" },
  { nome: "Bruno A.", cidade: "Curitiba, PR", plano: "Plano Básico" },
  { nome: "Thiago P.", cidade: "Rio de Janeiro, RJ", plano: "Plano Premium" },
  { nome: "Camila R.", cidade: "Porto Alegre, RS", plano: "Plano Premium" },
  { nome: "Diego F.", cidade: "Salvador, BA", plano: "Plano Premium" },
  { nome: "Marcos L.", cidade: "Fortaleza, CE", plano: "Plano Básico" },
  { nome: "Juliana C.", cidade: "Recife, PE", plano: "Plano Premium" },
  { nome: "Vinícius T.", cidade: "Goiânia, GO", plano: "Plano Premium" },
  { nome: "Felipe N.", cidade: "Campinas, SP", plano: "Plano Premium" },
];

export function SalesNotifications() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    let hide: ReturnType<typeof setTimeout>;

    const show = () => {
      setVisible(true);
      hide = setTimeout(() => {
        setVisible(false);
        setIndex((i) => (i + 1) % compras.length);
      }, 6000);
    };

    const first = setTimeout(show, 8000);
    const loop = setInterval(show, 35000);

    return () => {
      clearTimeout(first);
      clearTimeout(hide);
      clearInterval(loop);
    };
  }, [closed]);

  if (closed) return null;

  const c = compras[index] ?? compras[0]!;

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-24 left-1/2 z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 transition-all duration-300 sm:bottom-6 sm:left-6 sm:translate-x-0 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border-2 border-navy bg-surface p-3 pr-9 shadow-[0_6px_0_0_var(--navy)]">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-poke-yellow">
          <CheckCircle2 className="size-5 text-navy" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-[13px] text-navy uppercase">
            {c.nome} · {c.cidade}
          </p>
          <p className="truncate text-[12px] font-semibold text-body">
            acabou de comprar o <strong className="text-poke-red">{c.plano}</strong>
          </p>
        </div>
        <button
          type="button"
          aria-label="Fechar notificação"
          onClick={() => setClosed(true)}
          className="absolute top-2 right-2 text-navy/50 transition-colors hover:text-navy"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
