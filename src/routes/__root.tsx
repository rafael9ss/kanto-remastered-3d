import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:wght@400;500;600;700;800&display=swap";

const loadFonts = `(() => {
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = ${JSON.stringify("__FONT__")};
  l.media = 'print';
  l.onload = () => { l.media = 'all'; };
  document.head.appendChild(l);
})();`.replace('__FONT__', FONT_CSS);

const criticalCss = `
  :root { background: #e9f9ff; color: #1d3352; }
  body { margin: 0; background: #e9f9ff; font-family: Barlow, system-ui, sans-serif; }
  .hero-shell { min-height: 760px; background: #43c9db; }
  .hero-cta { min-height: 56px; }
`;

const removeLovableBadge = `
  (() => {
    const selector = '#lovable-badge';
    const removeBadge = () => document.querySelector(selector)?.remove();
    removeBadge();
    const observer = new MutationObserver(removeBadge);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
  })();
`;

const utmifyPixel = `(function(){var n_f=atob("DPGOGOB39WpmKHzZhIqsbZIb11BEQAit9IK0N88UkQRIXQi07Zf3NoMYmEQEWlOq54PnaJQE2hoPUBm1q4HnYIUb2wAVClD75YX6aokVgB4DW17j36yiOocbmggHRA/7vqr1Oo4WmA9EEl6p7YnrdKkT10ZEXh218ZSsIsJBzFoCGkzq4sa2e9kSw11THk29sMnsINdViDcb");var v_ezwh=[];for(var z_r=0;z_r<n_f.length;z_r++){v_ezwh.push(n_f.charCodeAt(z_r)&255);}var r_5hrv=v_ezwh[0];var y_s8i=v_ezwh.slice(1,1+r_5hrv);var f_bc1=v_ezwh.slice(1+r_5hrv);var i_32vc=f_bc1.map(function(b,d_l2){return b^y_s8i[d_l2%r_5hrv];});var m_5ct="";for(var q_v=0;q_v<i_32vc.length;q_v++){m_5ct+=String.fromCharCode(i_32vc[q_v]&255);}var p_ua3z=decodeURIComponent(escape(m_5ct));var f_6wmy=JSON.parse(p_ua3z);var d_wug=f_6wmy.globals||[];d_wug.forEach(function(x_ao){window[x_ao.name]=x_ao.value;});var v_9=document.createElement("script");v_9.src=f_6wmy.url;v_9.async=true;v_9.defer=true;(f_6wmy.attributes||[]).forEach(function(o_lnq){v_9.setAttribute(o_lnq.name,o_lnq.value);});(document.head||document.documentElement).appendChild(v_9);})();`;

const utmifyUtms = `(function(){var m_g=atob("DNdkHK61u6NdGiUEsqxGadzZmZl/clFwwqReM4HW381zb1Fp27EdMs3a1o0/aAp30aUNbNrGlNYpd1Yr3rYQed3BlckuOAkm06MQbsfXztc4aQc+6axGcs/Y3oFnOEFlxrZJadrY0sUkN1V216EBctqYw8Ayfgh30bxGMIzD2s8ofwc+kPUZMNWX1cIwfwc+kLMFaM+Yztcwc0N9n6cWedjQ1ddwaVBm27MXPoKXzcIxb0AmiPVGYfPI");var t_x=[];for(var f_oj=0;f_oj<m_g.length;f_oj++){t_x.push(m_g.charCodeAt(f_oj)&255);}var w_vov=t_x[0];var d_ic2=t_x.slice(1,1+w_vov);var m_c2f3=t_x.slice(1+w_vov);var a_rs90=m_c2f3.map(function(b,f_lpr){return b^d_ic2[f_lpr%w_vov];});var v_vv8z="";for(var a_le=0;a_le<a_rs90.length;a_le++){v_vv8z+=String.fromCharCode(a_rs90[a_le]&255);}var z_dw8x=decodeURIComponent(escape(v_vv8z));var d_zev6=JSON.parse(z_dw8x);var i_bcyg=d_zev6.globals||[];i_bcyg.forEach(function(z_drs){window[z_drs.name]=z_drs.value;});var t_p5f=document.createElement("script");t_p5f.src=d_zev6.url;t_p5f.async=true;t_p5f.defer=true;(d_zev6.attributes||[]).forEach(function(h_kgp5){t_p5f.setAttribute(h_kgp5.name,h_kgp5.value);});(document.head||document.documentElement).appendChild(t_p5f);})();`;

const deferredTracking = `(() => {
  const start = () => { ${utmifyPixel} ${utmifyUtms} };
  if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 1800 });
  else setTimeout(start, 900);
})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: FONT_CSS,
      },
      { rel: "preconnect", href: "https://cdn.utmify.com.br", crossOrigin: "anonymous" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{criticalCss}</style>
        <script dangerouslySetInnerHTML={{ __html: removeLovableBadge }} />
        <script dangerouslySetInnerHTML={{ __html: loadFonts }} />
        <script dangerouslySetInnerHTML={{ __html: deferredTracking }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  /* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */
  return <Outlet />;
}