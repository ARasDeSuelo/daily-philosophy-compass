import { createFileRoute, Link } from "@tanstack/react-router";
import { escuelas } from "@/content/taxonomy";
import { postsByEscuela } from "@/content/posts";
import { PageHeader } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/escuelas/")({
  head: () =>
    seo({
      title: "Escuelas filosóficas explicadas con claridad",
      description: "Estoicismo, zen, cinismo, epicureísmo, existencialismo y más: doce escuelas filosóficas explicadas sin jerga y aplicadas a la vida actual.",
      path: "/escuelas",
    }),
  component: () => (
    <>
      <PageHeader eyebrow="Escuelas" title="Doce maneras de mirar">
        Cada escuela es una caja de herramientas distinta. Aquí tienes lo esencial de cada una.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {escuelas.map((e) => (
          <Link key={e.slug} to="/escuelas/$escuela" params={{ escuela: e.slug }} className="card-soft p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">{e.label}</h2>
            <p className="mt-1 text-xs uppercase tracking-wider text-primary">{e.thinker}</p>
            <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
            <p className="mt-4 text-xs text-muted-foreground">{postsByEscuela(e.slug).length} ensayos</p>
          </Link>
        ))}
      </div>
    </>
  ),
});
