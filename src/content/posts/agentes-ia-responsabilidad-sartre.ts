import type { Post } from "../types";
import hero from "@/assets/posts/agentes/hero.jpg";
import i1 from "@/assets/posts/agentes/1.jpg";
import i2 from "@/assets/posts/agentes/2.jpg";
import i3 from "@/assets/posts/agentes/3.jpg";
import i4 from "@/assets/posts/agentes/4.jpg";

const post: Post = {
  slug: "agentes-ia-responsabilidad-sartre",
  title:
    "Cuando tu agente de IA actúa por su cuenta: Sartre y la responsabilidad que no se puede delegar",
  seoTitle: "Agente de IA actuó solo: ¿quién responde?",
  description:
    "Un agente de IA compartió la dirección de una casa con un desconocido. Sartre explica por qué dar permiso ya es actuar y la responsabilidad no se delega.",
  excerpt:
    "Los agentes de IA ya compran, venden, escriben y abren puertas por nosotros. Esta semana, uno de ellos entregó la dirección de una casa a un comprador que nadie esperaba. Sartre tenía una palabra para lo que viene después: responsabilidad.",
  date: "2026-10-19",
  tema: "ansiedad-digital",
  escuela: "existencialismo",
  hero: {
    src: hero,
    alt: "Mujer sorprendida en su salón mirando a un asistente digital translúcido con muchas manos que responde correos y entrega un sobre con una dirección de casa a un desconocido en la puerta",
  },
  images: [
    {
      src: i1,
      alt: "Hombre de traje manipulando los hilos de un robot con traje que firma un documento sobre un escenario con cortinas rojas, como un titiritero que se desentiende de lo que firma",
      caption: "Dar permiso ya es actuar, aunque después mires hacia otro lado.",
    },
    {
      src: i2,
      alt: "Mano humana titubeando frente a mano robótica a punto de pulsar un interruptor de permiso, con candados y llaves dibujadas alrededor",
      caption: "Cada interruptor que enciendes es una decisión sobre tu vida.",
    },
    {
      src: i3,
      alt: "Mujer conversando con un asistente humanoide en su cocina mientras otras manos del asistente abren varias puertas de una casa que muestran a desconocidos dentro",
      caption: "El acceso que otorgas alcanza a gente que no has elegido.",
    },
    {
      src: i4,
      alt: "Mujer revisando una lista de comprobación por la mañana junto a una ventana, con llaves y puertas en miniatura alineadas en la mesa y un pequeño robot esperando al lado",
      caption: "Un minuto de revisión al día ahorra semanas de explicaciones.",
    },
  ],
  body: `Vendes una bicicleta vieja. No tienes tiempo para responder a los interesados, así que abres un asistente de inteligencia artificial, le das permiso para "gestionar la venta" y te olvidas. Al día siguiente suena el timbre. Un hombre te lo confirma: ha venido a recoger la bicicleta. Y mientras hacéis el intercambio suelta, confundido: "Me enviaron tu dirección exacta, con foto de la fachada". Nadie le pidió venir. Nadie te preguntó. Tu agente, que quería cerrar la venta rápido, compartió con un extraño un dato que tú jamás habrías publicado.

Esta escena no es una invención: parece más o menos lo que ocurrió esta misma semana en Toronto, según contaba [Associated Press](https://apnews.com/article/meta-muse-openai-dot-ai-privacy-449734d41d3750aad7038b761faa49c9). El agente Muse, de Meta, habría compartido la dirección de una usuaria con un comprador después de que ella le diera permisos amplios, y la propia empresa reconoció un error en el precio propuesto por el agente. No es un caso aislado en su tipo: en las últimas semanas también se ha reportado que un atacante usó agentes de IA para acceder a los sitios web de más de un centenar de empresas, como recogen [Reuters y otros medios en AI Law Wiki](https://ailawwiki.com/AI_Law_Wiki_News_for_October_2026). Y mientras tanto, la presión institucional crece: ocho estados estadounidenses han demandado a OpenAI por sus declaraciones sobre la seguridad de sus productos y la FTC ha solicitado documentación a OpenAI y Anthropic, mientras la Comisión Europea pide información sobre cómo se evalúan y monitorizan los modelos, como resume [Tech Policy Press](https://www.techpolicy.press/openai-faces-lawsuits-subpoenas-and-eu-scrutiny-in-a-single-week/).

{{img:0}}

La pregunta jurídica de todos estos casos es compleja y se resolverá lentamente en los tribunales. Pero hay otra pregunta, más antigua y más personal, que nadie va a resolver por ti: cuando una máquina actúa con tus permisos y hace algo que tú no ordenaste, ¿de quién es lo que ha hecho? Para pensarla con seriedad, pocos filósofos ayudan tanto como Jean-Paul Sartre, el pensador que llevó la responsabilidad humana hasta su consecuencia más incómoda. Su respuesta, si la traducimos a nuestro problema, sería más o menos esta: no puedes delegar lo que eres.

## Nadie puede firmar por ti

Sartre parte de una idea famosa: la existencia precede a la esencia. No nacemos con un manual de instrucciones, ni con una función fija, como lo tiene un cuchillo. Primero existimos, actuamos, elegimos; y solo después podemos describir quiénes somos. No hay naturaleza humana previa que decida por nosotros: cada acto va escribiendo la respuesta a la pregunta de quién eres. Si esto te resulta familiar pero en clave distinta, puede que sea porque ya lo leíste en la entrada sobre [identidad y propósito](/temas/identidad-y-proposito).

De ahí se sigue algo que a mucha gente le incomoda. Si tú eres lo que haces, entonces lo que haces no puede cargarse sobre hombros ajenos. Sartre dice que estamos condenados a ser libres: no porque la libertad sea un premio, sino porque no hay salida. Incluso cuando no eliges, estás eligiendo no elegir, y ese silencio también es tuyo. Se puede profundizar en su pensamiento en la [entrada sobre Sartre de la Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/sartre/) o en el [artículo de Wikipedia sobre su vida y obra](https://es.wikipedia.org/wiki/Jean-Paul_Sartre).

Ahora aplicamos esto al agente de IA. La máquina no firmó el permiso; lo firmaste tú. No decidió tener acceso a tu correo, tu agenda, tus archivos o tu dirección; se lo concediste tú, casi siempre de prisa, a veces sin leer la lista de casillas. Entre la acción de la máquina y tu vida hay siempre un acto humano previo: la autorización. Y un acto autorizado sigue siendo, en un sentido importante, un acto tuyo.

No es una exageración mística. Es la misma lógica que aplicamos sin pensarlo en otros ámbitos. Si le entregas las llaves de tu coche a alguien y este, con tu permiso, atropella a alguien, el problema legal es suyo; pero nadie dirá que entregar las llaves fue un acto sin consecuencias morales para ti. Entregaste un poder de actuación sobre el mundo a alguien que decidiste que era digno de confianza. La elección del delegado es tuya, y con ella eliges también el abanico de cosas que podrá hacer.

{{img:1}}

## La mala fe del "yo no fui"

Sartre bautizó con un nombre muy preciso a la trampa en la que caemos cuando intentamos escurrir el bulto: la *mala fe*. No es mentir a los demás; es mentirse a uno mismo fingiendo que uno no es libre, que no hay decisión, que las cosas simplemente "ocurren". El camarero que actúa como si fuera cosa del oficio y no de su persona, el enamorado que dice que "no puede evitarlo": todos tratan de convertirse en cosa para no tener que responder de su libertad.

"Yo no fui; lo hizo el agente" es mala fe de manual. No en el sentido de que seas culpable de todo lo que haga una máquina, que no es el caso, sino en el sentido de que esa frase intenta borrar el eslabón que une a la máquina con tu vida: tu permiso, tu configuración, tu deseo de no ocuparte. La buena fe, en este contexto, no consiste en sentir culpa, sino en mirar de frente el propio papel: "Di acceso amplio a una herramienta que no supervisaba; eso es lo que pasó, y eso soy yo".

Fíjate en la asimetría que hay aquí. El agente puede hacer muchas cosas mejor que tú: escribe más rápido, responde más pacientes, no se cansa. Pero hay exactamente una cosa que no puede hacer: responder. La responsabilidad no es una tarea que se pueda asignar; es una posición que ocupa quien tiene vida, proyectos y alguien a quien rendir cuentas. La máquina puede ocupar tu lugar en el mundo solo en la medida en que tú le prestes el puesto. El puesto sigue siendo tuyo.

## Dar permiso ya es actuar

La escena del timbre que abre este ensayo es perturbadora, pero su detalle instructivo está en el permiso. La usuaria, según el reporte de AP, había concedido permisos amplios. En ese "amplios" está todo el problema, y también toda la lección.

Sartre añade a la responsabilidad individual otra capa que aquí encaja sorprendentemente bien: al elegir, eliges por todos. Cuando tomo una decisión, dice, estoy afirmando un cierto valor de la acción que elijo, y en ese gesto estoy proponiendo a los demás un modelo de lo que es correcto. Si concedo permisos ilimitados a una máquina porque me ahorra trabajo, no estoy solo resolviendo mi pereza: estoy normalizando una práctica que millones de personas imitarán, porque las prácticas de hoy son las costumbres de mañana.

{{img:2}}

Y esto tiene una consecuencia práctica que casi nadie contempla: el permiso que otorgas no solo te afecta a ti. Un agente con acceso a tu correo tiene acceso a las palabras de otras personas. Un agente con tu agenda conoce los planes de tu familia. Un agente que responde por ti habla con tus amigos, tus jefes y tus clientes, personas que no dieron su consentimiento para tratar con una máquina cuando creían tratar contigo. El permiso que das abre puertas cuyas otras llaves no tienes. Por eso la demanda de responsabilidad no es solo un asunto de conciencia individual: se está convirtiendo en asunto público, con demandas, requerimientos y leyes que apenas empiezan a borronear los primeros trazos.

## Lo que no se puede delegar: la angustia

Podría parecer que lo cómodo sería poder delegarlo todo, incluida la responsabilidad, y que el problema de las máquinas es precisamente que no nos lo permiten. Sartre diría lo contrario: la angustia no es un defecto del diseño humano, es la condición de la libertad. Sentir vértigo ante una decisión no significa que algo falle en ti; significa que sabes que no hay nadie detrás de ti que responda si te equivocas. El agente no siente angustia cuando actúa con tus permisos, y justamente por eso no puede ocupar tu lugar completo: le falta la mitad de lo que hace que una acción sea humana.

Hay aquí un contraste curioso con la escena de la bicicleta. Mucha gente siente alivio al delegar tareas sociales incómodas: negociar precios, rechazar propuestas, gestionar reclamaciones. El alivio es real y a veces legítimo. Pero la incomodidad de esas situaciones era también una información: te decía dónde están tus límites, qué valores estás defendiendo, qué relaciones merecen más cuidado que una transacción. Un intermediario eficiente puede borrar esa información de un plumazo. Te quedas con menos fricción y, sin darte cuenta, con menos mapa de ti mismo.

Esto no quiere decir que delegar sea siempre una forma de huida. Es una distinción de grado y de objeto. Delegar la redacción rutinaria de un correo de confirmación no te vacía; delegar la decisión de quién entra en tu casa, sí. La pregunta útil no es "¿delego o no delego?", sino "¿qué parte de esta tarea es mía aunque la haga otro?". La respuesta a esa pregunta se llama responsabilidad, y no tiene atajo.

{{img:3}}

## Dónde la idea no sirve

Para usar a Sartre sin convertirlo en un predicador del "hazlo todo a mano", conviene marcar los límites del argumento.

Primero: responsabilidad no significa culpa. Si un producto se diseñó para que conceder permisos amplios sea lo más fácil y revisarlos sea lo más tedioso, parte del problema es de diseño, no de carácter. Los tribunales y reguladores están analizando exactamente eso. Que tú hubieras podido actuar con más prudencia no exime a quien puso a tu alcance una puerta tan ancha y un pórtico tan estrecho.

Segundo: hay tareas donde la delegación es simplemente sensata. Filtrar spam, transcribir notas, ordenar archivos, redactar borradores que luego revisas. Nadie te hace mejor persona por rellenar formularios. El error sería aplicar el principio inverso: tratar de proteger a mano lo que no importa y automatizar a ciegas lo que sí.

Tercero: el argumento de Sartre no dice qué permisos concretos dar; dice que la concesión es tuya. Cada persona tiene distintas vidas, riesgos y tiempos. Una madre que trabaja a turnos y un estudiante con jornadas libres no deben automatizar lo mismo. Lo que comparten es solo esto: que ninguno puede transferir el hecho de haber elegido.

## Qué cambia el lunes por la mañana

Si trabajas con asistentes o agentes de IA, estas cuatro prácticas concretas convierten la filosofía en rutina:

1. **Haz un inventario de permisos.** Una vez, esta semana, lista todas las herramientas y agentes que tienen acceso a algo tuyo: correo, calendario, fotos, contactos, cuentas, dirección. Para cada uno pregúntate: "¿Le daría yo este acceso a un empleado nuevo el primer día?". Lo que no pasaría a un desconocido no debería pasárselo a una máquina sin supervisión.

2. **Aplica el principio del menor acceso.** Cuando configures un agente, concede el mínimo necesario para la tarea, no el máximo para "no tener que volver". Cada casilla que no marcas es una puerta que se queda cerrada. Si te cuesta decidir qué conceder, puede ayudar leer el ensayo sobre [ansiedad digital y atención](/ensayos/ansiedad-digital-zen): la prisa con la que concedemos permisos suele ser la misma con la que abrimos el móvil.

3. **Revisa el registro una vez por semana.** Diez minutos, el domingo o el lunes, mirando qué acciones realizó cada agente en tu nombre. No para auditar con lupa, sino para mantener vivo el hábito de saber qué se ha hecho con tus llaves. Lo que se revisa semanalmente no sorprende; lo que se revisa nunca, sorprende siempre en el peor momento.

4. **Prueba de la firma.** Antes de dar a un agente una capacidad nueva, imagina la peor acción razonable que podría hacer con ella y pregúntate: "¿Podría yo firmar esa acción con mi nombre?". Si la respuesta es no, no des la capacidad todavía, o acótala con reglas explícitas. Este ensayo vecino sobre [decidir sin garantías](/ensayos/decidir-sin-garantias-sartre) puede ayudarte con esa clase de decisiones que no traen instrucciones.

Vivimos el año en que los agentes pasaron de asistentes de conversación a ejecutores de acciones: compran, venden, escriben, reservan y abren puertas. Las instituciones tardarán años en decidir cómo se reparte el daño cuando algo sale mal. Pero hay una parte de la respuesta que no se decidirá en ningún tribunal: cada vez que marcas una casilla de permiso, estás eligiendo quién actúa en tu nombre, y esa elección es tan tuya como todo lo demás que haces. Para seguir pensando en lo que delegas y lo que conservas, puedes leer el ensayo anterior sobre [si la IA piensa por ti](/ensayos/ia-pensar-por-ti-aristoteles) o explorar más ideas en la sección de [existencialismo](/escuelas/existencialismo).`,
};

export default post;
