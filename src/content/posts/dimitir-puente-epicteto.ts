import type { Post } from "../types";
import hero from "@/assets/posts/dimitir-puente-epicteto/hero.jpg";
import i1 from "@/assets/posts/dimitir-puente-epicteto/1.jpg";
import i2 from "@/assets/posts/dimitir-puente-epicteto/2.jpg";
import i3 from "@/assets/posts/dimitir-puente-epicteto/3.jpg";
import i4 from "@/assets/posts/dimitir-puente-epicteto/4.jpg";

const post: Post = {
  slug: "dimitir-dignidad-puente-epicteto",
  title: "Dimitir sin ser culpable: lo que la renuncia de Óscar Puente enseña sobre el papel que te toca",
  seoTitle: "Dimitir sin ser culpable: Puente y Epicteto",
  description:
    "Óscar Puente dimitió «tenga o no responsabilidad directa». Epicteto explica por qué a veces irse es la última tarea bien hecha de un papel, también en tu trabajo.",
  excerpt:
    "Un ministro ha dimitido diciendo que quizá no tenga la culpa, pero que no puede seguir. Parece una contradicción. Para un estoico de hace diecinueve siglos era justo lo contrario: la forma más clara de entender qué es un cargo.",
  date: "2026-11-04",
  tema: "identidad-y-proposito",
  escuela: "estoicismo",
  hero: {
    src: hero,
    alt: "Sillón vacío de cuero verde junto a una larga mesa de madera pulida en un hemiciclo de escaños de terciopelo rojo, con una lámpara de latón encendida y una carta doblada sobre la mesa",
  },
  images: [
    {
      src: i1,
      alt: "Vía de alta velocidad en la llanura castellana al amanecer, con flores blancas, velas encendidas y lazos atados a una valla junto al trazado mientras pasa un tren entre la niebla",
      caption: "Las vías siguen funcionando al día siguiente. Lo que se rompe es otra cosa.",
    },
    {
      src: i2,
      alt: "Anciano barbudo con túnica sencilla y bastón, que evoca a Epicteto, contemplando una fila de máscaras teatrales griegas sobre un banco de piedra en un teatro antiguo al sol de la tarde",
      caption: "Para Epicteto, cada cargo es una máscara que te dan para una función: no eres tú, pero debes llevarla bien.",
    },
    {
      src: i3,
      alt: "Hombre trajeado que camina solo por un largo pasillo de mármol con una caja de cartón con fotos y objetos personales, bajo la luz del atardecer que entra por ventanales altos",
      caption: "Salir con la caja en las manos también es una forma de cumplir.",
    },
    {
      src: i4,
      alt: "Mujer con jersey claro sentada de noche a la mesa de la cocina escribiendo una nota a mano, con una taza de té y una acreditación de trabajo apartada junto a su cordón",
      caption: "La mayoría de las dimisiones no salen en el telediario: se escriben en una cocina.",
    },
  ],
  body: `
El martes 3 de noviembre de 2026, pasadas las nueve de la noche, el ministro de Transportes Óscar Puente cerró una comparecencia de más de cuatro horas en la Diputación Permanente del Congreso con una frase que nadie esperaba: dimitía. Seis días antes, el 28 de octubre, el choque de dos trenes de alta velocidad cerca de Urda (Toledo) había matado a 69 personas, nueve meses después del accidente de Adamuz (Córdoba), en la misma línea Madrid-Sevilla, con 46 fallecidos. [1](https://www.bbc.com/mundo/articles/c8vgx72kz764o)

Lo que hace interesante el gesto no es solo que se fuera, sino cómo explicó por qué se iba. «Un ministro de Transportes de un país como España no puede continuar en su cargo con dos accidentes de esta gravedad en menos de un año, por muy distintos que sean y tenga o no responsabilidad directa en ellos. Es una cuestión de dignidad política, coherencia y empatía con las víctimas», dijo. [2](https://www.lasexta.com/noticias/nacional/ministro-puente-dimite-comparecer-congreso-decision-dignidad-politica-buena-pais_202611036aea47d1004b78127abee7e2.html) Añadió que había tomado la decisión «en los primeros minutos» de la tragedia, camino del centro de control de Adif, y que se la contó primero a su familia. [3](https://www.eldiario.es/politica/sido-discurso-integro-oscar-puente-anunciado-dimision_1_13635810.html)

Este miércoles 4 de noviembre, el BOE publicaba su cese y el vicepresidente Carlos Cuerpo asumía el despacho de Transportes hasta las elecciones del 29 de noviembre. [4](https://www.boe.es/boe/dias/2026/11/04/) Las tertulias se han dividido en dos bandos previsibles: quienes ven un gesto de dignidad poco habitual y quienes lo ven tardío, calculado o insuficiente. Este ensayo no va a terciar en esa pelea, que es política y tiene sus propios tribunales. Va a quedarse con la frase, porque contiene una idea que casi nadie sabe manejar en su propia vida: **se puede tener que irse sin ser culpable**.

{{img:0}}

## La frase que parece una contradicción

Nuestra intuición moral funciona con una ecuación sencilla: si hiciste algo mal, pagas; si no lo hiciste, no tienes por qué pagar. Dimitir, en esa lógica, es una confesión. Por eso tantos cargos —públicos y privados— se aferran al puesto con la misma frase: «No he hecho nada malo, ¿por qué iba a irme?».

La frase de Puente rompe esa ecuación. Dice, en esencia: «Quizá no hice nada malo, y aun así me voy». A mucha gente le suena a teatro. Si no eres culpable, ¿por qué asumes una pena? Y si eres culpable, ¿por qué no lo dices?

Pero hay otra manera de leerla, y es más antigua que el parlamentarismo. La propuso un esclavo griego que llegó a ser uno de los maestros más influyentes de Roma: Epicteto. Para él, la pregunta «¿tengo la culpa?» no es la única pregunta importante sobre un cargo. A veces ni siquiera es la primera. La primera es otra: **¿qué exige el papel que me han dado?**

## Epicteto y las máscaras

Epicteto nació hacia el año 50 en Hierápolis, en la actual Turquía. Fue esclavo en Roma, cojo —según la tradición, por una lesión que le hizo su amo—, y tras ser liberado enseñó filosofía hasta que el emperador Domiciano expulsó a los filósofos de la ciudad. Se instaló en Nicópolis, en Grecia, y allí un alumno, Arriano, anotó sus clases. De esas notas salen las *Disertaciones* y el pequeño *Manual* (*Enquiridión*), que todavía se lee en una tarde. [5](https://plato.stanford.edu/entries/epictetus/)

Una de sus imágenes más conocidas es la del teatro. «Recuerda que eres actor de una obra, tal como la quiera el autor: breve, si la quiere breve; larga, si la quiere larga. Si quiere que representes a un mendigo, represéntalo con talento; y lo mismo si es un cojo, un magistrado o un particular. Porque lo tuyo es esto: representar bien el papel que se te ha dado; elegirlo corresponde a otro» (*Manual*, 17).

La palabra griega que usa es *prósopon*, que significa a la vez «rostro», «máscara» y «papel». Los estoicos posteriores la convirtieron en una pequeña teoría de la identidad: cada persona lleva varias máscaras a la vez. Eres ser humano, eres hijo o hija de alguien, eres vecino, ciudadano, trabajador de tal empresa, responsable de tal equipo. Cada papel trae sus deberes propios —los estoicos los llamaban *kathékonta*, lo que corresponde— y la vida moral consiste en buena parte en saber qué exige cada máscara en cada momento. [6](https://iep.utm.edu/epictetu/)

{{img:1}}

## Lo que depende de ti y lo que no

Antes de volver a la dimisión hay que recordar la otra gran idea de Epicteto, la que abre el *Manual*: «De las cosas, unas dependen de nosotros y otras no. Dependen de nosotros el juicio, el impulso, el deseo, el rechazo; en una palabra, todo lo que es obra nuestra. No dependen de nosotros el cuerpo, la hacienda, la reputación, los cargos; en una palabra, todo lo que no es obra nuestra» (*Manual*, 1).

Fíjate en el último elemento de la lista: **los cargos**. Para Epicteto, un puesto no es algo que «tienes», como tienes una opinión o una intención. Es algo que te prestan. Te lo dan otros, te lo pueden quitar otros, y dura lo que dura. Lo que sí es tuyo es la manera en que lo ejerces y la manera en que lo sueltas.

Aquí aparece la clave para leer la frase de Puente sin cinismo y sin ingenuidad. Que dos trenes choquen no depende enteramente de ningún ministro: depende de miles de decisiones técnicas, de inversiones de décadas, de turnos, de sistemas de señalización, de azar. La investigación dirá qué falló y quién debía haberlo evitado. Eso, en el sentido estoico, «no depende» de la persona que ocupa el despacho. Lo que sí depende de ella es qué hace con la máscara de ministro cuando ocurre lo que ha ocurrido.

Y la máscara de ministro de Transportes no es la de un ingeniero ni la de un maquinista. Es la de alguien que responde ante el país por el sistema entero. Cuando ese sistema falla dos veces de forma catastrófica en un año, el papel —no la persona— queda tocado. La gente ya no puede mirar esa máscara sin ver los muertos. Seguir llevándola, aunque uno no sea culpable de nada, puede impedir que la máscara cumpla su función, que es generar confianza en algo que nos lleva a 300 kilómetros por hora.

## Culpa y responsabilidad no son lo mismo

La filosofía moral contemporánea ha dedicado mucho esfuerzo a separar dos ideas que en el lenguaje común van pegadas. La **culpa** mira hacia atrás: pregunta qué hiciste y si fue reprochable. La **responsabilidad**, en uno de sus sentidos, mira hacia delante: pregunta qué te corresponde hacer ahora, dada la posición que ocupas. Un padre no tiene la culpa de que su hijo rompa un cristal del vecino, pero le toca responder. Una directora no ha escrito el código que tumbó la web, pero le toca dar la cara.

El filósofo Bernard Williams llamó «suerte moral» al hecho incómodo de que nuestra valoración de las personas depende a menudo de cosas que no controlaron. Dos conductores igual de despistados: uno llega a casa sin incidentes, el otro atropella a un niño que salió de detrás de un coche. Moralmente han hecho lo mismo; vitalmente, no. Williams describía lo que siente el segundo conductor con una palabra precisa: no culpa en sentido estricto, sino *agent-regret*, el pesar de quien fue el agente aunque no fuera el culpable. [7](https://plato.stanford.edu/entries/moral-luck/)

La dimisión de alguien que «tenga o no responsabilidad directa» se mueve en ese territorio. No es una confesión de culpa. Es el reconocimiento de que el papel que uno ocupaba está atado a un resultado, y de que hay resultados ante los cuales la única forma honesta de seguir cumpliendo el papel es dejarlo.

{{img:2}}

## Por qué cuesta tanto soltar un cargo

Si la lógica es tan clara, ¿por qué es tan raro verla en la práctica? En España, y no solo aquí, las dimisiones por responsabilidad política son poco frecuentes, y cuando ocurren suelen llegar tarde, arrancadas por una presión insoportable. Epicteto tenía una explicación psicológica muy fina, que vale igual para un ministro que para el encargado de una tienda.

El problema, decía, es que confundimos la máscara con la cara. Llevamos tanto tiempo con el papel puesto que creemos que somos el papel. Entonces perder el cargo se siente como perderse a uno mismo, y cualquier argumento para irse se vive como un ataque a la identidad. «Si dejo de ser ministro, director, jefa de equipo, ¿quién soy?».

Epicteto lo plantea con crudeza en las *Disertaciones*: nadie puede quitarte tu juicio ni tu carácter; lo demás —el puesto, el sueldo, el despacho, el coche oficial, el respeto que viene con el título— «no es tuyo», y aferrarte a ello te convierte en esclavo de quien tenga poder para dártelo o quitártelo. La libertad, para él, empieza justamente ahí: cuando eres capaz de devolver lo prestado sin sentir que te arrancan la piel.

Hay un detalle del discurso de Puente que, leído en clave estoica, es significativo: dice que tomó la decisión en los primeros minutos y que esperó a cumplir lo «más urgente e inaplazable» —las primeras pesquisas, las primeras medidas de seguridad, las ayudas a las víctimas— antes de hacerla pública. [8](https://www.abc.es/espana/momento-oscar-puente-comunicado-dimision-congreso-20261103212952-nt.html) Se puede discutir si esa espera fue prudente o si, al negar la dimisión en público durante días, añadió confusión. El propio *El País* subrayaba que la había negado reiteradamente hasta esa misma mañana. [9](https://elpais.com/espana/2026-11-03/oscar-puente-dimite-por-dignidad-quiero-estar-a-la-altura-de-mi-pais.html) Pero la estructura del gesto —terminar la tarea del papel y después soltarlo— es exactamente la que Epicteto habría recomendado: no abandones la escena a mitad de la frase; termina tu parlamento y sal.

## Las tres trampas de quien no se va

Si traducimos la lección a un lenguaje cotidiano, aparecen tres trampas que todos conocemos, porque las hemos visto en jefes, en compañeros y, si somos sinceros, en nosotros mismos.

**La trampa del inocente.** «No es culpa mía, así que no tengo por qué moverme». Es verdad a medias: puede que no sea culpa tuya y, aun así, que tu permanencia esté dañando aquello que tu papel debería proteger. El encargado de un turno en el que un compañero se lesiona gravemente, el coordinador de un proyecto que fracasa por motivos ajenos, la presidenta de una asociación que pierde la confianza de los socios por un error de la tesorera. La inocencia personal no responde a la pregunta del papel.

**La trampa del imprescindible.** «Si me voy ahora, será peor; nadie más puede arreglarlo». A veces es cierto, durante unos días. Casi nunca lo es durante meses. Epicteto recordaba a sus alumnos que la obra sigue cuando un actor sale; la ciudad no se hunde porque cambie un magistrado. Creerse imprescindible suele ser la forma más elegante de no querer soltar.

**La trampa del orgullo.** «Irme sería darles la razón a los que me atacan». Es la trampa más humana y la más peligrosa, porque convierte una decisión sobre el bien común en una pelea personal. Para el estoico, lo que digan los adversarios no depende de ti; lo que tú hagas, sí. Decidir quedarte solo para no dar el gusto a otros es dejar que tus enemigos gobiernen tus actos.

## No toda dimisión es virtuosa

Conviene ser justos con la complejidad. El estoicismo no dice que irse sea siempre lo correcto. Hay dimisiones que son huidas: personas que abandonan el papel justo cuando más se las necesita para no cargar con el desgaste de arreglar lo roto. Hay dimisiones tácticas: gestos calculados para salvar a otro, a un partido o una carrera futura. Y hay dimisiones que no cambian nada, porque el problema era estructural y se queda donde estaba. La periodista Neus Tomàs lo resumía en elDiario.es con un título que no necesita comentario: Puente debía dimitir, «pero eso no resuelve el problema». [10](https://www.eldiario.es/adelanto/4-de-noviembre-de-2026/)

Epicteto tampoco era ingenuo con esto. Su criterio no es «vete» ni «quédate», sino «¿qué exige el papel?». A veces el papel exige quedarse, aguantar el chaparrón y reparar. A veces exige irse para que otro pueda reparar con la confianza que tú ya no tienes. Lo que nunca exige es que decidas pensando en tu reputación, en tu sueldo o en tu orgullo, porque nada de eso es tuyo.

Hay una prueba sencilla para distinguir una dimisión honesta de una huida o de un cálculo: **¿quién sale ganando con tu salida?** Si la respuesta es «yo, porque me libro de un problema», sospecha. Si la respuesta es «yo, porque salvo mi carrera», sospecha más. Si la respuesta es «la institución, las personas a las que sirvo, la confianza en lo que hacemos juntos», probablemente estés ante una salida que el papel te pide.

{{img:3}}

## Tu propia dimisión

Casi nadie que lea esto será ministro. Pero casi todos tendremos que decidir alguna vez si soltamos un papel: dejar la presidencia de la comunidad de vecinos, renunciar a coordinar un equipo, apartarnos de un proyecto que lideramos, dejar de ser el que organiza la cena de Navidad, o, en el caso más duro, dejar un trabajo en el que algo grave ocurrió bajo nuestra responsabilidad.

Lo que hace difícil esas decisiones no es la falta de información, sino la mezcla de preguntas. Mezclamos «¿tengo la culpa?» con «¿qué pensarán?», con «¿de qué voy a vivir?», con «¿quién soy sin esto?». Epicteto propone separarlas y ordenarlas. Algunas preguntas son tuyas y otras no. Algunas importan para la decisión y otras solo para tu ansiedad.

En ese sentido, la escena del martes en el Congreso, más allá de la política, ofrece una lección práctica: es posible decir en voz alta «no sé si soy culpable, y aun así entiendo que no puedo seguir». Esa frase no es débil. Es una de las frases más adultas que puede pronunciar alguien con poder, precisamente porque separa su ego de su función.

## Un método estoico para decidir si sueltas un papel

Si estás ante una decisión parecida —grande o pequeña—, estas cuatro preguntas, ordenadas como lo haría un alumno de Epicteto, pueden ayudarte a pensarla con algo más de calma.

1. **Nombra el papel, no a la persona.** Escribe en una línea qué función cumples: «coordinar el turno de noche», «representar a los vecinos», «garantizar que este servicio sea seguro». Olvida por un momento tu nombre. Pregúntate qué necesita ese papel ahora mismo, no qué necesitas tú.
2. **Separa la culpa de la responsabilidad.** En una columna, lo que hiciste o dejaste de hacer y que te pueden reprochar con justicia. En otra, lo que ocurrió bajo tu cargo aunque no lo causaras. Las dos columnas cuentan, pero de forma distinta: la primera pide reparación y disculpa; la segunda puede pedir que te apartes.
3. **Termina la escena antes de salir.** Si decides irte, identifica qué tareas urgentes deben quedar hechas o traspasadas para que tu salida no deje a nadie peor: un relevo informado, un documento, una reunión con los afectados. Irse bien no es irse rápido; es irse sin dejar la frase a medias.
4. **Devuelve el préstamo sin pelear con él.** Repite, aunque suene raro, la fórmula de Epicteto: «Lo devuelvo». No «me lo quitan», no «me echan», no «me rindo». El cargo era prestado; tu carácter, no. Lo que te llevas en la caja de cartón es lo único que de verdad era tuyo.

Las víctimas de Urda y Adamuz, sus familias y los 34 heridos que, según las crónicas de este miércoles, siguen hospitalizados no van a encontrar consuelo en ninguna dimisión. Eso también lo sabía Epicteto: hay pérdidas ante las que ningún gesto basta. Lo que un gesto puede hacer es no añadir una segunda herida, la de ver que quienes tenían el papel de cuidar el sistema se agarran a él como si fuera suyo. [11](https://theobjective.com/espana/2026-11-04/sumario-tarde-limpia-cuerpo-adif-consulado-mexico/)

## Para seguir pensando

Si quieres leer el contexto de este ensayo, en [la espera tras el accidente de Urda desde Camus](/ensayos/urda-espera-camus) pensamos qué hace uno con la noticia cuando todavía no hay respuestas. Si lo que te pesa es una decisión que no termina de cerrarse, [decidir sin garantías con Sartre](/ensayos/decidir-sin-garantias-sartre) ofrece el contrapunto existencialista a la serenidad estoica. Y si sientes que tu cargo te está consumiendo, [el estoicismo contra el burnout](/ensayos/estoicismo-contra-el-burnout) aplica estas mismas herramientas al desgaste diario.

Tienes más textos en la sección de [identidad y propósito](/temas/identidad-y-proposito), en la escuela del [estoicismo](/escuelas/estoicismo) y en nuestra selección de [libros recomendados](/libros). El *Manual* de Epicteto está en dominio público; puedes leer una traducción completa en el [Proyecto Gutenberg](https://www.gutenberg.org/ebooks/45109) y, si quieres la versión breve, empezar por sus capítulos 1 y 17: con ellos tienes casi todo lo que necesita una persona que duda si debe irse.
`,
};

export default post;
