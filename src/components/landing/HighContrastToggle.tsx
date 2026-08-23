import { useEffect, useState } from "react";

const STORAGE_KEY = "pkm-high-contrast";

export function HighContrastToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    setOn(document.documentElement.classList.contains("high-contrast"));
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.documentElement.classList.toggle("high-contrast", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    } catch {
      /* armazenamento indisponível */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label="Ativar modo de alto contraste"
      title="Alto contraste"
      className="fixed right-3 bottom-3 z-50 flex min-h-11 min-w-11 items-center gap-2 rounded-full border-2 border-navy bg-poke-yellow px-4 py-2 text-[11px] font-black tracking-wide text-navy uppercase shadow-[0_4px_0_0_var(--navy)]"
    >
      <span aria-hidden="true">◑</span>
      <span>{on ? "Contraste alto: on" : "Alto contraste"}</span>
    </button>
  );
}
