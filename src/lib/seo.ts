import { site } from "@/config/site";

const MAX_TITLE = 66;

export function fullTitle(title: string) {
  const withBrand = `${title} | ${site.name}`;
  return withBrand.length > MAX_TITLE ? title : withBrand;
}

export function seo(opts: { title: string; description: string; path: string; type?: string }) {
  const t = fullTitle(opts.title);
  return {
    meta: [
      { title: t },
      { name: "description", content: opts.description },
      { property: "og:title", content: t },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t },
      { name: "twitter:description", content: opts.description },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
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
