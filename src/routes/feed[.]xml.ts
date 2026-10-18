import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/content/posts";
import { site } from "@/config/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const Route = createFileRoute("/feed.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const base = new URL(request.url).origin;
        const items = posts
          .map(
            (p) => `<item><title>${esc(p.title)}</title><link>${base}/ensayos/${p.slug}</link><guid>${base}/ensayos/${p.slug}</guid><pubDate>${new Date(p.date).toUTCString()}</pubDate><description>${esc(p.description)}</description></item>`,
          )
          .join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(site.name)}</title><link>${base}/</link><description>${esc(site.description)}</description><language>es</language>${items}</channel></rss>`;
        return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
      },
    },
  },
});
