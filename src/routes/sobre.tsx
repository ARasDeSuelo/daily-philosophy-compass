import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () => seo({ title: "Sobre A ras de suelo: quiénes somos", description: "Por qué escribimos ensayos de filosofía aplicada, cómo los escribimos y qué puedes esperar de A ras de suelo.", path: "/sobre" }),
  component: () => (
    <LegalPage eyebrow="El proyecto" title="Sobre A ras de suelo">
      <p>{site.name} nace de una idea sencilla: la filosofía no está para adornar estanterías, sino para ayudarte a vivir. Durante siglos, estoicos, epicúreos, cínicos, maestros zen y existencialistas se hicieron las mismas preguntas que te haces tú un martes por la noche: cómo trabajar sin quemarse, qué hacer con la ansiedad, cuánto es suficiente, cómo decidir sin garantías.</p>
      <h2>Cómo escribimos</h2>
      <p>Cada ensayo empieza con una escena concreta, explica una idea filosófica sin jerga, reconoce honestamente dónde esa idea no sirve y termina con acciones que puedes poner en práctica. No inventamos citas ni cifras: cuando mencionamos una obra, es real, y enlazamos fuentes fiables para que puedas comprobarlo.</p>
      <h2>Lo que no somos</h2>
      <p>No somos terapeutas ni ofrecemos consejo médico. Si atraviesas un momento difícil, busca ayuda profesional. La filosofía puede acompañar, pero no sustituye a un tratamiento.</p>
      <p>Empieza por <Link to="/temas">los temas</Link> o por <Link to="/escuelas">las escuelas</Link>. Y si quieres escribirnos, ve a <Link to="/contacto">contacto</Link>.</p>
    </LegalPage>
  ),
});
