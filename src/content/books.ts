export interface BookRecommendation {
  title: string;
  author: string;
  subject: string;
  level: string;
  recommendation: string;
  startingPoint: string;
  essaySlug: string;
}

export const books: BookRecommendation[] = [
  {
    title: "Manual",
    author: "Epicteto",
    subject: "Decisiones y serenidad",
    level: "Para empezar",
    recommendation: "Breve y directo: te invita a distinguir entre tus actos y aquello que no puedes controlar. Útil si la preocupación te hace gastar energía en lo que no está en tus manos; no es una invitación a soportar cualquier injusticia.",
    startingPoint: "Lee el primer apartado y piensa en una preocupación concreta. Vuelve a él antes de intentar leer todo de una vez.",
    essaySlug: "estoicismo-contra-el-burnout",
  },
  {
    title: "Carta a Meneceo",
    author: "Epicuro",
    subject: "Deseos y vida buena",
    level: "Para empezar",
    recommendation: "Una carta corta para pensar el placer sin confundirlo con el consumo incesante. Te ayuda a preguntar qué deseos hacen tu vida más habitable y cuáles multiplican la inquietud.",
    startingPoint: "Empieza por su distinción entre los deseos. Anota uno que puedas satisfacer de manera sencilla esta semana.",
    essaySlug: "soledad-amistad-epicuro",
  },
  {
    title: "Cartas a Lucilio",
    author: "Séneca",
    subject: "Tiempo y preocupaciones",
    level: "Lectura pausada",
    recommendation: "Una conversación por cartas sobre el tiempo, la amistad, el miedo y la forma de vivir. Sus consejos se pueden discutir: no necesitas aceptar toda su visión para encontrar una pregunta que te acompañe.",
    startingPoint: "Prueba con la carta primera, dedicada al tiempo. Lee una carta cada vez y conserva una pregunta, no una colección de frases.",
    essaySlug: "miedo-diagnostico-enfermedad-seneca",
  },
  {
    title: "El mito de Sísifo",
    author: "Albert Camus",
    subject: "Rutina y sentido",
    level: "Con algo de recorrido",
    recommendation: "Un ensayo exigente sobre el absurdo y la posibilidad de vivir cuando el mundo no ofrece el sentido que le pedimos. Encaja si quieres ir más allá de las citas de Camus y seguir el desarrollo de su argumento.",
    startingPoint: "Avanza despacio y vuelve al ensayo final sobre Sísifo después de leer las secciones anteriores. Su apertura aborda el suicidio: ten presente ese contenido antes de empezar.",
    essaySlug: "camus-absurdo-rutina",
  },
  {
    title: "El existencialismo es un humanismo",
    author: "Jean-Paul Sartre",
    subject: "Libertad y responsabilidad",
    level: "Para empezar",
    recommendation: "Una puerta de entrada breve a la idea de que tus elecciones contribuyen a definirte. Su defensa de la libertad resulta fértil si la contrastas con tus circunstancias, en lugar de convertirla en una obligación de poder con todo.",
    startingPoint: "Busca el ejemplo del estudiante que debe elegir entre dos obligaciones. Piensa qué información no bastaría para resolver una decisión tuya.",
    essaySlug: "decidir-sin-garantias-sartre",
  },
  {
    title: "Fenomenología de la percepción",
    author: "Maurice Merleau-Ponty",
    subject: "Cuerpo y experiencia",
    level: "Lectura exigente",
    recommendation: "Para profundizar en cómo percibes y habitas el mundo con tu cuerpo. No es un manual de bienestar: pide paciencia, pero cambia la manera de pensar gestos, hábitos y relaciones con los demás.",
    startingPoint: "Empieza por el prólogo y continúa con la primera parte, dedicada al cuerpo. Una introducción a la fenomenología puede ayudarte a situar el vocabulario.",
    essaySlug: "emociones-ia-merleau-ponty",
  },
];