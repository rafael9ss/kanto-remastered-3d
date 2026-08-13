import { useEffect, useId, useRef, useState } from "react";

const YOUTUBE_VIDEO_ID = "h25glbS2aq4";
const YOUTUBE_API_ID = "youtube-iframe-api";

type YouTubePlayer = {
  destroy: () => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  playVideo: () => void;
};

type YouTubeApi = {
  Player: new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars: Record<string, number | string>;
      events: {
        onReady: (event: { target: YouTubePlayer }) => void;
        onError: () => void;
      };
    },
  ) => YouTubePlayer;
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<YouTubeApi> | undefined;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise<YouTubeApi>((resolve, reject) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    const resolveApi = () => {
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error("YouTube IFrame Player API indisponível."));
    };

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolveApi();
    };

    const existingScript = document.getElementById(YOUTUBE_API_ID) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", resolveApi, { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Falha ao carregar o YouTube.")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = YOUTUBE_API_ID;
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("Falha ao carregar o YouTube."));
    document.head.append(script);
  });

  return youtubeApiPromise;
}

export function HeroVideo() {
  const frameRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const playerId = `youtube-hero-${useId().replace(/[^a-z0-9]/gi, "")}`;
  const [isReady, setIsReady] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let player: YouTubePlayer | undefined;
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const startPlayer = () => void loadYouTubeApi()
      .then((YT) => {
        if (disposed || !mountRef.current) return;

        player = new YT.Player(mountRef.current, {
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            controls: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
          events: {
            onReady: ({ target }) => {
              if (disposed) return;
              playerRef.current = target;
              frameRef.current
                ?.querySelector("iframe")
                ?.setAttribute("title", "Vídeo promocional do Pokémon 3D Remastered");
              target.mute();
              target.setVolume(0);
              target.playVideo();
              setIsReady(true);
            },
            onError: () => {
              if (!disposed) setFailed(true);
            },
          },
        });
      })
      .catch(() => {
        if (!disposed) setFailed(true);
      });

    // Prioriza o conteúdo e o CTA antes de iniciar o player, que é o recurso
    // externo mais pesado da primeira tela.
    idleId = window.requestIdleCallback?.(startPlayer, { timeout: 1800 });
    if (idleId === undefined) timeoutId = window.setTimeout(startPlayer, 900);

    return () => {
      disposed = true;
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      player?.destroy();
      playerRef.current = null;
    };
  }, [playerId]);

  const enableSound = () => {
    const player = playerRef.current;
    if (!player || soundEnabled) return;

    player.unMute();
    player.setVolume(100);
    player.playVideo();
    setSoundEnabled(true);
  };

  return (
    <div className="relative mx-auto mt-8 mb-6 w-full max-w-[380px] overflow-hidden rounded-2xl border-[3px] border-[#1a1a1a] bg-[#1a1a1a] p-1.5 shadow-2xl">
      <div className="relative w-full overflow-hidden rounded-xl border-[1.5px] border-[#2a2a2a] bg-black">
        <div ref={frameRef} className="youtube-hero-player relative aspect-[3/4] overflow-hidden">
          {!failed ? <div id={playerId} ref={mountRef} /> : null}

          {!failed ? <div className="absolute inset-0 z-20 cursor-pointer bg-transparent" aria-hidden="true" /> : null}

          {!soundEnabled && !failed ? (
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
              <button
                type="button"
                onClick={enableSound}
                disabled={!isReady}
                aria-label="Ativar o som do vídeo"
                className="sound-prompt flex flex-col items-center gap-2 rounded-[15px] border-2 border-white/20 bg-[#ef4444] p-6 text-white transition-transform hover:scale-[1.03] focus-visible:ring-4 focus-visible:ring-white/70 focus-visible:outline-none disabled:cursor-wait disabled:opacity-90"
              >
                <span className="font-display text-xs font-black tracking-widest uppercase">Clique aqui</span>
                <span className="rounded-full bg-white/20 p-3" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                    <path d="m23 9-6 6M17 9l6 6" />
                  </svg>
                </span>
                <span className="font-display text-[10px] font-black tracking-tight uppercase">
                  Para ativar o som
                </span>
              </button>
            </div>
          ) : null}

          {failed ? (
            <p className="absolute inset-0 flex items-center justify-center bg-black px-6 text-center text-xs font-bold text-white">
              O vídeo não pôde ser carregado agora.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

