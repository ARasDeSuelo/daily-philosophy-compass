import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getEscuela } from "@/content/taxonomy";
import { postsByEscuela } from "@/content/posts";
import { PostCard } from "@/components/site/PostCard";
import { Breadcrumbs } from "@/components/site/PageHeader";
import { breadcrumbLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/escuelas/$escuela")({
  loader: ({ params }) => {
    if (!getEscuela(params.escuela)) throw notFound();
    return { escuela: params.escuela };
  },
  head: ({ params }) => {
    const e = getEscuela(params.escuela);
    if (!e) return { meta: [{ title: "Escuela no encontrada" }, { name: "robots", content: "noindex" }] };
    return {
      ...seo({ title: `${e.label}: qué es y cómo aplicarlo hoy`, description: `${e.description} Ensayos sobre ${e.label.toLowerCase()} (${e.thinker}) aplicados a problemas modernos.`.slice(0, 160), path: `/escuelas/${e.slug}` }),
      scripts: [breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Escuelas", path: "/escuelas" }, { name: e.label, path: `/escuelas/${e.slug}` }])],
    };
  },
  component: EscuelaPage,
});

function EscuelaPage() {
  const { escuela } = Route.useLoaderData();
  const e = getEscuela(escuela)!;
  const list = postsByEscuela(escuela);
  return (
    <>
      <header className="mx-auto max-w-3xl px-5 pb-10 pt-10">
        <Breadcrumbs items={[{ label: "Escuelas", to: "/escuelas" }, { label: e.label }]} />
        <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground md:text-5xl">{e.label}</h1>
        <p className="mt-2 text-sm uppercase tracking-wider text-primary">{e.thinker}</p>
        <p className="mt-5 font-serif text-lg leading-relaxed text-muted-foreground">{e.description}</p>
      </header>
      <div className="mx-auto max-w-6xl px-5">
        {list.length === 0 ? (
          <p className="rounded-2xl bg-secondary p-8 text-center text-muted-foreground">
            Pronto publicaremos ensayos de esta escuela. Mientras tanto, <Link to="/ensayos" className="text-primary underline">explora el archivo</Link>.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        )}
      </div>
    </>
  );
}
