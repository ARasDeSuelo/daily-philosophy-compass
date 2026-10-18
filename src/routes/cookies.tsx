import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => seo({ title: "Política de cookies", description: "Qué cookies usa A ras de suelo, para qué sirven y cómo puedes gestionarlas o retirar tu consentimiento.", path: "/cookies" }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Política de cookies">
      <p>Una cookie es un pequeño archivo que un sitio guarda en tu navegador. Este sitio no instala cookies propias.</p>
      <h2>Cookies de terceros</h2>
      <p>Si la publicidad está activa, Google AdSense puede instalar cookies para mostrar y medir anuncios, y, con tu consentimiento, para personalizarlos. Puedes gestionarlas en la <a href="https://adssettings.google.com/">configuración de anuncios de Google</a> o en <a href="https://www.youronlinechoices.com/es/">Your Online Choices</a>.</p>
      <h2>Cómo retirar el consentimiento</h2>
      <p>Puedes cambiar tu elección desde el mensaje de consentimiento del sitio o borrar las cookies desde la configuración de tu navegador en cualquier momento.</p>
    </LegalPage>
  ),
});
