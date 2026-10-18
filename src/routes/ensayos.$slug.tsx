import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Check, Link2 } from "lucide-react";
import { getPost, readingMinutes, relatedPosts, renderPost } from "@/content/posts";
import { getEscuela, getTema } from "@/content/taxonomy";
import { PostCard } from "@/components/site/PostCard";
import { Breadcrumbs } from "@/components/site/PageHeader";
import { AdSlot } from "@/components/site/AdSlot";
import { site } from "@/config/site";
import { breadcrumbLd, seo } from "@/lib/seo";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/ensayos/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData ? getPost(loaderData.slug) : undefined;
    if (!post) return { meta: [{ title: "Ensayo no encontrado" }, { name: "robots", content: "noindex" }] };
    const tema = getTema(post.tema);
    const h = seo({ title: post.seoTitle, description: post.description, path: `/ensayos/${params.slug}`, type: "article" });
    return {
      ...h,
      meta: [
        ...h.meta,
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: tema?.label ?? "" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "es",
            author: { "@type": "Organization", name: site.author.name },
            publisher: { "@type": "Organization", name: site.name },
            mainEntityOfPage: `https://${site.domain}/ensayos/${post.slug}`,
            articleSection: tema?.label,
          }),
        },
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: tema?.label ?? "Ensayos", path: `/temas/${post.tema}` },
          { name: post.title, path: `/ensayos/${post.slug}` },
        ]),
      ],
    };
  },
  component: PostPage,
});

function useReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return p;
}

function PostPage() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug)!;
  const tema = getTema(post.tema);
  const escuela = getEscuela(post.escuela);
  const { html, toc } = useMemo(() => renderPost(post), [post]);
  const related = relatedPosts(post);
  const progress = useReadingProgress();

  return (
    <article style={{ "--tema-color": tema?.color } as CSSProperties}>
      <div className="reading-progress" style={{ width: `${progress * 100}%` }} aria-hidden />
      <header className="mx-auto max-w-3xl px-5 pt-10">
        <Breadcrumbs
          items={[
            { label: tema?.label ?? "Temas", to: "/temas/$tema", params: { tema: post.tema } },
            { label: post.title },
          ]}
        />
        <div className="mt-6 flex flex-wrap gap-2">
          <Link to="/temas/$tema" params={{ tema: post.tema }} className="chip-solid">{tema?.label}</Link>
          <Link to="/escuelas/$escuela" params={{ escuela: post.escuela }} className="chip">{escuela?.label}</Link>
        </div>
        <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <p className="mt-5 text-sm text-muted-foreground">
          Por {site.author.name} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingMinutes(post)} min de lectura
        </p>
      </header>

      <figure className="mx-auto mt-8 max-w-5xl px-5">
        <img src={post.hero.src} alt={post.hero.alt} width={1200} height={630} className="w-full rounded-2xl object-cover shadow-soft" fetchPriority="high" />
      </figure>

      <div className="mx-auto max-w-3xl px-5">
        <AdSlot kind="banner" />
        {toc.length >= 3 && (
          <nav aria-label="Índice" className="mt-10 rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">En este ensayo</p>
            <ol className="mt-3 space-y-1.5 text-sm">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-foreground hover:text-primary">
                    <span className="mr-2 text-muted-foreground">{i + 1}.</span>{t.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="prose-essay mt-10" dangerouslySetInnerHTML={{ __html: html }} />
        <ShareButtons title={post.title} />
        <aside className="mt-12 flex gap-4 rounded-2xl bg-secondary p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-xl text-primary-foreground">a</div>
          <div>
            <p className="font-serif font-semibold text-foreground">{site.author.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{site.author.bio}</p>
            <Link to="/sobre" className="mt-2 inline-block text-sm text-primary hover:underline">Sobre el proyecto →</Link>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mx-auto mt-20 max-w-6xl px-5">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Sigue leyendo</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}
    </article>
  );
}

function ShareButtons({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => setUrl(window.location.href), []);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const btn = "rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:text-primary";
  return (
    <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-8">
      <span className="mr-2 text-sm text-muted-foreground">Compartir:</span>
      <a className={btn} href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a className={btn} href={`https://x.com/intent/post?text=${t}&url=${u}`} target="_blank" rel="noopener noreferrer">X</a>
      <a className={btn} href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} target="_blank" rel="noopener noreferrer">Facebook</a>
      <button
        className={`${btn} inline-flex items-center gap-1.5`}
        onClick={() => { navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />} {copied ? "Copiado" : "Copiar enlace"}
      </button>
    </div>
  );
}
