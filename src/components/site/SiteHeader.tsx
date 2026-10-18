import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { site } from "@/config/site";

const nav = [
  { to: "/ensayos", label: "Ensayos" },
  { to: "/temas", label: "Temas" },
  { to: "/escuelas", label: "Escuelas" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function SiteHeader({ onSearch }: { onSearch: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">{site.name}</span>
          <span className="hidden text-xs text-muted-foreground md:inline">{site.tagline}</span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1 sm:gap-3">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hidden rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
          <button
            onClick={onSearch}
            aria-label="Buscar ensayos"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Buscar</span>
            <kbd className="hidden rounded bg-muted px-1.5 text-[10px] md:inline">/</kbd>
          </button>
        </nav>
      </div>
      <nav aria-label="Secciones" className="flex justify-center gap-5 border-t border-border/60 py-2 text-sm sm:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="text-muted-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
