import { describe, expect, it } from "vitest";
import { Route } from "@/routes/sitemap[.]xml";
import { posts } from "@/content/posts";
import { readFileSync } from "node:fs";

const sitemapRoute = Route as unknown as {
  options: { server: { handlers: { GET: () => Response } } };
};

describe("Public search discovery", () => {
  it("uses arasdesuelo.com for every sitemap URL", async () => {
    const response = sitemapRoute.options.server.handlers.GET();
    expect(response.status).toBe(200);
    const xml = await response.text();
    const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), (match) => match[1]);
    expect(urls.length).toBeGreaterThan(posts.length);
    for (const url of urls) {
      if (url === undefined) throw new Error("Sitemap URL is missing");
      expect(new URL(url).origin).toBe("https://arasdesuelo.com");
    }
    expect(urls).toContain("https://arasdesuelo.com/");
  });

  it("advertises the public sitemap in robots.txt", () => {
    const robots = readFileSync("public/robots.txt", "utf8");
    expect(robots.split("\n")).toContain("Sitemap: https://arasdesuelo.com/sitemap.xml");
  });

  it("derives article modification dates from the article content", async () => {
    const xml = await sitemapRoute.options.server.handlers.GET().text();
    for (const post of posts) {
      expect(xml).toContain(`<loc>https://arasdesuelo.com/ensayos/${post.slug}</loc><lastmod>${post.date}</lastmod>`);
    }
  });
});