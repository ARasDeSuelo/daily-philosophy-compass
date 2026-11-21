import { site } from "@/config/site";

const MAX_TITLE = 66;

export function fullTitle(title: string) {
  const withBrand = `${title} | ${site.name}`;
  return withBrand.length > MAX_TITLE ? title : withBrand;
}

export function seo(opts: { title: string; description: string; path: string; type?: string; image?: string; imageAlt?: string }) {
  const t = fullTitle(opts.title);
  const image = opts.image ? (opts.image.startsWith("http") ? opts.image : `https://${site.domain}${opts.image.startsWith("/") ? opts.image : "/" + opts.image}`) : undefined;
  const meta: any[] = [
      { title: t },
      { name: "description", content: opts.description },
      { property: "og:title", content: t },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: `https://${site.domain}${opts.path}` },
      { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: t },
      { name: "twitter:description", content: opts.description },
    ];
  if (image) meta.push({ property: "og:image", content: image }, { property: "og:image:alt", content: opts.imageAlt ?? opts.title }, { name: "twitter:image", content: image }, { name: "twitter:image:alt", content: opts.imageAlt ?? opts.title });
  return { meta, links: [{ rel: "canonical", href: `https://${site.domain}${opts.path}` }] };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: `https://${site.domain}${it.path}`,
      })),
    }),
  };
}
