import { createFileRoute } from "@tanstack/react-router";
import { getTema } from "@/content/taxonomy";

// Old /category/... URLs (from a previous site on this domain) permanently
// redirect to the closest tema, or to the essay list.
export function legacyCategoryTarget(splat: string): string {
  const slug = (splat || "").split("/").filter(Boolean)[0]?.toLowerCase() ?? "";
  return getTema(slug) ? `/temas/${slug}` : "/ensayos";
}

export const Route = createFileRoute("/category/$")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const splat = url.pathname.replace(/^\/category\/?/, "");
        return new Response(null, {
          status: 301,
          headers: { Location: legacyCategoryTarget(splat) },
        });
      },
    },
  },
});
