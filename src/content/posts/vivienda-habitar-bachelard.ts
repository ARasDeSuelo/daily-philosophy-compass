import type { Post } from "../types";
import hero from "@/assets/posts/habitar/hero.jpg";
import i1 from "@/assets/posts/habitar/1.jpg";
import i2 from "@/assets/posts/habitar/2.jpg";
import i3 from "@/assets/posts/habitar/3.jpg";
import i4 from "@/assets/posts/habitar/4.jpg";

const post: Post = {
  slug: "vivienda-habitar-bachelard",
  title:
    "Sin un lugar propio: la crisis de la vivienda, la ansiedad de no echar raíces y lo que Bachelard enseña sobre habitar",
  seoTitle: "Crisis de la vivienda y ansiedad: Bachelard y habitar",
  description:
    "Acampadas en Sol y Lisboa, huelgas por vivienda en Grecia. La fenomenología de Bachelard explica por qué perder la casa duele tanto y cómo habitar igualmente.",
  excerpt:
    "De la Puerta del Sol a Lisboa y Atenas, miles de personas protestan porque no pueden pagar un techo. Detrás de la cifra del alquiler hay una herida más honda: la de no poder echar raíces. Gaston Bachelard escribió que la casa es nuestro primer universo. ¿Qué pasa cuando ese universo es prestado?",
  date: "2026-10-21",
  tema: "identidad-y-proposito",
  escuela: "fenomenologia",
  hero: {
    src: hero,
    alt: "Mujer joven sentada sobre una caja de mudanza en un piso de alquiler vacío al atardecer, con unas llaves en la mano junto a la ventana",
  },
  images: [
    {
      src: i1,
      alt: "Tiendas de campaña de una acampada pacífica por la vivienda en una plaza europea de noche, con personas conversando bajo las farolas",
      caption: "Plazas convertidas en casa provisional: la protesta habla de techo, pero también de pertenencia.",
    },
    {
      src: i2,
      alt: "Sección de una casa antigua con un desván acogedor iluminado por una lámpara de lectura y un sótano oscuro debajo",
      caption: "Para Bachelard, el desván y el sótano son dos formas de soñar dentro de una casa.",
    },
    {
      src: i3,
      alt: "Manos colocando una planta pequeña, una fotografía y una lámpara en la estantería de una habitación compartida y modesta",
      caption: "Habitar empieza con gestos pequeños, incluso en un cuarto que no es tuyo.",
    },
    {
      src: i4,
      alt: "Vecinos compartiendo una comida en la azotea de un edificio al atardecer, entre cuerdas de tender y tejados de la ciudad",
      caption: "Un hogar también se construye hacia fuera: con la escalera, el barrio y los vecinos.",
    },
  ],
  body: `Es domingo por la noche y estás mirando anuncios de pisos otra vez. Ya conoces el ritual: filtras por precio, el mapa se queda casi vacío, subes el máximo cien euros, aparecen tres opciones más, una de ellas es un interior sin ventana "ideal para estudiantes". Cierras la aplicación. Miras la habitación en la que vives: las paredes que no puedes pintar, la estantería del casero, las cajas que nunca terminaste de deshacer porque, total, quizá el año que viene toque mudarse otra vez.

Lo que sientes en ese momento no es solo preocupación económica. Es algo más difuso y más profundo, una especie de intemperie interior. No tienes dónde echar raíces. Y aunque nadie lo diga así, esa sensación afecta a cómo duermes, a cómo te relacionas, a si te atreves a tener un perro, una pareja estable o un proyecto a largo plazo.

Este ensayo parte de una noticia de esta semana y de una pregunta filosófica antigua: ¿qué es, en realidad, una casa? La respuesta que dio el filósofo francés Gaston Bachelard a mediados del siglo XX puede ayudarte a entender por qué la crisis de la vivienda duele tanto, y también qué parte de "habitar" sigue estando en tus manos aunque el contrato de alquiler no lo esté.

## Una semana de tiendas de campaña

En los últimos días, la vivienda ha dejado de ser un tema de páginas económicas para convertirse en una imagen: tiendas de campaña en el centro de las ciudades. En Madrid, la acampada por la vivienda en la Puerta del Sol sigue siendo noticia; [Antena 3 Noticias informaba este 21 de octubre](https://www.antena3.com/noticias/sociedad/noticias-hoy-miercoles-21-octubre-2026_202610216ad8859a0f5414177237f63b.html) de la polémica sobre su estado nocturno y de las quejas de sindicatos policiales. En Lisboa, según el resumen de [Euronews del 21 de octubre](https://es.euronews.com/video/2026/10/21/ultimas-noticias-21-octubre-2026-mediodia), el desalojo de otra acampada por la vivienda dejó dos heridos y alrededor de cincuenta detenidos, que después fueron liberados.

No es solo la península. En Grecia, docentes y estudiantes han salido a la calle en una huelga de 24 horas para pedir mejores salarios y viviendas dignas en los lugares donde trabajan, y en Francia las protestas contra el coste de la vida han obligado al Gobierno a reunirse con los sindicatos, según recogen los [temas del día de la agencia EFE](https://www.infobae.com/america/agencias/2026/10/21/temas-del-dia-de-efe-internacional-del-miercoles-21-de-octubre-0200-gmt/).

{{img:0}}

No hace falta tomar partido sobre cada una de estas protestas para notar lo que tienen en común. Personas muy distintas, en países distintos, están diciendo lo mismo: no podemos pagar un lugar donde vivir cerca de donde vivimos nuestra vida. Y es significativo que la forma de protesta elegida sea precisamente instalarse, dormir, ocupar un espacio. Cuando no tienes casa, reclamas el derecho a habitar habitando.

## La vivienda no es solo un precio

Cuando se habla de este problema, la conversación suele quedarse en números: euros por metro cuadrado, porcentaje del sueldo dedicado al alquiler, años de ahorro para la entrada de una hipoteca. Son datos importantes y no conviene restarles peso. Pero si te quedas solo con ellos, no entiendes del todo por qué la falta de vivienda genera una angustia tan particular, distinta de otras dificultades económicas.

Piensa en la diferencia entre no poder permitirte unas vacaciones y no saber dónde vivirás dentro de un año. Lo primero es una renuncia. Lo segundo afecta al suelo mismo sobre el que construyes todo lo demás. Una casa no es un objeto que consumes, como un coche o un teléfono. Es el lugar desde el que haces todo lo demás: donde descansas, donde vuelves, donde guardas tu memoria. Cuando ese lugar es inestable, la inestabilidad se filtra en todo.

Esto es exactamente lo que estudia una corriente filosófica llamada **fenomenología**: no cómo son las cosas "objetivamente", medidas desde fuera, sino cómo se viven desde dentro. Y pocos fenomenólogos han pensado la casa con tanta delicadeza como Gaston Bachelard.

## Gaston Bachelard, el filósofo que escuchaba a las casas

Bachelard (1884-1962) tuvo una biografía poco habitual para un filósofo. Fue empleado de correos, profesor de física y química en un instituto de provincias y, ya mayor, catedrático en la Sorbona. Empezó escribiendo sobre la filosofía de la ciencia y terminó escribiendo sobre la imaginación, el fuego, el agua y los sueños. En 1957 publicó *La poética del espacio*, un libro extraño y luminoso que dedica sus primeros capítulos a algo tan cotidiano como una casa.

La tesis de Bachelard es sencilla de enunciar y difícil de olvidar: **la casa es nuestro rincón del mundo, nuestro primer universo**. Antes de ser arrojados al mundo, escribe, somos depositados en la cuna de una casa. La casa no es solo un refugio físico contra la lluvia; es el espacio que nos permite soñar en paz. "La casa alberga el ensueño, la casa protege al soñador", dice en uno de sus pasajes más citados.

Para entender lo que quiere decir, Bachelard recorre la casa de arriba abajo. El **desván** es el lugar de los sueños claros y racionales, donde la luz entra y se ven las vigas. El **sótano** es el lugar de los miedos oscuros, lo que no se ve pero sostiene. Los cajones, los armarios, los cofres son lugares de intimidad, donde guardamos lo que no queremos mostrar. Hasta los rincones tienen su filosofía: el niño que se esconde en un rincón está construyendo, por un momento, su propia casa dentro de la casa.

{{img:1}}

Si quieres profundizar, la [entrada sobre Bachelard en la Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/bachelard/) resume muy bien cómo pasó de la epistemología de la ciencia a la poética de la imaginación, y por qué ambas mitades de su obra no están tan separadas como parece.

## Por qué perder la casa duele en lugares que no son el bolsillo

Leído desde hoy, Bachelard ayuda a nombrar algo que la crisis de la vivienda provoca y que las estadísticas no captan. Si la casa es el espacio que protege el ensueño, entonces vivir sin casa estable no significa solo gastar demasiado: significa **no tener dónde soñar tranquilo**.

Es muy difícil imaginar un futuro cuando el presente se renueva cada doce meses en un contrato. Es difícil sentir que una habitación es tuya si no puedes clavar un clavo en la pared. Y es difícil construir intimidad, en el sentido profundo de Bachelard, si cada pocos años tienes que meter tu vida en cajas, elegir qué tirar y empezar de cero en otro barrio donde no conoces a nadie.

Otro fenomenólogo, Martin Heidegger, pronunció en 1951 una conferencia titulada *Construir, habitar, pensar*, en la que sostenía que habitar no es simplemente ocupar un alojamiento, sino la manera en que los seres humanos estamos en la tierra. Para Heidegger, la verdadera crisis de la vivienda no era solo la falta de pisos, sino que habíamos olvidado lo que significa habitar. No hace falta suscribir toda su filosofía —ni pasar por alto los aspectos oscuros de su biografía— para reconocer la intuición: el problema de la casa es también un problema de **pertenencia**.

Y Maurice Merleau-Ponty, desde la misma tradición, insistía en que no "tenemos" un cuerpo como quien tiene un objeto, sino que somos cuerpo, y que nuestro cuerpo se acostumbra a los espacios hasta incorporarlos. Por eso, cuando te mudas, durante semanas buscas el interruptor en la pared equivocada. Tu cuerpo todavía vive en la casa anterior. La [entrada sobre Merleau-Ponty en la Stanford Encyclopedia](https://plato.stanford.edu/entries/merleau-ponty/) explica esta idea del hábito corporal con detalle. Cada mudanza forzada es, en ese sentido, una pequeña amputación: obliga al cuerpo a desaprender un mundo.

## La generación de las cajas sin deshacer

Hay un gesto que se repite en muchas personas jóvenes que alquilan: no terminan nunca de instalarse. Los cuadros siguen apoyados en el suelo. La ropa de otra temporada sigue en la maleta. Se compran muebles baratos "para salir del paso". Es una estrategia racional —¿para qué invertir en un espacio que puedes perder?— pero tiene un coste: vivir siempre de paso.

Desde la fenomenología, esto se puede describir como **habitar en modo provisional**. No es que no tengas casa; es que tu manera de estar en ella es la de un huésped. Y un huésped no sueña en la casa del anfitrión, como diría Bachelard; solo duerme.

Esta provisionalidad conecta con otros temas que hemos tratado en el blog. La sensación de vivir siempre en espera se parece mucho a la que describe Camus cuando habla de [la rutina y el absurdo](/ensayos/camus-absurdo-rutina): la vida aplazada para "cuando las cosas mejoren". Y la presión económica que la acompaña tiene mucho que ver con lo que discutimos a propósito de [Diógenes y la pregunta de cuánto dinero es suficiente](/ensayos/diogenes-dinero-suficiente).

## Lo que Bachelard no puede resolver (y conviene decirlo)

Antes de seguir, una advertencia honesta. Sería profundamente injusto convertir esta reflexión en un consejo del tipo "no necesitas una casa, necesitas una actitud". La filosofía no paga alquileres, y cualquier texto que te diga que la solución a la crisis de la vivienda está solo en tu interior te está tomando el pelo.

**La vivienda es, ante todo, un problema político y económico.** Depende de leyes, de urbanismo, de impuestos, de inversión pública y de decisiones colectivas. Las personas que protestan en las plazas no están pidiendo ejercicios de atención plena; están pidiendo condiciones materiales. La fenomenología puede ayudarte a entender lo que está en juego, pero no sustituye a la acción colectiva ni a las políticas públicas.

**Tampoco todas las situaciones son iguales.** No es lo mismo compartir piso a los veintiséis años por elección que verse en la calle tras un desahucio. Hay personas para quienes "habitar en modo provisional" es un lujo comparado con no tener techo. Cualquier práctica personal que propongamos aquí tiene sentido solo para quien, al menos, tiene un lugar donde dormir esta noche.

**Y hay un riesgo de romantizar la casa.** Bachelard escribe desde una experiencia de casa protectora que no todo el mundo tuvo. Para algunas personas, la casa de la infancia fue un lugar de miedo, no de ensueño. La filósofa Iris Marion Young criticó precisamente esta idealización y defendió que el valor del hogar está en la posibilidad de tener un espacio propio para preservar la identidad, no en la nostalgia de una casa perfecta.

Dicho esto, entender qué significa habitar sí puede ayudarte en dos frentes: a cuidar lo que puedes cuidar mientras tanto, y a saber con más claridad qué es lo que estás reclamando cuando reclamas una vivienda.

## Habitar no es lo mismo que poseer

Aquí está la idea más útil de Bachelard para el día a día: **la intimidad de una casa no depende de las escrituras, sino de la relación que construyes con el espacio**. Un niño puede convertir el hueco bajo una mesa en un castillo. Un estudiante puede hacer de una habitación de doce metros el lugar donde por fin se siente él mismo. La propiedad da seguridad —y la seguridad importa muchísimo—, pero el acto de habitar es otra cosa.

{{img:2}}

Bachelard insiste en que los objetos pequeños tienen un poder enorme. Un cajón donde guardas cartas, una lámpara que siempre enciendes al volver, una taza que es "la tuya". Son lo que él llama espacios de intimidad, y no requieren metros cuadrados. Requieren repetición, cuidado y algo de ensueño.

Esto no niega la injusticia de no poder pagar un piso. La complementa. Puedes luchar por un derecho y, a la vez, negarte a vivir mientras tanto como un huésped en tu propia vida. Ambas cosas son compatibles; de hecho, se refuerzan. Quien habita de verdad un lugar sabe mejor qué es lo que está defendiendo.

## La casa también está fuera de la casa

Hay un último matiz importante. Para la fenomenología, el espacio vivido no termina en la puerta. Tu casa incluye el camino a la panadería, el banco del parque donde te sientas, el bar donde ya saben lo que vas a pedir, la vecina que te recoge los paquetes. Cuando una ciudad expulsa a sus vecinos hacia la periferia, no solo les quita un piso: les quita ese tejido de lugares conocidos que hace que un barrio sea "el tuyo".

Por eso las acampadas tienen algo de paradójico y de revelador: personas que no pueden pagar una casa construyen, durante unos días, una comunidad en una plaza. Se reparte comida, se hacen turnos, se conversa por la noche. Es una forma precaria y extrema de algo que todos necesitamos: un lugar donde no estar solos.

{{img:3}}

Si la soledad es parte de lo que sientes cuando piensas en tu situación de vivienda, quizá te interese el ensayo sobre [la amistad según Epicuro](/ensayos/soledad-amistad-epicuro), que defendía que no se puede vivir bien sin un círculo de amigos cercanos, y que fundó su escuela precisamente en una casa con jardín compartido.

## Qué puedes hacer esta semana

Ninguna de estas propuestas resuelve el problema de fondo. Están pensadas para ayudarte a habitar mejor mientras tanto, y para que la inestabilidad no te robe también el presente.

**1. Deshaz una caja.** Literalmente. Elige una de esas cajas que siguen cerradas "por si acaso" y coloca su contenido. Cuelga ese cuadro aunque sea con cinta adhesiva removible. El mensaje que te das a ti mismo es importante: vivo aquí ahora, aunque no sea para siempre.

**2. Crea un rincón bachelardiano.** No necesitas una habitación entera. Basta con una esquina, una silla, una lámpara y algo que te importe: un libro, una planta, una fotografía. Un lugar al que volver cada día para leer, pensar o simplemente estar. Bachelard diría que es tu manera de recuperar el derecho al ensueño.

**3. Habita el barrio, no solo el piso.** Aprende el nombre de alguien en tu escalera. Elige una cafetería y vuelve. Camina por las calles cercanas sin destino. Cuanto más tejido de lugares conocidos construyas, menos frágil te sentirás, aunque el contrato siga siendo temporal.

**4. Separa la angustia del problema.** Escribe en un papel qué parte de tu situación de vivienda depende de ti (ahorrar, buscar, informarte de tus derechos como inquilino, organizarte con otras personas) y qué parte no (el precio del mercado, las leyes). Esta distinción, que los estoicos convirtieron en el centro de su filosofía —lo vimos en el ensayo sobre [el estoicismo contra el burnout](/ensayos/estoicismo-contra-el-burnout)—, no hace desaparecer el problema, pero evita que cargues con todo como si fuera culpa tuya.

**5. No te quedes solo con el problema.** La falta de vivienda tiende a vivirse con vergüenza, como un fracaso personal. No lo es. Hablar de ello con amigos, unirte a una asociación de inquilinos o simplemente compartir lo que te pasa convierte una angustia privada en una cuestión común, que es lo que realmente es.

## El derecho a soñar en paz

Bachelard escribió que, si le pidieran nombrar el beneficio más precioso de la casa, diría que la casa alberga el ensueño. Leída hoy, la frase suena casi política. Lo que está en juego en la crisis de la vivienda no es solo el dinero ni los metros cuadrados. Es el derecho de millones de personas a tener un lugar desde el que imaginar su vida sin miedo.

Mientras ese derecho se discute en parlamentos y plazas, hay algo que nadie te puede quitar: la capacidad de convertir el espacio que tienes, por pequeño y provisional que sea, en un lugar habitado de verdad. No es un consuelo que sustituya a una casa digna. Es una forma de no renunciar a ti mientras luchas por ella.

Si quieres seguir pensando sobre quién eres y qué quieres construir, visita la sección de [identidad y propósito](/temas/identidad-y-proposito), descubre más sobre la [fenomenología](/escuelas/fenomenologia) o lee el ensayo sobre [cómo decidir sin garantías con Sartre](/ensayos/decidir-sin-garantias-sartre), útil cuando toca elegir entre opciones que ninguna es perfecta.`,
};

export default post;
