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
