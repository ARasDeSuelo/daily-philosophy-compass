// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss, nitro, etc.
// Do NOT add them manually.
import { readdirSync, readFileSync } from "node:fs";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Every essay is prerendered to static HTML. Slugs are read from the post files so
// new essays are picked up automatically on the next build.
const postDir = "src/content/posts";
const essaySlugs = readdirSync(postDir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts")
  .map((f) => readFileSync(`${postDir}/${f}`, "utf8").match(/slug:\s*"([^"]+)"/)?.[1])
  .filter((s): s is string => Boolean(s));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    pages: [{ path: "/" }, { path: "/ensayos" }, { path: "/libros" }, ...essaySlugs.map((slug) => ({ path: `/ensayos/${slug}` }))],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
