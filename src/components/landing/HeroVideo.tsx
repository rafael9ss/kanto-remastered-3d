import { useEffect, useId, useRef, useState } from "react";
import heroPoster from "@/assets/image-2.png.asset.json";

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
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const playerId = `youtube-hero-${useId().replace(/[^a-z0-9]/gi, "")}`;
  const [isReady, setIsReady] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let player: YouTubePlayer | undefined;

    void loadYouTubeApi()
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

    return () => {
      disposed = true;
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
    <div className="relative mx-auto mt-8 aspect-[9/16] w-full max-w-[22rem] overflow-hidden rounded-3xl border-4 border-navy bg-navy shadow-[0_10px_0_0_rgba(0,0,0,0.25)] sm:max-w-[25rem]">
      <img
        src={heroPoster.url}
        alt="Prévia do Pokémon Red, Blue e Yellow remasterizados em 3D"
        className="absolute inset-0 size-full object-cover opacity-60"
        width={1500}
        height={600}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="(max-width: 640px) calc(100vw - 40px), 400px"
      />

      {!failed ? <div id={playerId} ref={mountRef} className="youtube-hero-player absolute inset-0" /> : null}

      {!soundEnabled && !failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-navy/20 p-5">
          <button
            type="button"
            onClick={enableSound}
            disabled={!isReady}
            aria-label="Ativar o som do vídeo"
            className="rounded-full border-2 border-navy bg-poke-yellow px-5 py-3 font-display text-xs tracking-wide text-navy uppercase shadow-[0_5px_0_0_var(--navy)] transition-transform hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-surface focus-visible:outline-none disabled:cursor-wait disabled:opacity-80 sm:text-sm"
          >
            {isReady ? "Ativar som" : "Carregando vídeo..."}
          </button>
        </div>
      ) : null}

      {failed ? (
        <p className="absolute inset-x-5 bottom-5 rounded-2xl bg-navy/85 px-4 py-3 text-center text-xs font-bold text-surface">
          O vídeo não pôde ser carregado agora.
        </p>
      ) : null}
    </div>
  );
}
