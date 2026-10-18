import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/aviso-legal")({
  head: () => seo({ title: "Aviso legal", description: "Información legal sobre el titular de A ras de suelo, las condiciones de uso del sitio y la propiedad intelectual de sus contenidos.", path: "/aviso-legal" }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Aviso legal">
      <h2>Titular</h2>
      <p>Sitio web: {site.domain}.{site.owner.name && <> Titular: {site.owner.name}.</>}{site.owner.email && <> Contacto: <a href={`mailto:${site.owner.email}`}>{site.owner.email}</a>.</>}</p>
      <h2>Condiciones de uso</h2>
      <p>Los contenidos de este sitio tienen carácter divulgativo y no constituyen consejo médico, psicológico, legal ni financiero.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos e ilustraciones de {site.name} están protegidos. Puedes citarlos con enlace a la fuente; no puedes reproducirlos íntegramente sin permiso.</p>
      <h2>Enlaces</h2>
      <p>Enlazamos a fuentes externas fiables, pero no somos responsables de su contenido.</p>
    </LegalPage>
  ),
});
