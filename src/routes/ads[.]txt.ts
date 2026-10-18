import { createFileRoute } from "@tanstack/react-router";
import { adsenseEnabled, site } from "@/config/site";

export const Route = createFileRoute("/ads.txt")({
  server: {
    handlers: {
      GET: () => {
        if (!adsenseEnabled()) return new Response("Not found", { status: 404 });
        const pub = site.adsense.publisherId.replace(/^ca-/, "");
        return new Response(`google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`, { headers: { "Content-Type": "text/plain" } });
      },
    },
  },
});
