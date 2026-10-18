import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { posts } from "@/content/posts";
import { escuelas, temas } from "@/content/taxonomy";
import { PostCard } from "@/components/site/PostCard";
import { AdSlot } from "@/components/site/AdSlot";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const h = seo({
      title: `${site.name}: filosofía aplicada a problemas de hoy`,
      description: site.description,
      path: "/",
    });
    return { ...h, meta: [{ title: `${site.name} — ${site.tagline}` }, ...h.meta.slice(1)] };
  },
  component: Home,
});

function Home() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 pb-10 pt-16 text-center md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Ensayos de filosofía práctica</p>
        <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl">
          Filosofía para los problemas <em className="text-primary">de este lunes</em>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          El burnout, el móvil, la soledad, el dinero, las decisiones que no te dejan dormir. Leemos a estoicos, cínicos, existencialistas y maestros zen para pensarlos a ras de suelo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {escuelas.map((e) => (
            <Link key={e.slug} to="/escuelas/$escuela" params={{ escuela: e.slug }} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              {e.label}
            </Link>
          ))}
        </div>
      </section>

      {featured && (
        <section aria-label="Ensayo destacado" className="mx-auto max-w-5xl px-5">
          <PostCard post={featured} large />
        </section>
      )}

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl font-semibold text-foreground">Últimos ensayos</h2>
          <Link to="/ensayos" className="text-sm text-primary hover:underline">Ver todos →</Link>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        <AdSlot kind="rect" />
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <h2 className="font-serif text-3xl font-semibold text-foreground">Explora por tema</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {temas.map((t) => (
            <Link
              key={t.slug}
              to="/temas/$tema"
              params={{ tema: t.slug }}
              style={{ "--tema-color": t.color } as CSSProperties}
              className="card-soft border-t-4 border-tema p-5"
            >
              <p className="font-serif text-lg font-semibold text-foreground">{t.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
