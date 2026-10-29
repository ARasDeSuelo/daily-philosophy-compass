import { marked } from "marked";
import type { Post } from "../types";
import pirron from "./pirron-discutir-internet";
import agentes from "./agentes-ia-responsabilidad-sartre";
import burnout from "./burnout-estoicismo";
import ansiedad from "./ansiedad-digital-zen";
import soledad from "./soledad-amistad-epicuro";
import decidir from "./decidir-sartre";
import absurdo from "./camus-tiempo-absurdo";
import diogenes from "./diogenes-dinero";
import ia from "./ia-pensar-aristoteles";
import vivienda from "./vivienda-habitar-bachelard";
import enfermedad from "./enfermedad-seneca";
import serbia from "./serbia-esperanza-william-james";
import brasil from "./brasil-derrota-epicteto";
import microsoft from "./microsoft-trabajo-nietzsche";
import chiba from "./chiba-duelo-zhuangzi";
import urda from "./urda-espera-camus";
import ghosting from "./ghosting-confianza-epicuro";

// No date filtering at module scope: Cloudflare Workers freeze the clock at 0 (1970)
// during module init, which made every essay disappear on the server (HTTP 404).
export const posts: Post[] = [urda, ghosting, chiba, microsoft, brasil, serbia, enfermedad, vivienda, pirron, agentes, ia, burnout, ansiedad, soledad, decidir, absurdo, diogenes]
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postsByTema = (tema: string) => posts.filter((p) => p.tema === tema);
export const postsByEscuela = (e: string) => posts.filter((p) => p.escuela === e);

export function relatedPosts(post: Post, n = 3) {
  return posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: (p.tema === post.tema ? 2 : 0) + (p.escuela === post.escuela ? 1 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.p);
}

export const wordCount = (post: Post) =>
  post.body.replace(/\{\{img:\d\}\}/g, "").split(/\s+/).filter(Boolean).length;

export const readingMinutes = (post: Post) => Math.max(1, Math.round(wordCount(post) / 220));

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export interface TocItem { id: string; text: string }

export function renderPost(post: Post): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  let html = marked.parse(post.body, { async: false }) as string;
  html = html.replace(/<h2>(.*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = slugify(text);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"');
  html = html.replace(/(?:<p>)?\{\{img:(\d)\}\}(?:<\/p>)?/g, (_m, i: string) => {
    const img = post.images[Number(i)];
    if (!img) return "";
    return `<figure><img src="${img.src}" alt="${img.alt.replace(/"/g, "&quot;")}" loading="lazy" width="1088" height="608" />${
      img.caption ? `<figcaption>${img.caption}</figcaption>` : ""
    }</figure>`;
  });
  return { html, toc };
}
