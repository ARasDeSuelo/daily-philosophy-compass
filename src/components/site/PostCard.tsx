import { Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import type { Post } from "@/content/types";
import { getEscuela, getTema } from "@/content/taxonomy";
import { readingMinutes } from "@/content/posts";
import { formatDate } from "@/lib/format";

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  const tema = getTema(post.tema);
  const escuela = getEscuela(post.escuela);
  return (
    <article className="card-soft group flex flex-col" style={{ "--tema-color": tema?.color } as CSSProperties}>
      <Link to="/ensayos/$slug" params={{ slug: post.slug }} className="relative block overflow-hidden">
        <img
          src={post.hero.src}
          alt={post.hero.alt}
          loading="lazy"
          width={1200}
          height={630}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${large ? "aspect-[16/9]" : "aspect-[1200/630]"}`}
        />
        {tema && <span className="chip-solid absolute left-4 top-4">{tema.label}</span>}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-muted-foreground">
          {escuela?.label} · {formatDate(post.date)} · {readingMinutes(post)} min
        </p>
        <h3 className={`mt-2 font-serif font-semibold leading-snug text-foreground ${large ? "text-2xl md:text-3xl" : "text-lg"}`}>
          <Link to="/ensayos/$slug" params={{ slug: post.slug }} className="hover:underline decoration-1 underline-offset-4">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      </div>
    </article>
  );
}
