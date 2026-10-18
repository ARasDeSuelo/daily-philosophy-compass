export interface Tema {
  slug: string;
  label: string;
  description: string;
  intro: string;
  color: string;
}

export interface Escuela {
  slug: string;
  label: string;
  thinker: string;
  description: string;
}

export const temas: Tema[] = [
  {
    slug: "agotamiento-y-trabajo",
    label: "Agotamiento y trabajo",
    description: "Burnout, productividad y el sentido de lo que haces cada día.",
    intro:
      "El trabajo ocupa la mayor parte de tus horas despiertas y, a menudo, también de las dormidas. Aquí pensamos el agotamiento, la presión por rendir y la pregunta de para qué trabajas, con herramientas filosóficas que no te piden dejarlo todo, sino mirar de otra forma lo que ya haces y decidir qué parte de esa carga te corresponde.",
    color: "oklch(0.55 0.12 45)",
  },
  {
    slug: "ansiedad-digital",
    label: "Ansiedad digital",
    description: "Pantallas, notificaciones y la atención como recurso escaso.",
    intro:
      "Vives conectado, y tu atención es lo que se compra y se vende. Estos ensayos exploran la inquietud que dejan las pantallas, la comparación constante y el miedo a perderte algo, y proponen prácticas antiguas para recuperar la presencia sin necesidad de huir a una cabaña ni renunciar a la tecnología que usas a diario.",
    color: "oklch(0.5 0.08 230)",
  },
  {
    slug: "amor-y-citas",
    label: "Amor y citas",
    description: "Pareja, apps de citas y lo que esperamos del otro.",
    intro:
      "Las relaciones nunca fueron sencillas, pero las aplicaciones y las expectativas modernas añaden capas nuevas. Pensamos el deseo, el compromiso y la ruptura con filósofos que se tomaron el amor en serio, para ayudarte a distinguir lo que buscas de lo que te han dicho que deberías buscar en otra persona.",
    color: "oklch(0.55 0.14 15)",
  },
  {
    slug: "decisiones-y-dudas",
    label: "Decisiones y dudas",
    description: "Elegir sin garantías y convivir con la incertidumbre.",
    intro:
      "Cambiar de trabajo, mudarte, empezar o terminar algo: ninguna decisión importante llega con instrucciones. Estos ensayos te ayudan a pensar la duda no como un fallo, sino como parte del hecho de ser libre, y te ofrecen maneras concretas de decidir cuando ninguna opción es perfecta y el miedo a equivocarte paraliza.",
    color: "oklch(0.5 0.1 280)",
  },
  {
    slug: "dinero-y-ambicion",
    label: "Dinero y ambición",
    description: "Consumo, éxito y cuánto es suficiente.",
    intro:
      "El dinero promete libertad y a menudo entrega preocupación. Aquí examinamos la ambición, el consumo y la comparación con los demás desde escuelas que se preguntaron hace siglos qué necesitas de verdad. No es un elogio de la pobreza, sino una invitación a decidir tú qué significa tener suficiente.",
    color: "oklch(0.6 0.12 85)",
  },
  {
    slug: "identidad-y-proposito",
    label: "Identidad y propósito",
    description: "Quién eres, qué te mueve y cómo se construye un sentido.",
    intro:
      "La pregunta de quién eres no se responde una vez para siempre. Estos ensayos acompañan los cambios de etapa, las crisis de sentido y la presión por tener una vocación clara, con ideas filosóficas que tratan la identidad como algo que se hace con actos y no como algo que se descubre de golpe.",
    color: "oklch(0.52 0.1 160)",
  },
  {
    slug: "ira-y-conflicto",
    label: "Ira y conflicto",
    description: "Enfado, discusiones y cómo convivir con quien piensa distinto.",
    intro:
      "La ira llega rápido y se va despacio, dejando a veces más daño que el motivo que la provocó. Pensamos el enfado, la polarización y los conflictos cotidianos con escuelas que estudiaron las pasiones con detalle, para que puedas responder en lugar de reaccionar sin tragarte lo que de verdad importa.",
    color: "oklch(0.52 0.16 30)",
  },
  {
    slug: "perdida-y-duelo",
    label: "Pérdida y duelo",
    description: "Despedidas, ausencias y lo que queda después.",
    intro:
      "Perder a alguien, un trabajo o una versión de ti mismo duele de formas que no caben en una frase hecha. Estos ensayos no pretenden quitarte el dolor, sino acompañarlo con ideas que muchas personas usaron antes que tú para seguir viviendo con la ausencia sin olvidar lo que se perdió.",
    color: "oklch(0.45 0.05 260)",
  },
  {
    slug: "soledad-y-vinculos",
    label: "Soledad y vínculos",
    description: "Amistad, comunidad y estar solo sin sentirse aislado.",
    intro:
      "Nunca hubo tantas formas de contactar con otros y, sin embargo, mucha gente se siente sola. Exploramos la amistad, la comunidad y la diferencia entre soledad elegida y aislamiento, con filósofos que pusieron los vínculos en el centro de una vida buena y que dejaron consejos sorprendentemente prácticos.",
    color: "oklch(0.55 0.1 130)",
  },
  {
    slug: "tiempo-y-mortalidad",
    label: "Tiempo y mortalidad",
    description: "La prisa, la rutina y la conciencia de que todo termina.",
    intro:
      "Sientes que el tiempo se escapa y, a la vez, que los días se repiten. Estos ensayos piensan la prisa, la rutina y la finitud con escuelas que miraron la muerte de frente, no para entristecerte, sino para que el tiempo que tienes deje de parecer una lista de tareas y vuelva a parecer tu vida.",
    color: "oklch(0.5 0.09 200)",
  },
];

