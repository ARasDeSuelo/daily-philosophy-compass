import type { Post } from "../types";
import hero from "@/assets/posts/emociones/hero.jpg";
import i1 from "@/assets/posts/emociones/1.jpg";
import i2 from "@/assets/posts/emociones/2.jpg";
import i3 from "@/assets/posts/emociones/3.jpg";
import i4 from "@/assets/posts/emociones/4.jpg";

const post: Post = {
  slug: "emociones-ia-merleau-ponty",
  title: "Tu cara no es un informe: la IA que interpreta emociones y lo que enseña Merleau-Ponty",
  seoTitle: "IA y emociones: tu cara no es un informe",
  description: "¿Puede la IA saber lo que sientes? Merleau-Ponty ayuda a pensar el reconocimiento de emociones, la vigilancia laboral y el derecho a explicar tu experiencia.",
  excerpt: "Una sonrisa puede ser alegría, cortesía o nervios. Cuando una máquina la convierte en una etiqueta, no solo arriesga una equivocación: puede quitarte la palabra sobre lo que te pasa.",
  date: "2026-10-29",
  tema: "ansiedad-digital",
  escuela: "fenomenologia",
  hero: { src: hero, alt: "Ilustración de una mujer ante un portátil junto a formas de análisis facial que contrastan con su expresión pensativa" },
  images: [
    { src: i1, alt: "La misma mujer sonríe en una reunión, al caminar por la calle y al conversar, en tres contextos emocionales diferentes", caption: "Ilustración conceptual: un gesto parecido no garantiza una experiencia idéntica." },
    { src: i2, alt: "Evocación artística de un filósofo con gafas en un café que observa los gestos de un camarero y de varias personas conversando", caption: "Evocación artística, no retrato documental: percibimos cuerpos que viven en un mundo compartido." },
    { src: i3, alt: "Dos compañeros conversan y se escuchan en una mesa de oficina con un portátil cerrado a un lado", caption: "Preguntar y escuchar dejan espacio para una explicación que ninguna etiqueta agota." },
    { src: i4, alt: "Una persona deja un reloj inteligente junto a un cuaderno sin escribir y después contempla los árboles desde una ventana", caption: "Una medición puede aportar información sin convertirse en la última palabra sobre tu día." },
  ],
  body: `Imagina esta escena. Entras en una reunión por videollamada después de una mala noche. Has dormido poco, te duele la cabeza y todavía estás pensando en una conversación pendiente. Escuchas, tomas notas y respondes cuando te preguntan. No sonríes demasiado. Al terminar, alguien te dice que has parecido poco implicado. Ahora imagina una segunda versión: quien lo dice no es tu compañero, sino un sistema que ha clasificado tu expresión. Tu cara acaba de convertirse en un informe.

La escena es hipotética. No describe una empresa concreta ni una denuncia que acabemos de conocer. Sirve para acercarte a un debate real: el uso de inteligencia artificial para inferir emociones a partir de señales de las personas, y los límites que debería tener esa pretensión. La pregunta no es únicamente si la herramienta acierta. También es quién puede interpretar lo que te pasa, con qué consecuencias y cuánto espacio queda para que tú respondas.

Este ensayo se escribe el 29 de octubre de 2026, pero no presenta una noticia de última hora de ese día. Su punto de partida es una advertencia documentada de la autoridad neerlandesa de protección de datos, publicada el 15 de julio de 2025, y la explicación oficial de la Comisión Europea sobre el reconocimiento de emociones en el trabajo y la educación. Las fechas importan: un problema puede merecer atención sin disfrazarlo de novedad. Para pensarlo, nos acompañará Maurice Merleau-Ponty, que dedicó buena parte de su filosofía a mostrar que tu cuerpo no es un objeto separado de tu vida.

## Medir una señal no equivale a comprender una emoción

La autoridad neerlandesa de protección de datos examinó aplicaciones de reconocimiento emocional en atención al cliente, dispositivos que llevas puestos y modelos de lenguaje. Su advertencia fue clara: estas tecnologías se apoyan en supuestos discutidos acerca de las emociones y de su posibilidad de medición; no siempre resulta transparente cómo llegan a sus conclusiones ni si sus resultados son fiables. También señaló que las personas pueden desconocer su uso y los datos empleados. No habló de una lectura infalible de la mente, sino de riesgos para la autonomía, la dignidad y la no discriminación. [1](https://www.autoriteitpersoonsgegevens.nl/en/current/ap-recognising-emotions-using-ai-is-questionable-and-risky)

Conviene separar tres pasos que suelen aparecer mezclados. Primero, registrar algo: un movimiento del rostro, una característica de la voz o una señal fisiológica. Segundo, relacionarlo con una categoría: nervios, alegría, enfado. Tercero, decidir qué significa esa categoría para una persona concreta: que está desmotivada, que necesita ayuda o que no merece una responsabilidad. Cada paso añade una interpretación. Ninguno debería desaparecer detrás de la palabra inteligencia.

Puedes tener el pulso acelerado por muchas razones. Puedes hablar despacio porque estás cansado, porque eliges bien las palabras o porque así hablas normalmente. Una sonrisa puede acompañar una alegría genuina, pero también una incomodidad. Estos ejemplos cotidianos no demuestran que cualquier investigación sobre emociones sea imposible. Demuestran algo más modesto: que una señal necesita contexto y que convertirla en un juicio sobre una persona exige una justificación adicional.

El peligro aumenta cuando la etiqueta viaja más que la explicación. Un compañero quizá recuerda que tenías una mala noche. Un registro puede conservar solo una clasificación. Después alguien lo consulta fuera de la situación original y la interpreta como un rasgo de carácter. Lo provisional se vuelve permanente; lo contextual parece personal. Tu cansancio de un martes termina pareciendo una definición de quién eres.

{{img:0}}

## Tu cuerpo vive una situación, no solo produce datos

Merleau-Ponty publicó *Fenomenología de la percepción* en 1945. Su trabajo no trataba sobre algoritmos actuales, y sería engañoso atribuirle una respuesta literal a tecnologías que no conoció. Sí ofrece una forma de mirar el problema: el cuerpo vivido no es simplemente una cosa que observas desde fuera. Es aquello mediante lo cual percibes, actúas y te relacionas con el mundo. La entrada de la Enciclopedia de Filosofía de Stanford explica esta centralidad del cuerpo y la percepción en su pensamiento. [2](https://plato.stanford.edu/entries/merleau-ponty/)

Lo entiendes sin vocabulario académico cuando conduces una bicicleta. No calculas continuamente la posición de cada articulación para avanzar. Tu cuerpo sabe orientarse dentro de una situación: el suelo, la curva, el ruido de un coche, la distancia de la otra persona. Cuando algo cambia, cambia también tu manera de moverte. Si alguien describe únicamente el ángulo de tus brazos, habrá recogido información real, pero no habrá explicado por completo lo que estás haciendo.

Con la expresión ocurre algo parecido. Una cara aparece en una conversación, ante una noticia o en medio de una tarea. No flota separada de lo que está sucediendo. Tu silencio ante alguien que te intimida no es igual que tu silencio al escuchar una historia difícil, aunque una cámara pueda registrar una boca cerrada en ambos casos. Lo que se ve y la situación en la que se ve se necesitan mutuamente.

Esta perspectiva tampoco dice que tengas una emoción perfectamente formada dentro de ti y que el cuerpo sea una pantalla defectuosa que la oculta. A menudo descubres lo que sientes mientras hablas, caminas o intentas explicarte. El enfado cambia al encontrar palabras; una preocupación se vuelve reconocible cuando la compartes. La experiencia no siempre llega acabada antes de expresarse. Por eso escuchar no es un trámite posterior a clasificar: puede ser parte de comprender.

## La confianza de una máquina no sustituye tu explicación

Una herramienta puede presentar su resultado con una apariencia de seguridad que no corresponde a la complejidad de la situación. Una categoría ordenada tranquiliza más que una explicación llena de matices. Parece más fácil comparar etiquetas que atender historias. Pero esa comodidad no garantiza que la comparación sea justa. La pregunta importante es qué se ha perdido para que el resultado parezca tan sencillo.

Imagina que te califican como poco entusiasta durante una entrevista. Puedes explicar que estabas concentrado, que tu forma de expresarte es reservada o que no conocías la expectativa de sonreír. Si el resultado se considera definitivo, esas explicaciones se escuchan como excusas. Has pasado de participar en una conversación a tener que defenderte de una descripción ajena. No solo se ha evaluado una señal: se ha repartido de manera desigual la autoridad para decir qué significa.

Tu propia explicación tampoco es infalible. Puedes equivocarte sobre lo que sientes o evitar reconocerlo. Un amigo, una profesional sanitaria o alguien que te conoce puede advertir algo que tú todavía no ves. El problema no consiste en declarar que nadie puede interpretarte jamás. Consiste en impedir que una interpretación quede blindada contra las preguntas, especialmente cuando afecta a oportunidades, cuidados o decisiones importantes.

Ya pensamos una tensión semejante en el ensayo sobre [delegar el pensamiento en la inteligencia artificial](/ensayos/ia-pensar-por-ti-aristoteles). Aquí la delegación cambia de dirección: no entregas una tarea que quieres resolver, sino que otra persona entrega a un sistema la interpretación de ti. Recuperar la capacidad de preguntar por el proceso importa tanto como discutir el resultado.

{{img:1}}

## La vigilancia puede cambiar la emoción que pretende observar

Hay una dificultad práctica que puedes reconocer en tu propia vida: actúas de otra manera cuando te sientes examinado. Si crees que tu expresión va a convertirse en una evaluación, puedes empezar a vigilarla. Intentas parecer tranquilo, interesado o agradecido. Parte de tu atención abandona la tarea y se dedica a comprobar si estás representando correctamente el papel esperado. No hace falta afirmar un efecto universal para reconocer esta posibilidad.

Entonces aparece una paradoja. La herramienta promete acercarse a una emoción auténtica, pero su presencia puede incentivar una actuación. No necesariamente porque quieras engañar a nadie. Quizá solo deseas que un malentendido no te perjudique. La sonrisa deja de ser espontánea y se convierte en una precaución. El silencio deja de servir para pensar y empieza a parecer un riesgo.

En un entorno de trabajo esto importa por la diferencia de poder. Decir que aceptas una medición no explica por sí solo qué libertad tienes para rechazarla. Si temes perder una oportunidad, tu consentimiento merece una mirada más cuidadosa. La filosofía no resuelve automáticamente el caso jurídico, pero sí obliga a mirar las condiciones reales y no únicamente la casilla marcada.

La [ansiedad digital](/ensayos/ansiedad-digital-zen) no consiste solo en recibir muchas notificaciones. Puede incluir la sensación de que siempre tienes que estar disponible y resultar legible para los demás. Si además necesitas demostrar una actitud correcta en cada gesto, el descanso se vuelve una representación más. La pregunta deja de ser cómo te encuentras y pasa a ser cómo aparece tu estado en una pantalla ajena.

## El límite europeo no prohíbe toda tecnología emocional

La explicación oficial de la Comisión Europea indica que está prohibida la comercialización, puesta en servicio para ese propósito o utilización de sistemas de IA para inferir emociones en los ámbitos del trabajo y las instituciones educativas, con una excepción para sistemas destinados a razones médicas o de seguridad. Es importante conservar esos matices en lugar de resumirlo como una prohibición absoluta de cualquier uso de tecnología relacionado con emociones. [3](https://ai-act-service-desk.ec.europa.eu/en/ai-act/faq/emotion-recognition-prohibited-workplaceeducation-settings-or-these-purposes-eg-employee)

Tampoco conviene confundir todas las herramientas. Un cuestionario que te pregunta cómo estás, un registro fisiológico, un análisis de palabras y un sistema que infiere emociones a partir de datos biométricos no son necesariamente lo mismo. Las definiciones, el propósito y el contexto importan para determinar qué norma se aplica. Este ensayo no sustituye asesoramiento jurídico ni permite concluir que un producto concreto es legal o ilegal solo por su publicidad.

La existencia de un límite sí expresa una preocupación relevante: algunos usos no deben justificarse únicamente porque sean técnicamente posibles o comercialmente atractivos. Una organización no adquiere un derecho ilimitado a interpretar tu interior porque disponga de una cámara. La eficiencia no responde por sí sola a la pregunta de qué puede exigirte una institución.

Para quien trabaja o estudia, la consecuencia razonable no es entrar en pánico ante cualquier dispositivo. Es pedir una explicación concreta: qué registra, qué infiere, quién accede a los resultados y para qué decisiones se utilizan. Si hay una preocupación real, conviene buscar apoyo profesional o institucional. La prudencia consiste en identificar la práctica, no en convertir toda sospecha en una acusación.

{{img:2}}

## Escuchar no es renunciar a la evidencia

Frente a la promesa de interpretar automáticamente emociones, puedes caer en el extremo contrario: creer que comprender a alguien depende solo de la intuición. Tampoco sería una salida segura. Las personas se equivocan al juzgar rostros, voces y comportamientos. Arrastran prejuicios y a veces confunden su incomodidad con una prueba sobre los demás. Un trato humano no queda garantizado porque desaparezca la máquina.

La alternativa es más exigente: combinar información con preguntas, límites y posibilidad de corrección. Una observación puede abrir una conversación sin cerrarla. Puedes decir que has notado un cambio y preguntar si la otra persona quiere hablar, en lugar de anunciar que ya sabes lo que siente. También puedes aceptar que no quiera explicarlo en ese momento. Comprender no significa disponer de acceso permanente.

En una reunión, por ejemplo, tiene más sentido evaluar si una tarea está resuelta y si la comunicación necesaria funciona que exigir una expresión constante de entusiasmo. Si alguien parece ausente, preguntar por los obstáculos puede ser más útil que ponerle una etiqueta. Quizá necesita información, una pausa, un ajuste en la organización o simplemente que se respete su estilo de participación.

Esto conecta con lo que planteamos sobre [la responsabilidad al delegar en agentes de IA](/ensayos/agentes-ia-responsabilidad-sartre). Introducir un sistema no hace desaparecer la obligación de justificar una decisión. Quien recibe un resultado sigue teniendo que preguntar qué significa, qué límites tiene y si es pertinente utilizarlo. La tecnología puede asistir; no debería servir de escondite para la responsabilidad.

## Dónde esta idea no sirve

La mirada de Merleau-Ponty no sirve para demostrar por sí sola que un dispositivo nunca puede detectar una señal útil. Es una herramienta filosófica para no confundir descripción y experiencia, no un estudio de validación. Evaluar la fiabilidad de una tecnología concreta requiere investigación apropiada, condiciones claras y personas con conocimientos especializados. Defender el contexto no te autoriza a ignorar evidencia bien obtenida.

Tampoco sirve para rechazar cuidados médicos cuando necesitas ayuda. Un indicador puede contribuir a una evaluación profesional sin agotar lo que te pasa. La cuestión es cómo se interpreta y qué papel ocupa dentro de un proceso más amplio. Si un dispositivo te preocupa por motivos de salud, consulta a una profesional cualificada; ni una etiqueta automática ni este ensayo deben sustituir esa conversación.

Y no sirve para imaginar que tu experiencia te concede permiso para cualquier conducta. Puedes estar agotado y aun así deber una disculpa por tratar mal a alguien. Explicar el contexto permite comprender mejor un acto, pero no elimina sus efectos sobre otros. El derecho a no quedar reducido a una clasificación convive con la responsabilidad por lo que haces.

Por último, no sirve para convertir la intimidad en aislamiento obligatorio. A veces necesitas que alguien te ayude a reconocer un malestar que no sabes nombrar. Puedes elegir compartirlo con personas de confianza. El límite no consiste en que nadie se acerque, sino en que ese acercamiento deje espacio para tu respuesta, tu consentimiento y la complejidad de tu situación.

{{img:3}}

## Qué cambia el lunes por la mañana

No necesitas resolver toda la regulación de la inteligencia artificial para cambiar algo en tu relación con estas herramientas. Puedes empezar con cuatro acciones pequeñas. No son un tratamiento ni una garantía de protección legal. Son maneras de mantener abierta la distancia entre una señal, una interpretación y una decisión.

**1. Distingue qué se observa de qué se concluye.** Cuando una aplicación o una persona te atribuya un estado, pregunta en qué se basa. No es lo mismo registrar una variación del pulso que concluir que estás ansioso; tampoco es igual observar silencio que deducir falta de compromiso. Escribir ambos pasos por separado ayuda a localizar el salto. Si no puedes obtener una explicación, conserva esa incertidumbre en vez de convertirla en certeza.

**2. Recupera el contexto antes de aceptar la etiqueta.** Dedica un momento a recordar qué estaba pasando: sueño, esfuerzo, conversación, ruido, preocupación. No busques una explicación perfecta ni te obligues a justificarte ante todo el mundo. La finalidad es no olvidar que tu experiencia ocurre en una situación. Un cuaderno puede ayudarte a describirla con tus palabras sin transformarla en una competición de puntuaciones.

**3. Pregunta por las consecuencias cuando una institución mide.** Si una herramienta se utiliza en tu trabajo o centro educativo, pide información por los canales adecuados sobre su función y sobre el uso de los resultados. Busca apoyo de representantes, responsables de protección de datos o asesoramiento cualificado cuando corresponda. Evita compartir datos sensibles de compañeros para probar una sospecha. Defender límites también exige cuidar la privacidad ajena.

**4. Cambia una clasificación por una conversación.** La próxima vez que pienses que alguien está desinteresado, enfadado o triste, prueba a preguntar sin imponer la respuesta. Puedes ofrecer tiempo y aceptar un no. Si eres tú quien recibe la etiqueta, explica lo que quieras explicar y señala qué no puede deducirse de un gesto. Una conversación no siempre resuelve el problema, pero permite que la persona vuelva a participar en la descripción de su propia vida.

Al terminar el día, quizá tu reloj conserve una curva y tu cámara haya registrado una expresión. Esa información puede existir sin convertirse en tu identidad. Tu cuerpo no es una caja muda que otros deban descifrar desde fuera: es tu manera de estar en un mundo, con historia, relaciones y posibilidades. La pregunta más humana no es si alguien puede calcular cómo pareces. Es si todavía está dispuesto a escuchar lo que tienes que decir.
`,
};

export default post;