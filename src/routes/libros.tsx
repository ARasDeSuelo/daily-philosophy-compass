import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { books } from "@/content/books";
import { seo } from "@/lib/seo";
import reading from "@/assets/books/reading.jpg";

export const Route = createFileRoute("/libros")({
  head: () => seo({
    title: "Libros de filosofía recomendados | A ras de suelo",
    description: "Seis libros de filosofía para pensar tu vida cotidiana: por qué leerlos, por dónde empezar y ensayos relacionados de Epicteto, Epicuro, Camus y más.",
    path: "/libros",
  }),
  component: BooksPage,
});

function BooksPage() {
  return (
    <>
      <header className="mx-auto max-w-6xl px-5 pt-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Biblioteca · Recomendaciones</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">Libros para pensar a ras de suelo</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Del tiempo que se te escapa a las decisiones que no pueden esperar: lecturas para seguir pensando después de un ensayo.</p>
        <img src={reading} alt="Ilustración de un libro abierto y varios libros sin títulos junto a una ventana con vistas a los árboles" width={1200} height={672} fetchPriority="high" className="mt-8 aspect-[3/1] w-full rounded-lg object-cover" />
      </header>
      <section aria-label="Libros recomendados" className="mx-auto mt-12 max-w-6xl px-5">
        <div className="flex items-center gap-3 border-b border-border pb-5">
          <BookOpen className="h-5 w-5 text-primary" aria-hidden />
          <h2 className="font-serif text-2xl font-semibold text-foreground">Seis lecturas, seis puntos de partida</h2>
        </div>
        <div className="grid gap-x-12 md:grid-cols-2">
          {books.map((book, index) => (
            <article key={book.title} className="border-b border-border py-8">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">{book.subject}</p>
                <span className="font-serif text-xl text-muted-foreground" aria-hidden>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">{book.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{book.author} · {book.level}</p>
              <p className="mt-5 leading-relaxed text-foreground">{book.recommendation}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><strong className="font-semibold text-foreground">Por dónde empezar: </strong>{book.startingPoint}</p>
              <Link to="/ensayos/$slug" params={{ slug: book.essaySlug }} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Leer el ensayo relacionado <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}