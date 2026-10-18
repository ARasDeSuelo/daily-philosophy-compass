import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  head: () => seo({ title: "Política de privacidad", description: "Qué datos tratamos en A ras de suelo, con qué finalidad, cómo funciona la publicidad de Google AdSense y cuáles son tus derechos.", path: "/privacidad" }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Política de privacidad">
      <p>Esta política explica cómo se tratan los datos de las personas que visitan {site.domain}.</p>
      <h2>Responsable</h2>
      <p>El responsable del sitio es {site.owner.name || "el titular de " + site.domain}{site.owner.email && <>, con correo de contacto <a href={`mailto:${site.owner.email}`}>{site.owner.email}</a></>}.</p>
      <h2>Qué datos tratamos</h2>
      <p>No pedimos registro ni recogemos datos personales mediante formularios. Si nos escribes por correo, usaremos tu dirección solo para responderte.</p>
      <h2>Publicidad (Google AdSense)</h2>
      <p>Este sitio puede mostrar anuncios de Google AdSense. Google y sus socios usan cookies para mostrar anuncios basados en tus visitas anteriores a este y otros sitios. Puedes desactivar la publicidad personalizada en la <a href="https://adssettings.google.com/">configuración de anuncios de Google</a> y consultar cómo usa Google los datos en <a href="https://policies.google.com/technologies/partner-sites">esta página</a>. Si visitas el sitio desde el Espacio Económico Europeo, el Reino Unido o Suiza, se te pedirá consentimiento antes de usar cookies publicitarias, mediante una plataforma de gestión de consentimiento certificada por Google.</p>
      <h2>Analítica</h2>
      <p>{site.analytics.goatcounter ? "Usamos GoatCounter, una analítica respetuosa con la privacidad que no utiliza cookies ni recoge datos personales identificables." : "Actualmente no usamos herramientas de analítica."}</p>
      <h2>Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al correo de contacto. También puedes reclamar ante la Agencia Española de Protección de Datos. Más detalles sobre cookies en la <Link to="/cookies">política de cookies</Link>.</p>
    </LegalPage>
  ),
});
