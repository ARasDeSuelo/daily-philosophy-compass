import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { getTema } from "@/content/taxonomy";
import { postsByTema } from "@/content/posts";
import { PostCard } from "@/components/site/PostCard";
import { Breadcrumbs } from "@/components/site/PageHeader";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/temas/$tema")({
  loader: ({ params }) => {
    if (!getTema(params.tema)) throw notFound();
    return { tema: params.tema };
  },
  head: ({ params }) => {
    const t = getTema(params.tema);
    if (!t) return { meta: [{ title: "Tema no encontrado" }, { name: "robots", content: "noindex" }] };
    return {
      ...seo({ title: `${t.label}: ensayos de filosofía práctica`, description: `${t.description} Ensayos filosóficos sobre ${t.label.toLowerCase()} con ideas aplicables a tu vida diaria.`, path: `/temas/${t.slug}` }),
      scripts: [breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Temas", path: "/temas" }, { name: t.label, path: `/temas/${t.slug}` }])],
    };
  },
  component: TemaPage,
});

function TemaPage() {
  const { tema } = Route.useLoaderData();
  const t = getTema(tema)!;
  const list = postsByTema(tema);
  return (
    <div style={{ "--tema-color": t.color } as CSSProperties}>
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-10">
        <Breadcrumbs items={[{ label: "Temas", to: "/temas" }, { label: t.label }]} />
        <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground md:text-5xl">{t.label}</h1>
        <p className="mt-5 font-serif text-lg leading-relaxed text-muted-foreground">{t.intro}</p>
      </header>
      <div className="mx-auto max-w-6xl px-5">
        {list.length === 0 ? (
          <p className="rounded-2xl bg-secondary p-8 text-center text-muted-foreground">
            Todavía no hay ensayos en este tema. Mientras tanto, <Link to="/ensayos" className="text-primary underline">explora el archivo</Link>.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        )}
      </div>
    </div>
  );
}
