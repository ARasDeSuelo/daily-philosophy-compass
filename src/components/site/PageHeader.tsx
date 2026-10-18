import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Migas de pan" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden>›</span>
            {it.to ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <Link to={it.to as any} params={it.params as any} className="hover:text-foreground">{it.label}</Link>
            ) : (
              <span className="text-foreground">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <header className="mx-auto max-w-3xl px-5 pb-10 pt-14 text-center">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
      <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h1>
      {children && <div className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </header>
  );
}
