import { useEffect } from "react";
import { adsenseEnabled, site } from "@/config/site";

declare global {
  interface Window { adsbygoogle?: unknown[] }
}

/** Solo se pinta si hay publisherId y una unidad real; si no, no deja ningún hueco. */
export function AdSlot({ kind }: { kind: "banner" | "rect" }) {
  const slot = site.adsense.slots[kind];
  const enabled = adsenseEnabled() && slot.length > 0;
  useEffect(() => {
    if (!enabled) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* noop */ }
  }, [enabled]);
  if (!enabled) return null;
  return (
    <div className="my-8">
      <ins
        className="adsbygoogle block"
        data-ad-client={site.adsense.publisherId}
        data-ad-slot={slot}
        data-ad-format={kind === "banner" ? "horizontal" : "rectangle"}
        data-full-width-responsive="true"
      />
    </div>
  );
}
