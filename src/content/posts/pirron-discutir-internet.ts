import type { Post } from "../types";
import hero from "@/assets/posts/pirron/hero.jpg";
import i1 from "@/assets/posts/pirron/1.jpg";
import i2 from "@/assets/posts/pirron/2.jpg";
import i3 from "@/assets/posts/pirron/3.jpg";
import i4 from "@/assets/posts/pirron/4.jpg";

const post: Post = {
  slug: "discutir-en-internet-pirron-epoje",
  title:
    "El algoritmo del enemigo: por qué discutir en internet te envenena (y qué enseñó Pirrón sobre suspender el juicio)",
  seoTitle: "Por qué discutir en internet te envenena: Pirrón",
  description:
    "Un estudio muestra que un tercio de los mensajes en tendencias trata al rival como enemigo. Pirrón y la suspensión del juicio para recuperar la calma.",
  excerpt:
    "Un nuevo estudio con más de 17 millones de mensajes confirma lo que intuías: en las tendencias, al que piensa distinto no se le critica, se le convierte en enemigo. Hace veintitrés siglos, Pirrón propuso una salida que no es callarse por miedo, sino dejar de opinar a toda prisa.",
  date: "2026-10-20",
  tema: "ira-y-conflicto",
  escuela: "escepticismo",
  hero: {
    src: hero,
    alt: "Persona sentada en la mesa de la cocina al amanecer mirando un teléfono del que salen bocadillos rojos de enfado, junto a un busto sereno de un filósofo griego",
  },
  images: [
    {
      src: i1,
      alt: "Multitud de figuras sin rostro en una plaza digital señalándose unas a otras a ambos lados de una grieta luminosa",
      caption: "En las tendencias, el adversario se convierte en enemigo.",
    },
    {
      src: i2,
      alt: "Filósofo griego tranquilo en una barca durante una tormenta mientras los marineros se asustan y un cerdo descansa en cubierta",
      caption: "La anécdota del cerdo en la tormenta, según Diógenes Laercio.",
    },
    {
      src: i3,
      alt: "Balanza antigua con dos pesos iguales perfectamente equilibrada sobre un escritorio de madera junto a un libro abierto y una vela",
      caption: "Isostheneia: cuando los argumentos pesan lo mismo, el juicio puede esperar.",
    },
    {
      src: i4,
      alt: "Mujer dejando su teléfono boca abajo en el alféizar de una ventana un lunes por la mañana, con una taza de café y una calle tranquila al fondo",
      caption: "Veinticuatro horas antes de responder cambian casi todo.",
    },
  ],
  body: `Son las siete y cuarto de la mañana. Todavía no has terminado el primer café y ya tienes el pulso acelerado. Has abierto la aplicación "solo un momento" y en la parte de arriba aparece un tema de tendencia: alguien ha dicho algo, otro alguien le ha respondido, y en cuestión de horas miles de personas se han dividido en dos bandos que se desprecian. Lees tres mensajes. Notas cómo sube algo caliente desde el estómago. Ya sabes quién tiene razón. Ya sabes, sobre todo, quiénes son los malos. Empiezas a escribir. Tus dedos van más rápido que tu cabeza.

Lo curioso es que, si alguien te preguntara en ese instante qué sabes de verdad del asunto, la respuesta honesta sería: dos párrafos, un vídeo recortado y la opinión de gente que te cae bien. Con eso has construido una certeza completa y un enemigo completo. Y lo has hecho antes de las ocho de la mañana.

Este ensayo no va a pedirte que dejes las redes ni que te vuelvas indiferente a lo que pasa en el mundo. Va a proponerte algo más antiguo y más difícil: aprender a no opinar todavía. Un filósofo griego llamado Pirrón de Elis lo convirtió en una forma de vida hace más de dos mil años, y su idea encaja con una precisión inquietante en lo que la investigación acaba de demostrar sobre cómo discutimos hoy.

## Las tendencias no premian la crítica, premian al enemigo

A mediados de octubre de 2026, un equipo de la Universidad de Berna, el Instituto Max Planck de Matemáticas en las Ciencias y el médialab de Sciences Po publicó un estudio con un título que parece escrito para este blog: [*High prevalence of antagonizing rhetoric in trending topics on Twitter/X*](https://arxiv.org/html/2610.22455). Los autores analizaron más de 17 millones de mensajes de temas de tendencia en la conversación en alemán y se hicieron una pregunta que hasta ahora se había mirado de forma demasiado gruesa.

Sabíamos que la negatividad contra "los otros" genera interacción. Lo que no estaba claro es qué tipo de negatividad circula. Los investigadores distinguen dos cosas que en el día a día mezclamos: **criticar** a un oponente, es decir, tratarlo como un adversario legítimo con el que se puede discutir, y **antagonizarlo**, es decir, presentarlo como un enemigo que hay que derrotar. La primera es parte normal de la democracia. La segunda la corroe.

El resultado es contundente: alrededor de un tercio de todos los mensajes en los temas de tendencia contenía retórica antagonizadora, y las tendencias resultaron sistemáticamente más hostiles que una muestra corriente de la misma red. Además, ambos tipos de retórica se amplificaban sobre todo dentro de cada bando: la gente compartía el ataque de los suyos contra los otros.

{{img:0}}

Piensa en lo que eso significa para tu mañana. Lo que llega a la parte de arriba de tu pantalla no es una muestra de lo que la gente piensa. Es una selección de lo que más enfada. No estás viendo el debate público: estás viendo su versión más inflamable, filtrada precisamente porque te hace reaccionar. El estudio no dice que las personas sean peores que antes; sugiere algo más incómodo: que el escaparate está diseñado para que veas a los demás como enemigos.

No es un fenómeno aislado. El [Pew Research Center publicó a principios de octubre](https://www.pewresearch.org/global/2026/10/01/americans-are-negative-about-social-medias-impact-on-democracy-and-the-rest-of-the-world-is-catching-up/) un informe sobre decenas de países según el cual cada vez más personas creen que las redes sociales están dañando la democracia. La sensación que tienes al cerrar la aplicación, ese cansancio agrio, no es solo tuya. Es una experiencia compartida a escala planetaria.

## El problema no es que opines, es la velocidad a la que te obligan a opinar

Hay una trampa sutil en todo esto. Cuando se habla de polarización, solemos pensar que el problema son las opiniones extremas de los demás. Pero el mecanismo empieza antes, en algo que tú también haces: **formarte un juicio definitivo sobre un asunto del que apenas sabes nada, en cuestión de segundos**.

Las plataformas viven de esa prisa. Un tema de tendencia dura horas; si quieres participar, tienes que opinar ya. No mañana, cuando haya más datos, sino ahora, mientras todo arde. Y para opinar ya, necesitas un atajo: el atajo más rápido es decidir quién es de los tuyos y quién no. A partir de ahí, la conclusión viene sola.

Es aquí donde la retórica del enemigo se vuelve casi inevitable. Si no tienes tiempo para entender lo que piensa el otro, solo te queda imaginar por qué lo piensa. Y la explicación más rápida siempre es moral: lo piensa porque es tonto, o porque es malo. Esa es la diferencia exacta entre la crítica y el antagonismo que mide el estudio. La crítica discute lo que alguien dice. El antagonismo decide lo que alguien es.

Ya hablamos en este blog de cómo la [ansiedad digital y la atención fragmentada](/ensayos/ansiedad-digital-atencion-zen) te dejan sin espacio interior. La ira de las tendencias es la otra cara de esa moneda: no solo te roban la atención, también te entregan una certeza prefabricada para que la uses como arma.

## Pirrón de Elis, el hombre que no tenía prisa por tener razón

Pirrón vivió aproximadamente entre el 360 y el 270 antes de nuestra era, en Elis, en el Peloponeso. No escribió nada. Lo que sabemos de él llega sobre todo por su discípulo Timón de Fliunte y, mucho después, por el historiador Diógenes Laercio y por el médico Sexto Empírico, cuyas *Hipotiposis pirrónicas* (o *Esbozos pirrónicos*) son la exposición más completa que se conserva de esta escuela.

Según la tradición, Pirrón acompañó a Alejandro Magno en su expedición a Oriente y allí conoció a sabios indios a los que los griegos llamaban "gimnosofistas". Los estudiosos discuten cuánto influyó ese viaje, pero lo cierto es que Pirrón volvió con una idea que en Grecia sonaba extravagante: que la serenidad no llega cuando por fin tienes la respuesta correcta, sino cuando dejas de necesitar tenerla sobre todas las cosas.

La herramienta central se llama **epojé** (en griego, ἐποχή): la suspensión del juicio. Sexto Empírico la explica de forma muy práctica. Ante cualquier cuestión discutida, el escéptico hace un ejercicio: busca los argumentos a favor y los argumentos en contra con la misma seriedad. Muy a menudo descubre que pesan parecido, algo que los griegos llamaron **isostheneia**, el equilibrio de fuerzas. Y cuando los argumentos se equilibran, el escéptico no fuerza una conclusión: la deja en suspenso.

{{img:2}}

Lo sorprendente es lo que viene después. Sexto cuenta que los escépticos buscaban la tranquilidad intentando decidir quién tenía razón, y fracasaban. Pero al suspender el juicio, la calma llegó "como la sombra sigue al cuerpo". Esa calma tiene nombre: **ataraxia**, ausencia de perturbación. No es indiferencia. Es la paz de quien ya no necesita ganar cada discusión para sentirse a salvo.

## La tormenta y el cerdo

Diógenes Laercio, en sus *Vidas de los filósofos ilustres*, recoge una anécdota que resume la actitud de Pirrón mejor que cualquier tratado. Viajaba en barco cuando se desató una tormenta. Los pasajeros estaban aterrorizados. Pirrón, tranquilo, señaló a un cerdo que seguía comiendo en cubierta sin inmutarse y dijo que así debía comportarse el sabio.

{{img:1}}

Se puede leer como una burla, y quizá lo fuera en parte. Pero la anécdota apunta a algo serio: gran parte de nuestro sufrimiento no viene de lo que pasa, sino de los juicios que añadimos a lo que pasa. "Esto es terrible", "esto es intolerable", "quien piense lo contrario es un monstruo". La tormenta es real; el pánico que añadimos con nuestras interpretaciones, no siempre.

Traslada la escena a tu teléfono. El tema de tendencia es la tormenta. El problema no es que exista, sino que tú subas a bordo con el juicio ya hecho y la adrenalina disparada, convencido de que todo depende de que respondas en los próximos cinco minutos. Pirrón no te diría que la tormenta no importa. Te diría que tu pánico no la calma, y que tu certeza apresurada tampoco.

## Suspender el juicio no es no tener valores

Aquí aparece la objeción obvia: "¿Entonces tengo que ser neutral ante todo? ¿No puedo indignarme por nada?" Es una objeción justa, y conviene responderla con cuidado, porque el escepticismo se ha caricaturizado muchas veces como una excusa para no comprometerse.

El escepticismo de Sexto no pedía dejar de actuar. Al contrario: el escéptico vive según lo que él llama las apariencias, las costumbres, las leyes de su comunidad, sus necesidades y lo que ha aprendido. Come cuando tiene hambre, ayuda a quien lo necesita, respeta las normas de su ciudad. Lo que suspende no es la vida práctica, sino las **afirmaciones dogmáticas**: la pretensión de saber con certeza absoluta cómo son las cosas en el fondo.

Llevado a tu vida, la distinción es útil. Puedes tener valores firmes —la honestidad, la justicia, el cuidado de los demás— y a la vez reconocer que, sobre el caso concreto que hoy arde en la tendencia, no sabes lo suficiente. No es contradictorio. De hecho, es lo que hace una persona sensata en cualquier otro ámbito: nadie se fía de un médico que diagnostica sin ver al paciente, ni de un juez que dicta sentencia leyendo un titular.

El filósofo y divulgador [Richard Bett resume en la Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/pyrrho/) cómo la figura de Pirrón se asocia a la idea de que las cosas son indeterminadas para nosotros y que de ahí se sigue no comprometerse con opiniones firmes. Para una lectura más amplia de la escuela, la entrada sobre [escepticismo antiguo](https://plato.stanford.edu/entries/skepticism-ancient/) explica la diferencia entre los pirrónicos y los académicos, que es justo la diferencia entre suspender y negar.

## La versión más fuerte del otro

Uno de los ejercicios favoritos de Sexto Empírico era oponer argumentos: a cada razón, contraponer otra de igual fuerza. Hoy existe una práctica muy parecida que algunos llaman "hombre de acero", lo contrario del "hombre de paja": en lugar de atacar la versión más tonta de lo que piensa el otro, reconstruyes la versión más inteligente.

Hacerlo cambia la temperatura de cualquier discusión. Cuando intentas formular lo que piensa tu adversario de manera que él mismo estaría de acuerdo, ocurren tres cosas. Primero, descubres que su postura tiene razones, aunque no las compartas. Segundo, te das cuenta de qué parte de tu propia opinión era solo reflejo de grupo. Y tercero, dejas de ver un enemigo y vuelves a ver una persona con la que no coincides.

Esa es exactamente la frontera que mide el estudio de Berna: el paso de la crítica al antagonismo. El ejercicio escéptico te mantiene del lado bueno de esa frontera. Puedes seguir discrepando, incluso con fuerza. Pero discrepas de ideas, no declaras la guerra a personas.

Si este tema te interesa, en el ensayo sobre [cómo decidir sin garantías con Sartre](/ensayos/decidir-sin-garantias-sartre) exploramos la otra cara: cuándo sí hay que comprometerse aunque la duda no desaparezca. Y en el reciente ensayo sobre [los agentes de IA y la responsabilidad](/ensayos/agentes-ia-responsabilidad-sartre) aparece una idea complementaria: lo que publicas en tu nombre te define, aunque lo hayas escrito con prisa.

## Lo que la ira te quita y no te devuelve

Vale la pena hacer cuentas. ¿Qué obtienes de una discusión acalorada en una tendencia? Quizá un pequeño subidón cuando alguien de los tuyos da "me gusta" a tu respuesta. Quizá la sensación de haber hecho algo. Pero casi nunca obtienes lo que en teoría buscabas: que alguien cambie de opinión o que entiendas mejor el problema.

Lo que sí pierdes es más concreto. Pierdes la primera hora de tu mañana. Pierdes la calma con la que ibas a empezar el trabajo. Pierdes, a veces, la relación con un familiar o un compañero que leyó lo que escribiste. Y pierdes algo menos visible: la capacidad de cambiar de opinión, porque cuanto más públicamente defiendes una postura, más te cuesta abandonarla.

Los escépticos antiguos sabían que el dogmatismo no es solo un error intelectual, sino una fuente de sufrimiento. Quien está seguro de que algo es bueno sufre por no tenerlo; quien está seguro de que algo es terrible sufre cuando ocurre. La ira de internet es la versión acelerada de ese mecanismo: un dogmatismo de usar y tirar que cambia de objeto cada día pero deja siempre el mismo poso de agotamiento.

## Dónde el escepticismo no sirve

Sería poco honesto presentar la epojé como una solución universal. Tiene límites claros, y conviene nombrarlos.

**Ante la injusticia evidente, suspender el juicio puede ser complicidad.** Hay situaciones en las que los hechos están claros y alguien está sufriendo un daño. El caso que denunció [The Washington Post el 17 de octubre](https://www.washingtonpost.com/technology/2026/10/17/online-campaign-unmask-cornell-rape-accuser-reached-millions/), en el que mensajes que pretendían revelar la identidad de una presunta víctima de violación se vieron decenas de millones de veces, es un ejemplo de ello: ahí no hay dos argumentos de igual fuerza sobre si está bien exponer a una persona a ese acoso. Ahí la calma no consiste en no opinar, sino en no participar y, si puedes, en denunciar.

**El escepticismo radical puede paralizarte.** Si lo aplicas a todo, incluso a decisiones personales urgentes, acabarás sin actuar. Los antiguos críticos de Pirrón ya le reprochaban que su doctrina hacía imposible la vida. Sexto respondía que el escéptico sí actúa, guiándose por lo que le aparece, pero el riesgo existe: no confundas prudencia con miedo a decidir.

**La neutralidad tampoco es una virtud por sí misma.** Hay personas que usan el "yo no opino" para no asumir el coste de defender algo que saben correcto. Eso no es epojé; es comodidad. El escéptico auténtico suspende porque de verdad ve argumentos equilibrados, no porque le dé pereza o vergüenza tomar partido.

**Y, por último, la suspensión del juicio no sustituye a la información.** Esperar antes de opinar sirve de poco si durante la espera no haces nada por entender mejor. La pausa escéptica tiene sentido cuando la llenas de lectura, de fuentes distintas, de escuchar a quien sabe.

## Qué cambia el lunes por la mañana

No hace falta convertirse en un sabio griego para aprovechar algo de esto. Bastan cuatro gestos pequeños, repetidos lo suficiente como para que se conviertan en hábito.

{{img:3}}

**1. La regla de las veinticuatro horas.** Cuando un tema te provoque ganas de responder de inmediato, apúntalo en una nota y vuelve a él al día siguiente. Si mañana sigue pareciéndote importante decir algo, dilo. Descubrirás que la mayoría de las veces las ganas se han evaporado, y que el mundo siguió girando sin tu comentario.

**2. Una pregunta antes de compartir: ¿critico una idea o declaro un enemigo?** Relee lo que vas a publicar y busca palabras que describan a personas en lugar de argumentos: "idiotas", "traidores", "esa gente". Si las encuentras, reescribe el mensaje hablando solo de lo que dicen. Si no queda nada que decir, ya tienes tu respuesta.

**3. El ejercicio del hombre de acero.** Antes de opinar sobre un asunto polémico, intenta escribir en dos o tres frases la mejor versión de la postura contraria, de forma que alguien que la defiende la firmaría. No tienes que publicarla. Solo hacerla. Notarás cómo baja la temperatura dentro de ti.

**4. La primera hora sin tendencias.** Elige no mirar los temas de tendencia durante la primera hora del día. No se trata de desconectarte del mundo, sino de que tu mañana empiece con tus propias prioridades y no con la ira que alguien ha decidido que debes sentir. Puedes informarte después, con calma, en medios que expliquen en lugar de inflamar.

Pirrón no te promete que vayas a tener razón más a menudo. Te promete algo más modesto y quizá más valioso: que dejarás de necesitar tenerla sobre todo, a todas horas, ante todo el mundo. En un ecosistema que convierte cada desacuerdo en una guerra, esa pequeña libertad es casi un acto de resistencia. Si quieres seguir explorando cómo gestionar el enfado y los conflictos, visita la sección de [ira y conflicto](/temas/ira-y-conflicto) o lee más sobre la escuela del [escepticismo](/escuelas/escepticismo). Y si la ira de hoy te ha dejado agotado, quizá te ayude el ensayo sobre [el burnout y los estoicos](/ensayos/burnout-estoicismo).`,
};

export default post;
