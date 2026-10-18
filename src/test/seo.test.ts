import { describe, expect, it } from "vitest";
import { posts, wordCount } from "@/content/posts";

describe("SEO de los ensayos", () => {
  it("no hay títulos SEO duplicados", () => {
    const t = posts.map((p) => p.seoTitle);
    expect(new Set(t).size).toBe(t.length);
  });
  it("no hay descripciones duplicadas", () => {
    const d = posts.map((p) => p.description);
    expect(new Set(d).size).toBe(d.length);
  });
  it("seoTitle ≤ 56 y description ≤ 160 caracteres", () => {
    for (const p of posts) {
      expect(p.seoTitle.length, p.slug).toBeLessThanOrEqual(56);
      expect(p.description.length, p.slug).toBeLessThanOrEqual(160);
    }
  });
  it("cada ensayo tiene al menos 2000 palabras y 4 imágenes internas con ALT", () => {
    for (const p of posts) {
      expect(wordCount(p), p.slug).toBeGreaterThanOrEqual(2000);
      expect(p.images.length).toBeGreaterThanOrEqual(4);
      for (let i = 0; i < 4; i++) expect(p.body.includes(`{{img:${i}}}`), `${p.slug} img ${i}`).toBe(true);
      expect(p.hero.alt.length).toBeGreaterThan(20);
    }
  });
  it("ninguna fecha es futura", () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const p of posts) expect(p.date <= today).toBe(true);
  });
});