export const escuelas: Escuela[] = [
  { slug: "estoicismo", label: "Estoicismo", thinker: "Epicteto, Séneca, Marco Aurelio", description: "Distinguir lo que depende de ti de lo que no, y poner tu energía solo en lo primero." },
  { slug: "taoismo", label: "Taoísmo", thinker: "Laozi, Zhuangzi", description: "Fluir con las cosas en lugar de forzarlas; la fuerza de lo blando y del no-hacer." },
  { slug: "budismo-zen", label: "Budismo zen", thinker: "Dōgen, Shunryu Suzuki", description: "Atención plena al momento presente y práctica sencilla por encima de la teoría." },
  { slug: "cinismo-griego", label: "Cinismo griego", thinker: "Diógenes de Sinope, Antístenes", description: "Vivir según la naturaleza, reírse de las convenciones y necesitar muy poco." },
  { slug: "epicureismo", label: "Epicureísmo", thinker: "Epicuro, Lucrecio", description: "Placeres sencillos, amistad y ausencia de miedo como base de una vida feliz." },
  { slug: "etica-de-la-virtud", label: "Ética de la virtud", thinker: "Aristóteles", description: "El carácter se forma con hábitos; la vida buena es una práctica, no una meta." },
  { slug: "existencialismo", label: "Existencialismo de Sartre", thinker: "Jean-Paul Sartre, Simone de Beauvoir", description: "Estás condenado a ser libre: te defines por lo que eliges y haces." },
  { slug: "absurdismo", label: "Absurdismo", thinker: "Albert Camus", description: "El mundo no responde a nuestra pregunta por el sentido, y aun así se puede vivir con plenitud." },
  { slug: "nihilismo", label: "Nihilismo", thinker: "Friedrich Nietzsche", description: "Cuando los valores heredados caen, toca crear los propios." },
  { slug: "escepticismo", label: "Escepticismo", thinker: "Pirrón, Sexto Empírico", description: "Suspender el juicio para encontrar la calma frente a lo incierto." },
  { slug: "fenomenologia", label: "Fenomenología", thinker: "Husserl, Merleau-Ponty", description: "Volver a las cosas mismas: describir la experiencia tal como se vive." },
  { slug: "pragmatismo", label: "Pragmatismo de William James", thinker: "William James", description: "Una idea vale por las diferencias que produce en tu vida práctica." },
];

export const getTema = (slug: string) => temas.find((t) => t.slug === slug);
export const getEscuela = (slug: string) => escuelas.find((e) => e.slug === slug);
