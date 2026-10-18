import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => seo({ title: "Contacto", description: "Escríbenos para proponer temas, señalar errores o colaborar con A ras de suelo.", path: "/contacto" }),
  component: () => (
    <LegalPage eyebrow="Escríbenos" title="Contacto">
      <p>¿Quieres proponer un tema, señalar un error o colaborar? Nos encanta leer a quienes nos leen.</p>
      {site.owner.email ? (
        <p>Escríbenos a <a href={`mailto:${site.owner.email}`}>{site.owner.email}</a>. Respondemos en unos días.</p>
      ) : (
        <p>Muy pronto publicaremos aquí una dirección de correo de contacto.</p>
      )}
    </LegalPage>
  ),
});
