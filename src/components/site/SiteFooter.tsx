import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { temas } from "@/content/taxonomy";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{site.description}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Temas</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {temas.map((t) => (
              <li key={t.slug}>
                <Link to="/temas/$tema" params={{ tema: t.slug }} className="hover:underline">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">El sitio</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/ensayos" className="hover:underline">Todos los ensayos</Link></li>
            <li><Link to="/escuelas" className="hover:underline">Escuelas filosóficas</Link></li>
            <li><Link to="/libros" className="hover:underline">Libros recomendados</Link></li>
            <li><Link to="/sobre" className="hover:underline">Sobre el proyecto</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
            <li><Link to="/privacidad" className="hover:underline">Privacidad</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookies</Link></li>
            <li><Link to="/aviso-legal" className="hover:underline">Aviso legal</Link></li>
            <li><a href="/feed.xml" className="hover:underline">RSS</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-5 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.name}. {site.tagline}.
      </div>
    </footer>
  );
}
