import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { posts } from "@/content/posts";
import { getTema } from "@/content/taxonomy";

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => input.current?.focus(), 10);
    else setQ("");
  }, [open]);

  const results = useMemo(() => {
    const n = norm(q.trim());
    if (!n) return posts.slice(0, 5);
    return posts.filter((p) => norm(`${p.title} ${p.excerpt} ${p.tema} ${p.escuela}`).includes(n));
  }, [q]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Buscar" className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/40 px-4 pt-24 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-card shadow-lift" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-border px-4">
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            placeholder="Busca un tema, una escuela, una idea…"
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <button onClick={onClose} aria-label="Cerrar búsqueda" className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="p-4 text-sm text-muted-foreground">No hay ensayos que coincidan.</li>}
          {results.map((p) => (
            <li key={p.slug}>
              <Link to="/ensayos/$slug" params={{ slug: p.slug }} onClick={onClose} className="block rounded-lg p-3 hover:bg-muted">
                <p className="text-xs text-muted-foreground">{getTema(p.tema)?.label}</p>
                <p className="font-serif font-semibold text-foreground">{p.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
