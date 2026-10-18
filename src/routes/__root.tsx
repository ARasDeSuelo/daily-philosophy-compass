import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { adsenseEnabled, site } from "@/config/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SearchDialog } from "@/components/site/SearchDialog";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl font-semibold text-primary">404</p>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-foreground">Esta página no existe</h1>
        <p className="mt-2 text-muted-foreground">Quizá se movió, o quizá nunca estuvo. Ambas cosas son muy filosóficas.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">La página no se ha cargado</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo ha fallado. Prueba a recargar o vuelve al inicio.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Reintentar</button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm">Inicio</a>
        </div>
      </div>
    </div>
  );
}

const websiteLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: site.name, url: `https://${site.domain}/`, inLanguage: "es", description: site.description },
    { "@type": "Organization", name: site.name, url: `https://${site.domain}/` },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const meta: Record<string, string>[] = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: site.locale },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#fbf9f5" },
    ];
    if (site.googleVerification) meta.push({ name: "google-site-verification", content: site.googleVerification });
    if (adsenseEnabled()) meta.push({ name: "google-adsense-account", content: site.adsense.publisherId });
    const scripts: { src?: string; async?: boolean; crossOrigin?: "anonymous"; type?: string; children?: string; "data-goatcounter"?: string }[] = [
      { type: "application/ld+json", children: JSON.stringify(websiteLd) },
    ];
    if (adsenseEnabled())
      scripts.push({
        src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsense.publisherId}`,
        async: true,
        crossOrigin: "anonymous",
      });
    if (site.analytics.goatcounter)
      scripts.push({ src: "https://gc.zgo.at/count.js", async: true, "data-goatcounter": `https://${site.analytics.goatcounter}.goatcounter.com/count` });
    return {
      meta,
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "alternate", type: "application/rss+xml", title: site.name, href: "/feed.xml" },
      ],
      scripts,
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
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
  const { queryClient } = Route.useRouteContext();
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA")) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <SiteHeader onSearch={() => setSearchOpen(true)} />
      <main id="contenido">
        <Outlet />
      </main>
      <SiteFooter />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </QueryClientProvider>
  );
}
