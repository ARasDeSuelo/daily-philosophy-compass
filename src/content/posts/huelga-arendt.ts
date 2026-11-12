import type { Post } from "../types";
import hero from "@/assets/posts/huelga-arendt/hero.jpg";
import i1 from "@/assets/posts/huelga-arendt/1.jpg";
import i2 from "@/assets/posts/huelga-arendt/2.jpg";
import i3 from "@/assets/posts/huelga-arendt/3.jpg";
import i4 from "@/assets/posts/huelga-arendt/4.jpg";

const post: Post = {
  slug: "huelga-general-11n-arendt-trabajar-actuar",
  title: "Huelga general: lo que cambia cuando dejas de trabajar y empiezas a actuar",
  seoTitle: "Huelga general 11N y Hannah Arendt: trabajar no es actuar",
  description: "La huelga general del 11 de noviembre llenó las calles bajo la lluvia. Hannah Arendt ayuda a entender qué pasa cuando alguien deja de trabajar y empieza a actuar.",
  excerpt: "Ayer España vivió su primera huelga general en catorce años y hoy discute las cifras. Arendt distinguió trabajar para vivir de actuar en común: esa diferencia explica mejor la jornada que cualquier recuento.",
  date: "2026-11-12",
  tema: "agotamiento-y-trabajo",
  escuela: "fenomenologia",
  hero: { src: hero, alt: "Ilustración de una manifestación pacífica bajo la lluvia en una plaza española al atardecer, con paraguas y carteles de cartón con dibujos de casas" },
  images: [
    { src: i1, alt: "Cocina humilde con cajas de mudanza a medio hacer, unas llaves sobre la mesa y un pueblo visible por la ventana", caption: "Una casa no es solo un bien: es el lugar desde el que puedes salir al mundo. Ilustración original." },
    { src: i2, alt: "Fábrica vacía de noche con el abrigo de un trabajador colgado y una multitud con paraguas vista a través de la ventana", caption: "El puesto de trabajo vacío y la calle llena son dos caras del mismo gesto. Ilustración original." },
    { src: i3, alt: "Dos personas comentando en un café un periódico con gráficos de barras, con la lluvia cayendo tras la ventana", caption: "La guerra de cifras también forma parte de la huelga: cada bando cuenta lo que le conviene ver. Ilustración original." },
    { src: i4, alt: "Calle empedrada al amanecer con carteles de cartón apoyados en una pared y un panadero subiendo la persiana de su tienda", caption: "La mañana siguiente es la pregunta de verdad: qué queda cuando los carteles se apoyan contra la pared. Ilustración original." },
  ],
  body: `
Quizá ayer fuiste a trabajar como cada día. Quizá te quedaste en casa y perdiste el salario de la jornada. Quizá saliste a la calle bajo la lluvia con un cartel pintado a mano. O quizá miraste todo desde lejos, con esa mezcla de simpatía y cansancio que producen las noticias que parecen decididas sin ti. Hoy, hagas lo que hicieras, te toca escuchar la misma discusión: unos dicen que la huelga fue un éxito histórico y otros que fue un fracaso absoluto, y ambos lo dicen con cifras en la mano.

El miércoles 11 de noviembre de 2026 España vivió su primera huelga general en catorce años, convocada por CCOO y UGT a instancias del Sindicato de Inquilinas, para reclamar vivienda digna y mejores salarios. La jornada terminó con manifestaciones multitudinarias en todo el país, un seguimiento desigual y medio centenar de detenidos, según el balance de EFE. [1](https://efe.com/espana/2026-11-11/seguimiento-huelga-general-11n-manifestaciones/)

La convocatoria tiene una fecha de origen que conviene recordar. Se anunció la misma jornada en que falleció Maricarmen Abascal, la mujer de 87 años que había sido desahuciada poco antes en Madrid. Su nombre se escuchó ayer en las marchas, junto a consignas contra el rentismo y peticiones de blindar el derecho a la vivienda. La huelga llega además en vísperas de la campaña electoral del 29-N y un día antes de que el Congreso vote de nuevo los decretos ley de vivienda. [2](https://www.eleconomista.es/actualidad/noticias/14027203/11/26/la-guerra-de-cifras-en-la-huelga-general-del-11-de-noviembre-2026-los-sindicatos-cantan-victoria-y-la-patronal-habla-de-fracaso.html)

Este ensayo no va a darte otra cifra. Va a proponerte una pregunta distinta, la que formuló hace décadas una filósofa que se pasó la vida pensando qué significa trabajar y qué significa actuar: Hannah Arendt. Su distinción entre trabajo y acción puede ayudarte a entender qué pasó ayer mejor que cualquier recuento, y también a entender qué lugar ocupa tu propio trabajo en tu propia vida.

{{img:0}}

## La casa como puerta de salida al mundo

Empieza por la vivienda, porque ahí empezó todo. Cuando alguien pierde su casa no pierde solo un techo. Pierde la dirección donde le llegan las cartas, la cocina donde discute con su familia, el cuarto donde enferma sin ser molestado. Pierde, dicho de forma casi técnica, su escondite.

Arendt dedicó buena parte de *La condición humana* a distinguir lo privado de lo público. Lo privado no era para ella un lujo ni un refugio burgués: era la condición que te permite aparecer ante los demás como alguien. Para hablar en la plaza necesitas un lugar del que volver, un sitio donde tu vida no está expuesta a la mirada de todos. La entrada de la Stanford Encyclopedia of Philosophy sobre Arendt explica cómo esta distinción entre el ámbito privado y el espacio público estructura toda su teoría de la acción. [3](https://plato.stanford.edu/entries/arendt/)

Con esa lente, una crisis de vivienda no es solo un problema económico. Es una amenaza sobre la capacidad misma de participar en la vida común. Quien no sabe si el mes que viene seguirá en su piso vive con una parte de la atención secuestrada: no puede planear, no puede arriesgar, no puede permitirse perder un día de salario para protestar por el piso que teme perder. Ya escribimos aquí, a propósito de Gaston Bachelard, que [una casa es también una forma de habitar el mundo](/ensayos/vivienda-habitar-bachelard), no una mercancía con paredes. La muerte de Maricarmen después de su desahucio convirtió esa idea abstracta en un nombre propio, y ese nombre es parte de lo que llenó las calles ayer.

Si en algún momento te has preguntado por qué una huelga por la vivienda moviliza a gente que tiene su alquiler al día, ahí puede estar la respuesta: no defienden solo un contrato, defienden la puerta desde la que se sale a todo lo demás.

## Trabajar para vivir no es lo mismo que actuar

Aquí llega la distinción central. Arendt separó tres actividades que solemos amontonar bajo la palabra trabajo. La primera es el *labor*: lo que haces para sostener la vida, comer, pagar, repetir mañana. No deja monumento ni historia; se consume en el momento, como el pan que amasa el panadero. La segunda es la *obra*: fabricar cosas que permanecen, desde una mesa hasta una ley. La tercera es la *acción*: hablar y actuar junto a otros, en presencia de otros, empezando algo cuyo final nadie controla.

Tu nómina pertenece al primer territorio. Tu carpeta de proyectos, al segundo. Pero ayer, en las calles de Madrid, Barcelona, Valencia o Bilbao, ocurrió algo del tercer tipo: personas que dejaron de trabajar precisamente para aparecer juntas en público y decir algo que ninguna podía decir sola. Esa es la paradoja de toda huelga general, y Arendt la hace visible: el gesto consiste en interrumpir el trabajo para ejercer la acción. El puesto vacío y la calle llena son el mismo gesto visto desde dos lados.

Fíjate en que esta distinción no es un juego de salón. Te dice cosas prácticas sobre tu semana. Hay días enteros que pasan en el primer territorio: produces, respondes, pagas, y al acostarte no queda nada que contar. Hay días en los que fabricas algo que permanece un poco: un mueble arreglado, un documento que alguien usará, una cena que quedará en la memoria de tus hijos. Y hay días, muy pocos, en los que dices o haces algo ante otros que cambia la relación entre vosotros: una palabra necesaria, una decisión compartida, un no dicho a tiempo. La mayoría de la gente no necesita más horas de trabajo; necesita que algunas de sus horas pertenezcan a los otros dos territorios.

Esto también explica por qué una huelga se siente tan distinta desde dentro que desde la estadística. Quien participa no experimenta un porcentaje: experimenta el extrañamiento de verse entre desconocidos que sostienen el mismo cartel, la conversación con el vecino de manifestación, la lluvia compartida. La acción, en Arendt, es lo único que no se puede hacer en solitario. Por eso las fotos de ayer no muestran cifras: muestran personas mirándose unas a otras.

Y hay una consecuencia incómoda. Si pasas toda tu vida en el primer territorio, trabajando para vivir y viviendo para trabajar, la parte de ti que actúa se atrofia. No es una metáfora: es la descripción de un cansancio que mucha gente reconoce sin saber nombrarlo. Lo tratamos cuando hablamos del [burnout y del estoicismo](/ensayos/estoicismo-contra-el-burnout), y también cuando contamos cómo [Microsoft convirtió el descanso en otra métrica de rendimiento](/ensayos/microsoft-trabajo-nietzsche). La huelga de ayer fue, entre otras cosas, un recordatorio colectivo de que el trabajo no agota lo que eres.

{{img:1}}

## La guerra de cifras: dos formas de mirar la misma calle

Hoy amanece con un espectáculo previsible: la guerra de cifras. La patronal CEOE cifró el seguimiento en menos del 5 % y habló de fracaso, apoyándose en que la demanda eléctrica fue similar a la del día anterior. Los sindicatos hablaron de éxito, con seguimientos que según CCOO llegaron al 84 % en Cataluña y al 70 % en Andalucía, Madrid o Aragón. El Sindicato de Inquilinas llegó a hablar de cuatro o cinco millones de huelguistas. El consumo eléctrico, según el análisis de Euronews, refleja un seguimiento menor que en las dos huelgas generales de 2012. [4](https://es.euronews.com/2026/11/12/fuerza-en-la-calle-pero-seguimiento-escaso-en-el-trabajo-la-huelga-general-del-11n)

Las cifras por sector muestran el mapa desigual: según los datos sindicales recogidos por El Plural, el paro llegó al 90 % en la automoción, al 85 % en la industria cárnica y al 82 % en la recogida de basuras, mientras que en los servicios sociosanitarios, con servicios mínimos, fue del 38 % y en el sector postal del 35 %. [5](https://www.elplural.com/politica/espana/sindicatos-cifran-entre-41-75-seguimiento-huelga-general-participacion-hasta-80-madrid_803899102)

¿Quién miente? Posiblemente nadie, y ahí está el problema. Cada parte mide una cosa distinta y la presenta como si fuera la única. La demanda eléctrica mide máquinas encendidas, no convicciones. La asistencia a una manifestación mide presencia en una calle a una hora, no el país entero. El seguimiento por sector mezcla voluntad, miedo al descuento salarial, servicios mínimos y presión de los piquetes. Ninguna de esas mediciones captura lo que Arendt llamaría el acontecimiento: el hecho de que cientos de miles de personas decidieran, el mismo día, que el precio de la vivienda era asunto suyo.

Esto no significa que las cifras no importen. Significa que conviene saber qué miden antes de pelearse por ellas. Cuando alguien te diga hoy que la huelga fue un éxito o un fracaso, pregúntale qué está contando: máquinas paradas, personas en la calle, salarios descontados o titulares ganados. Son cuatro historias diferentes, y las cuatro ocurrieron a la vez.

## Lo que la acción tiene de imprevisible

Arendt insistía en una propiedad incómoda de la acción: nadie controla su resultado. Quien empieza algo en público lanza un proceso que escapa a sus manos, porque depende de las respuestas de otros. La huelga de ayer es un ejemplo de manual. La convocó un movimiento de inquilinas después de un desahucio; la secundaron los grandes sindicatos; terminó con la ministra de Trabajo, Yolanda Díaz, declarando que «las calles han hablado alto y claro», con el PP llamándolo fracaso, con cargas policiales en la Gran Vía y con la campaña electoral del 29-N empezando esta misma medianoche bajo su sombra. [6](https://elpais.com/espana/2026-11-12/ultima-hora-de-la-actualidad-politica-en-directo.html)

Nadie que firmó la convocatoria podía prever esa cadena completa. Tampoco podía prever que llovería, que la borrasca Charles cruzaría el país justo ese día, y que aun así la gente saldría. La acción política tiene esa estructura de apuesta: se parece más a empezar una conversación difícil que a ejecutar un plan. Quien exige conocer el resultado antes de moverse está pidiendo que la acción sea obra, que el futuro se comporte como una mesa ya diseñada. Esa exigencia, llevada a tu vida, es una de las formas más respetables de la parálisis. Ya lo vimos aquí al hablar de [votar sin certezas con William James](/ensayos/votar-sin-certezas-william-james): esperar a tener garantías antes de actuar es una forma elegante de no actuar nunca.

Esto vale también para tu escala. Hay gestos pequeños con la misma estructura: decir en una reunión lo que todos callan, apuntarte a la asociación de vecinos, preguntar en tu empresa por una política que te parece injusta. Ninguno garantiza resultado. Todos comparten con la huelga una propiedad: te sacan del territorio del *labor*, donde solo repites, y te ponen en el territorio de la acción, donde empiezas algo cuyo final no controlas. La diferencia entre una vida que se consume y una vida que además ocurre suele estar en cuántas veces aceptas ese riesgo.

{{img:2}}

## La mañana siguiente

Hoy es la mañana siguiente. Los carteles están apoyados contra las paredes, el panadero ha subido la persiana, y cada uno ha vuelto a su puesto, o a su paro, o a su búsqueda. Es tentador pensar que nada ha cambiado: los alquileres siguen donde estaban, los decretos se votan hoy y nadie sabe si prosperarán, y dentro de dos semanas hay elecciones que absorberán toda la conversación.

Pero la pregunta de Arendt no era si la acción consigue sus objetivos. Era más sutil: qué queda en las personas que actuaron. Su respuesta tenía que ver con lo que llamaba el espacio entre los hombres, esa trama de relaciones que solo existe cuando la gente habla y actúa junta. Ayer, en medio de la lluvia, esa trama se hizo visible durante unas horas. Gente que no se conocía descubrió que compartía un problema y una palabra para nombrarlo. Eso no paga el alquiler, pero tampoco desaparece cuando se secan los paraguas: es la materia de la que están hechas las asociaciones, los sindicatos y, en el fondo, las democracias.

Tú no tenías que estar allí para que esto te concierna. La pregunta que deja la huelga no es solo política, es biográfica: ¿en qué parte de tu vida trabajas para vivir, y en qué parte actúas? ¿Cuándo fue la última vez que empezaste algo junto a otros, sin saber cómo terminaría? ¿Hay algo —en tu edificio, en tu trabajo, en tu barrio— que todos sufren en silencio y que solo cambiaría si alguien lo dijera en voz alta?

No hace falta una huelga general para responder. Hace falta, eso sí, reconocer que la vida no se agota en el trabajo que la sostiene, y que a veces la forma más seria de trabajar por tu vida es dejar, por un momento, de trabajar.

{{img:3}}

---

*Fuentes de actualidad: EFE, El Economista, Europa Press, Euronews, El Plural y El País, consultadas el 12 de noviembre de 2026. Las cifras de seguimiento y asistencia son las publicadas por cada medio y varían según la fuente, como explica el propio artículo. La lectura filosófica se apoya en la entrada sobre Hannah Arendt de la Stanford Encyclopedia of Philosophy. Si te interesa seguir pensando la vivienda como algo más que un mercado, lee [«Vivienda: la diferencia entre tener un techo y habitar un lugar»](/ensayos/vivienda-habitar-bachelard).*
`,
};

export default post;
