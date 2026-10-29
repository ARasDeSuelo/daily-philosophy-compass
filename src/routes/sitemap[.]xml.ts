import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/content/posts";
import { escuelas, temas } from "@/content/taxonomy";
import { site } from "@/config/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const base = `https://${site.domain}`;
        const urls: { loc: string; lastmod?: string | undefined }[] = [
          { loc: "/", lastmod: posts[0]?.date },
          { loc: "/ensayos", lastmod: posts[0]?.date },
          { loc: "/temas" },
          { loc: "/escuelas" },
          { loc: "/libros" },
          { loc: "/sobre" },
          { loc: "/contacto" },
          { loc: "/privacidad" },
          { loc: "/cookies" },
          { loc: "/aviso-legal" },
          ...temas.map((t) => ({ loc: `/temas/${t.slug}` })),
          ...escuelas.map((e) => ({ loc: `/escuelas/${e.slug}` })),
          ...posts.map((p) => ({ loc: `/ensayos/${p.slug}`, lastmod: p.date })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${base}${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`)
          .join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
