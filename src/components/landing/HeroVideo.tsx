import { useEffect } from "react";

const VSL_SCRIPT_SRC = "https://vsl-studio.netlify.app/e.js";
const VSL_SCRIPT_ID = "vsl-studio-embed";

export function HeroVideo() {
  useEffect(() => {
    if (document.getElementById(VSL_SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = VSL_SCRIPT_ID;
    script.src = VSL_SCRIPT_SRC;
    script.async = true;
    document.head.append(script);
  }, []);

  return (
    <div className="relative mx-auto mt-8 mb-6 w-full max-w-[380px] overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] bg-[#1a1a1a] p-1.5 shadow-2xl">
      <div className="relative w-full overflow-hidden rounded-xl border-[1.5px] border-[#2a2a2a] bg-black">
        <div data-vsl="pokemon" />
      </div>
    </div>
  );
}
