import type { Post } from "../types";
import hero from "@/assets/posts/trabajo/hero.jpg";
import i1 from "@/assets/posts/trabajo/1.jpg";
import i2 from "@/assets/posts/trabajo/2.jpg";
import i3 from "@/assets/posts/trabajo/3.jpg";
import i4 from "@/assets/posts/trabajo/4.jpg";

const post: Post = {
  slug: "microsoft-trabajo-nietzsche",
  title:
    "Cuando el empleo de por vida muere: Nietzsche y la identidad después del trabajo",
  seoTitle: "Microsoft y las 60.000 bajas: Nietzsche sobre el trabajo",
  description:
    "Microsoft ofrece bajas voluntarias a unos 60.000 empleados. Nietzsche explica qué pasa cuando el trabajo deja de definirte y cómo crear una identidad propia.",
  excerpt:
    "Microsoft ha ofrecido este lunes bajas voluntarias con bonificación a unos 60.000 empleados, cerca de una cuarta parte de su plantilla mundial. No es solo una noticia económica: es otro síntoma de que el contrato silencioso que organizaba la vida moderna —un empleo estable, una empresa, una identidad profesional— se está rompiendo. Nietzsche escribió hace ciento cuarenta años sobre lo que ocurre cuando un valor que lo ordenaba todo se derrumba, y sobre la única salida que encontró: no buscar un sustituto, sino convertirte en creador de tus propios valores.",
  date: "2026-10-26",
  tema: "agotamiento-y-trabajo",
  escuela: "nihilismo",
  hero: {
    src: hero,
    alt: "Persona empaquetando sus pertenencias en una caja de cartón al atardecer en una gran oficina con filas de escritorios vacíos y monitores encendidos",
  },
  images: [
    {
      src: i1,
      alt: "Mano sosteniendo un carné de empleado con cordón que se deshace en pequeños pájaros de papel que vuelan, sobre un escritorio con una taza de café",
      caption: "El carné de empresa fue durante décadas una respuesta a la pregunta «¿quién eres?». Esa respuesta se está deshaciendo.",
    },
    {
      src: i2,
      alt: "Filósofo del siglo XIX con gran bigote caminando solo por un sendero de montaña con un bastón, entre picos alpinos y un lago",
      caption: "Nietzsche escribió sus libros decisivos caminando solo por los Alpes, sin empleo, sin cátedra y sin certezas heredadas.",
    },
    {
      src: i3,
      alt: "Persona con mochila detenida en una bifurcación de caminos en un bosque: un sendero lleva a edificios de oficinas que se desvanecen y el otro a un amanecer sobre los campos",
      caption: "Cuando el camino marcado desaparece, queda el que todavía no existe: el que haces al andar.",
    },
    {
      src: i4,
      alt: "Persona construyendo con las manos una maqueta de barco de madera en la mesa de una cocina, con café, plantas y herramientas",
      caption: "Crear valores propios no es un gesto épico: empieza por tareas pequeñas hechas con cuidado y por decisión propia.",
    },
  ],
  body: `
La noticia llegó este lunes casi como un trámite: Microsoft ofrecerá [bajas voluntarias con bonificación a unos 60.000 empleados](https://www.euronews.com/2026/10/26), trabajadores de equipos seleccionados en Estados Unidos, Canadá, India y Reino Unido. Según [El País](https://elpais.com/hemeroteca/2026-10-26/2/), la operación equivale a recortar cerca de una cuarta parte de la plantilla mundial de una de las empresas más valiosas del planeta. No es una empresa en crisis: es una empresa que gana más dinero que nunca y que, precisamente por eso, puede permitirse necesitar menos gente.

Puedes leerlo como una noticia de negocios, y lo es. Pero debajo hay otra noticia, más vieja y más importante: el acuerdo silencioso que organizó la vida de varias generaciones —estudia, entra en una buena empresa, quédate, asciende, jubílate— ha dejado de existir, aunque muchos sigan fingiendo que no. Y cuando cae el valor que ordenaba todo lo demás, la pregunta que queda no es «¿dónde encontraré otro trabajo?», sino una mucho más incómoda: si tu empleo ya no te dice quién eres, ¿quién lo dice?

Esa pregunta exacta la vivió y la escribió un hombre que perdió su propio empleo de por vida a los treinta y cuatro años: Friedrich Nietzsche.

{{img:0}}

## El filósofo que perdió su puesto fijo

Nietzsche fue un prodigio académico: catedrático de filología en la Universidad de Basilea con veinticuatro años, antes incluso de doctorarse. Tenía delante la carrera perfecta del siglo XIX: prestigio, salario, pensiones, un lugar fijo en el mundo. Pero su salud se rompió —migrañas atroces, vómitos, una vista que se apagaba— y en 1879 pidió la baja. Nunca volvió a tener un empleo. Pasó la década siguiente vagando por pensiones baratas de Suiza e Italia, escribiendo libros que casi nadie compraba, con una pensión mínima y sin ninguna institución que le dijera quién era.

Desde fuera, su vida fue un fracaso profesional. Desde dentro, fue el laboratorio de una de las ideas más influyentes de la filosofía moderna. Nietzsche se dio cuenta de que lo que le había pasado a él en pequeño le estaba pasando a toda su época en grande: los valores heredados —en su caso, la religión y la moral tradicional; en el nuestro, podríamos decir, el empleo estable y la carrera— habían dejado de ser creíbles, pero la gente seguía organizando su vida como si estuvieran intactos. A eso lo llamó nihilismo: no la doctrina de que nada importa, sino el momento histórico en que los valores supremos se devalúan. Puedes leer una introducción rigurosa en la [Enciclopedia de Filosofía de Stanford](https://plato.stanford.edu/entries/nietzsche/).

Su diagnóstico más famoso es también el más malentendido. Cuando escribió «Dios ha muerto», no celebraba: describía un terremoto. Si el valor que lo sostenía todo desaparece, todo lo que colgaba de él —el sentido del esfuerzo, la jerarquía de lo importante, la idea de progreso— se queda colgando de nada. Cambia «Dios» por «el empleo de por vida» y la frase describe con precisión inquietante la bandeja de entrada de sesenta mil empleados de Microsoft esta mañana.

## Tu puesto no eras tú (aunque lo pareciera)

Hay una escena que se repite en cada gran despido, y probablemente se repita miles de veces en las próximas semanas: alguien lleva quince años presentándose como «soy ingeniera en tal empresa», y de pronto la frase deja de ser verdad. No ha perdido solo unos ingresos. Ha perdido la respuesta automática a la pregunta «¿a qué te dedicas?», que en nuestra cultura es la forma educada de preguntar «¿quién eres?».

Nietzsche diría que ahí hay una confusión que conviene deshacer cuanto antes. Que tu identidad dependiera de tu puesto no era un hecho natural: era un hábito cultural, una costumbre que te ahorraba el trabajo de decidir quién eras. La empresa te daba un nombre, un horario, una misión y hasta un carné con tu foto. A cambio, tú le dabas la pregunta más importante de tu vida. Era un trato cómodo mientras duró. Pero todo lo que te ahorra decidir te vuelve más frágil, porque el día que desaparece —y desaparece— te deja sin respuesta y sin práctica para construir una.

Esto conecta con algo que ya exploraste en [el ensayo sobre el agotamiento](/ensayos/estoicismo-contra-el-burnout): el burnout no es solo cansancio, es la factura de haber puesto el centro de tu vida en un lugar que no controlas. Y también con lo que contaba [Diógenes sobre el dinero](/ensayos/diogenes-dinero-suficiente): necesitar poco de las instituciones es una forma de libertad. Nietzsche añade el paso siguiente, más difícil: cuando la institución se retira, no basta con resistir. Hay que crear.

{{img:1}}

## El nihilismo tiene dos puertas de salida

Nietzsche distinguía dos reacciones posibles cuando se derrumba un valor grande, y las dos están hoy perfectamente visibles.

La primera la llamó nihilismo pasivo: quedarse en las ruinas. Es la persona que, perdido el empleo que la definía, se instala en la queja, en la nostalgia de cómo eran las cosas, en la espera de que vuelva un mundo que no va a volver. También es la que acepta cualquier sustituto con tal de no sostener el vacío: la nueva secta, el nuevo gurú, la nueva identidad prefabricada que promete decirte otra vez quién eres sin que tengas que pensarlo. El nihilismo pasivo no siempre parece tristeza; a veces parece cinismo, a veces ironía permanente, a veces adicción al ruido. Su señal común es la renuncia: nada vale, así que da igual.

La segunda puerta es el nihilismo activo, y es el que le interesaba: usar el derrumbe como demolición controlada. Si el valor viejo ya no sostiene nada, al menos deja un solar limpio donde construir algo tuyo. Nietzsche no tenía una receta para esto —desconfiaba de las recetas— pero sí una imagen: la del creador de valores. La persona que, en lugar de heredar una tabla de lo bueno y lo malo, escribe la suya con lo que ha vivido, y la firma.

Fíjate en que esto no es el discurso motivacional de «sé tu propio jefe» ni la fantasía de que todo despido es una oportunidad. Perder un empleo duele, cuesta dinero y quita el sueño, y fingir lo contrario es una grosería. Nietzsche, que escribió sus mejores libros enfermo y casi sin lectores, no creía en las oportunidades disfrazadas. Creía en otra cosa: en que el dolor no te da sentido automáticamente, pero te da materia prima, y que la diferencia entre una vida rota y una vida propia está en lo que haces con ella.

## Crear valores suena épico y es doméstico

La expresión «crear tus propios valores» suena a hazaña de superhombre, y esa es una de las razones por las que Nietzsche se lee mal. En la práctica, y esto lo sabía bien un hombre que pasaba las tardes dando paseos y corrigiendo pruebas a mano, crear valores es una actividad pequeña, repetida y bastante doméstica.

Empieza por una pregunta que casi nadie se hace en serio: ¿qué harías con tus mañanas si nadie te diera un título por ello? No lo que harías por dinero ni por prestigio, sino lo que harías porque la actividad misma te parece digna de tu tiempo. Para unos será cuidar, para otros construir, enseñar, cultivar, escribir, arreglar cosas. La respuesta no tiene que ser rentable ni impresionante. Tiene que ser tuya, que es justo lo que el empleo de por vida te ahorraba averiguar.

Sigue con una práctica que Nietzsche llamó «llegar a ser lo que eres»: mirar tu propia vida como un material, no como un veredicto. Los quince años en la empresa no fueron un error ni una identidad perdida; fueron aprendizaje, contactos, oficio, cicatrices útiles. El creador de valores no reniega de su pasado: lo reordena al servicio de un proyecto que ahora sí elige. Es la misma operación que describía [Sartre con la libertad](/ensayos/decidir-sin-garantias-sartre): no eliges tu situación, pero eliges sin excusas lo que haces con ella.

Y termina con algo que Nietzsche practicó literalmente en sus años sin empleo: una disciplina cotidiana pequeña y sostenida. Él caminaba horas cada día y escribía cada mañana, sin jefe, sin plazo y sin público. No lo hacía por productividad; lo hacía porque una vida con forma propia necesita hábitos propios. Aristóteles lo habría reconocido al instante —como viste en [el ensayo sobre pensar por ti mismo](/ensayos/ia-pensar-por-ti-aristoteles), el carácter se construye con actos repetidos, no con declaraciones.

{{img:2}}

## Lo que esto significa si hoy tienes empleo

Quizá lees esto desde un puesto estable y la noticia de Microsoft te parece lejana. No lo es, y no por pesimismo: la empresa que hoy ofrece sesenta mil salidas bonificadas es la misma que hasta hace poco era el modelo de empleador para toda la vida. Si el contrato silencioso se rompe en la cima, se rompe en todas partes.

Pero la lección de Nietzsche no es «prepárate para la catástrofe». Es más útil que eso: no esperes al despido para hacer la pregunta. Quien sabe quién es sin su cargo negocia mejor, trabaja mejor y, si llega el día, pierde un empleo en lugar de perderse a sí mismo. Hay una diferencia enorme entre decir «trabajo en» y decir «soy de», y conviene haberla pensado antes de que la piense por ti un departamento de recursos humanos.

Hay también una lectura colectiva que conviene no saltarse. Que una empresa pueda prescindir de una cuarta parte de su plantilla mientras bate récords es un problema político y económico de primer orden —sobre salarios, sobre reparto, sobre qué hacemos con el tiempo que las máquinas nos devuelven— y ninguna filosofía personal lo sustituye. Nietzsche no te salva de eso; te impide añadirle, encima, una crisis de identidad innecesaria. La sociedad tendrá que responder como sociedad, y mientras tanto a ti te toca una tarea más antigua y más cercana: construir una vida que no se venga abajo cuando se cae un organigrama.

## Tres preguntas para esta semana

Si la noticia te ha tocado de cerca —o te ha hecho pensar—, hay tres preguntas concretas que puedes llevarte a un paseo este fin de semana, sin pantallas delante.

La primera: ¿qué partes de tu semana harías aunque nadie te pagara por ellas? No es una pregunta romántica; es un detector. Lo que harías gratis señala hacia tus valores reales, los que no dependen de ningún organigrama. La segunda: ¿quién eres cuando nadie te pregunta a qué te dedicas? Piensa en cómo te presentarías en una cena donde estuviera prohibido hablar de trabajo. Si la respuesta te deja en blanco, ese blanco es información valiosa: es el solar del que hablábamos. La tercera: ¿qué hábito pequeño, tuyo y solo tuyo, podrías empezar el lunes? Nietzsche necesitó años de caminatas y cuadernos para construir una vida sin institución que la sostuviera. Tú puedes empezar con media hora al día dedicada a algo que hayas elegido sin que nadie te lo pidiera.

Ninguna de las tres preguntas arregla el mercado laboral. No están para eso. Están para que, llegue o no llegue la caja de cartón, la respuesta a «quién eres» no la tenga que redactar un departamento de recursos humanos.

## El solar limpio

Vuelve por un momento a la escena del principio: sesenta mil personas con una oferta sobre la mesa, una caja de cartón, un carné que pronto dejará de abrir puertas. Es una escena triste en muchos casos, y sería deshonesto adornarla. Pero también es, en sentido estricto, lo que Nietzsche llamó un solar limpio: el lugar donde ya no vale fingir que el valor viejo sigue en pie.

En ese solar se puede hacer lo de siempre —buscar otro mástil al que atarse, otra etiqueta que responda por ti— o se puede hacer lo difícil: quedarse un rato en la pregunta, averiguar qué cuenta como bien gastado un día, y empezar a construir una respuesta que no quepa en un carné de empresa. No es épico. Es una mañana, una libreta, una conversación honesta, un hábito pequeño repetido hasta que tiene forma de vida.

Nietzsche escribió *Así habló Zaratustra* en ráfagas, caminando solo entre Sils Maria y el mar, sin empleo, sin lectores y sin saber que acabaría siendo uno de los libros más leídos de la historia. No tenía ninguna garantía. Tenía, en cambio, algo que ninguna empresa puede ofrecerte ni quitarte: una respuesta propia a la pregunta de quién era. Esa respuesta es el único puesto fijo que existe. Y la buena noticia —la única que de verdad importa en una mañana como la de hoy— es que se puede empezar a construir esta misma tarde.

{{img:3}}

---

*Fuentes de la noticia: [Euronews](https://www.euronews.com/2026/10/26) y [El País](https://elpais.com/hemeroteca/2026-10-26/2/). Sobre Nietzsche, la [Enciclopedia de Filosofía de Stanford](https://plato.stanford.edu/entries/nietzsche/). Si este tema te interesa, sigue con [el agotamiento y los estoicos](/ensayos/estoicismo-contra-el-burnout), [Diógenes y el dinero](/ensayos/diogenes-dinero-suficiente), [Sartre y las decisiones](/ensayos/decidir-sin-garantias-sartre) o [Camus y el tiempo](/ensayos/camus-absurdo-rutina).*
`,
};

export default post;
