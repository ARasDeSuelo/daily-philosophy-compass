import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { temas } from "@/content/taxonomy";
import { postsByTema } from "@/content/posts";
import { PageHeader } from "@/components/site/PageHeader";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/temas/")({
  head: () =>
    seo({
      title: "Temas: los problemas de hoy vistos con filosofía",
      description: "Diez temas de la vida moderna, del agotamiento laboral al duelo, pensados con filosofía práctica. Elige el que te preocupa y empieza a leer.",
      path: "/temas",
    }),
  component: () => (
    <>
      <PageHeader eyebrow="Temas" title="Los problemas de hoy">
        Empieza por lo que te quita el sueño. Cada tema reúne ensayos de distintas escuelas.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {temas.map((t) => (
          <Link key={t.slug} to="/temas/$tema" params={{ tema: t.slug }} style={{ "--tema-color": t.color } as CSSProperties} className="card-soft border-l-4 border-tema p-6">
            <h2 className="font-serif text-xl font-semibold text-foreground">{t.label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
            <p className="mt-4 text-xs font-medium text-tema">{postsByTema(t.slug).length} ensayos</p>
          </Link>
        ))}
        <Link to="/libros" className="card-soft border-l-4 border-primary p-6">
          <h2 className="font-serif text-xl font-semibold text-foreground">Libros recomendados</h2>
          <p className="mt-2 text-sm text-muted-foreground">Lecturas de filosofía para profundizar en las preguntas de tu vida cotidiana.</p>
          <p className="mt-4 text-xs font-medium text-primary">Explorar la biblioteca →</p>
        </Link>
      </div>
    </>
  ),
});
