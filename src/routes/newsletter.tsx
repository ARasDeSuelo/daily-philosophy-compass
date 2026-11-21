import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/seo";
export const Route = createFileRoute("/newsletter")({
 head: () => seo({ title: "La idea de los lunes", description: "Una idea filosófica breve para empezar la semana: lectura, reflexión y una práctica concreta.", path: "/newsletter" }),
 component: () => <LegalPage eyebrow="Newsletter" title="La idea de los lunes"><p>Una vez por semana: una idea filosófica, una lectura breve y una práctica para llevarla a tu vida cotidiana.</p><h2>Qué recibirás</h2><ul><li>Una idea en lenguaje claro, sin jerga académica.</li><li>Una referencia a la obra o fuente original para profundizar.</li><li>Una pregunta y una práctica para la semana.</li></ul><h2>Suscripción</h2><p>La estructura editorial está preparada. El formulario y la gestión de suscripciones se activarán cuando conectemos un proveedor de newsletter y definamos la política de privacidad y consentimiento.</p><p>Mientras tanto, puedes <Link to="/sobre">conocer el proyecto y su metodología</Link>.</p></LegalPage>
});