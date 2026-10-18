import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/content/posts";
import { PostCard } from "@/components/site/PostCard";
import { PageHeader } from "@/components/site/PageHeader";
import { AdSlot } from "@/components/site/AdSlot";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/ensayos/")({
  head: () =>
    seo({
      title: "Todos los ensayos de filosofía aplicada",
      description: "Archivo completo de ensayos de A ras de suelo: estoicismo, zen, existencialismo y más, aplicados al trabajo, la ansiedad, el dinero y la soledad.",
      path: "/ensayos",
    }),
  component: () => (
    <>
      <PageHeader eyebrow="Archivo" title="Todos los ensayos">
        Ideas antiguas para problemas de hoy, ordenadas de la más reciente a la más antigua.
      </PageHeader>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => <PostCard key={p.slug} post={p} />)}
      </div>
      <div className="mx-auto max-w-6xl px-5"><AdSlot kind="rect" /></div>
    </>
  ),
});
