<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Essays live as typed TS modules in src/content/posts/ (registered in index.ts), with markdown body and {{img:N}} placeholders — keeps content static, SEO-friendly and testable.
- Site-wide config (AdSense, analytics, owner data) lives only in src/config/site.ts; empty values must render nothing.
- src/test/seo.test.ts guards unique titles/descriptions, lengths, word count and images; keep it passing when adding posts.
- Essay dates may sit at most one day ahead of today (a draft can be dated for tomorrow morning); the seo test enforces that window so a wrong year still fails.
- Internal links between essays must use the post's `slug`, never its file name — several modules are named differently from their URL.
- Sitemap URLs use the public domain from site config, never the request origin, so previews cannot leak into search discovery; lastmod uses content dates only.
- Never read the clock (new Date(), Date.now()) at module scope in server-reachable code: Workers freeze time at 0 during init, which once emptied the essay list in production.
- Essay pages are prerendered; vite.config.ts reads slugs from src/content/posts/*.ts so new essays are included automatically.
- Book recommendations are static typed content in src/content/books.ts, displayed at /libros and linked as an additional category rather than an essay taxonomy entry, so they do not create empty essay listings.
