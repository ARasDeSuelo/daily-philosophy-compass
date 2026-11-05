import type { Post } from "../types";
import hero from "@/assets/posts/neveras-hackeadas-heidegger/hero.jpg";
import i1 from "@/assets/posts/neveras-hackeadas-heidegger/1.jpg";
import i2 from "@/assets/posts/neveras-hackeadas-heidegger/2.jpg";
import i3 from "@/assets/posts/neveras-hackeadas-heidegger/3.jpg";
import i4 from "@/assets/posts/neveras-hackeadas-heidegger/4.jpg";

const post: Post = {
  slug: "neveras-hackeadas-heidegger",
  title: "Neveras hackeadas: qué descubres de tu vida cuando las cosas dejan de funcionar",
  seoTitle: "Neveras hackeadas y el martillo roto de Heidegger",
  description:
    "Ciberataques pusieron a 50 °C neveras de supermercados en diez países. Heidegger explica por qué solo vemos las cosas cuando fallan.",
  excerpt:
    "Nadie piensa en la nevera del supermercado hasta que alguien, desde muy lejos, la pone a 50 grados. Lo que ha pasado esta semana en Europa es un caso perfecto de una idea de Heidegger: el mundo solo aparece cuando se rompe.",
  date: "2026-11-04",
  tema: "ansiedad-digital",
  escuela: "fenomenologia",
  hero: {
    src: hero,
    alt: "Pasillo de congelados de un supermercado de noche con las puertas de cristal abiertas, estanterías vacías cubiertas de hielo que gotea y un indicador rojo de temperatura que marca 50",
  },
  images: [
    {
      src: i1,
      alt: "Trabajadores de un supermercado sueco con delantal verde y guantes retirando bandejas de comida estropeada de los congeladores y echándolas en grandes contenedores de residuos orgánicos",
      caption: "El lunes empezó con contenedores llenos de comida que el domingo estaba bien.",
    },
    {
      src: i2,
      alt: "Martillo de carpintero con el mango de madera partido en dos sobre un banco de trabajo rústico, con clavos esparcidos y luz del sol entrando por la ventana de una cabaña de montaña",
      caption: "Mientras clava, el martillo es invisible. Roto, ocupa toda la mesa.",
    },
    {
      src: i3,
      alt: "Mujer en pijama en una cocina a oscuras que sostiene abierta la puerta de un frigorífico inteligente con pantalla encendida mientras mira inquieta su teléfono móvil",
      caption: "La pregunta no es si tu nevera está conectada, sino si sabes a qué.",
    },
    {
      src: i4,
      alt: "Mano cerrando la puerta de madera de una despensa antigua con tarros de conservas, una jarra de barro, ajos y hogazas de pan en estantes de madera bajo una luz cálida",
      caption: "Las despensas de nuestras abuelas no necesitaban contraseña.",
    },
  ],
  body: `
El lunes 2 de noviembre de 2026 decenas de supermercados de media Europa abrieron con las cámaras frigoríficas estropeadas. No era una avería: alguien había entrado a distancia en el software que controla la refrigeración y había subido la temperatura de neveras y congeladores, en algunos casos hasta los 50 grados. Bélgica y Suecia fueron los países más afectados, pero también hubo problemas en Luxemburgo, Países Bajos, Irlanda, Estonia y Finlandia. [1](https://elpais.com/tecnologia/2026-11-03/por-que-la-segunda-oleada-de-hackeos-a-las-neveras-avisa-de-lo-que-viene.html)

No era la primera vez. Tres semanas antes, la noche del 11 al 12 de octubre, el mismo tipo de ataque había golpeado a cientos de supermercados en Francia, con pérdidas de decenas de millones de euros en un solo día y algunos incendios en tiendas. [2](https://www.xataka.com/seguridad/internet-cosas-parecia-gran-idea-2013-supermercados-europa-estan-descubriendo-que-ia-no-era) La BBC elevaba este martes a diez el número de países afectados en la segunda oleada, y la Unión Europea hablaba de «un intento deliberado de perturbar nuestra cadena de suministro de alimentos». [3](https://www.bbc.com/news/articles/cwy8lm1m59mvo) Este miércoles 4 de noviembre, elDiario.es abría una de sus piezas con una pregunta que hace un mes habría sonado a chiste: ¿qué está pasando con los hackeos a frigoríficos? [4](https://www.eldiario.es/adelanto/4-de-noviembre-de-2026/)

Nadie ha reivindicado los ataques. Los analistas miran hacia Moscú, pero la agencia belga de ciberseguridad advertía que quizá nunca se sepa quién está detrás. [5](https://www.politico.eu/article/supermarket-chain-thaw-massacre-ii-russia-suspected-in-europe-fridge-attacks/) Este ensayo no va a especular sobre autores. Va a detenerse en algo más pequeño y más íntimo: la extraña sensación que muchos tuvimos al leer la noticia. Una sensación de vértigo ante algo que no habíamos pensado nunca. ¿Las neveras del súper están conectadas a internet? ¿Desde cuándo? ¿Y qué más lo está?

Ese vértigo tiene nombre filosófico. Lo describió con una precisión casi incómoda Martin Heidegger en 1927, mucho antes de que existiera internet, a propósito de un martillo.

{{img:0}}

## El martillo que no ves

En *Ser y tiempo*, Heidegger se pregunta cómo nos relacionamos realmente con las cosas que usamos a diario. La filosofía clásica solía imaginarnos como observadores: un sujeto que mira un objeto, lo analiza y le atribuye propiedades. Heidegger dice que eso es casi siempre falso. La mayor parte del tiempo no *miramos* las cosas: *contamos* con ellas.

Su ejemplo es el carpintero que martillea. Mientras trabaja, el martillo no es un objeto delante de él. Es una prolongación de su mano, desaparece en el uso. El carpintero no piensa «este martillo tiene un mango de madera de haya de 30 centímetros», piensa en el clavo, en la tabla, en la mesa que está construyendo. Heidegger llama a ese modo de ser de las cosas *Zuhandenheit*, que suele traducirse como «estar a la mano». Las herramientas están a la mano cuando funcionan tan bien que no las notamos. [6](https://plato.stanford.edu/entries/heidegger/)

Y entonces el martillo se rompe. El mango se parte, la cabeza sale volando. En ese instante, dice Heidegger, ocurre algo decisivo: la herramienta salta a la vista. Lo que era invisible se vuelve un objeto pesado, molesto, que ocupa toda la mesa. Heidegger llama a ese nuevo modo *Vorhandenheit*, «estar ahí delante». Y añade algo más profundo: cuando la herramienta falla, no aparece solo ella, aparece todo el entramado del que formaba parte. Los clavos, la madera, el encargo, el cliente, el plazo. El mundo entero de referencias que el martillo sostenía en silencio se hace visible de golpe.

{{img:1}}

## Lo que el lunes se hizo visible

Esto es exactamente lo que pasó con las neveras. Durante años, la refrigeración de un supermercado ha sido un martillo perfecto: algo con lo que contábamos sin verlo. Nadie entra en un súper preguntándose por los compresores o por el software de gestión remota. Coges el yogur, compruebas la fecha de caducidad, si acaso, y sigues.

El lunes, cuando los congeladores marcaban 50 grados, la herramienta se rompió y apareció el entramado. Supimos que las cámaras se controlan a distancia desde un software al que se puede acceder por internet. Supimos que, según *El País*, los atacantes no entraron en los sistemas de las cadenas, sino en el programa usado para gestionar la refrigeración a distancia. [1](https://elpais.com/tecnologia/2026-11-03/por-que-la-segunda-oleada-de-hackeos-a-las-neveras-avisa-de-lo-que-viene.html) Supimos que hay dispositivos de refrigeración expuestos en internet en grandes cadenas de varios países, y que en Estados Unidos los investigadores militares colaboraban con Francia porque los ataques también habían alcanzado bases. [7](https://www.cybersecuritydive.com/news/european-authorities-probe-attacks-grocery-refrigerators/873598/)

Es decir: el fallo no reveló solo un problema técnico. Reveló una arquitectura de dependencias que casi nadie sabía que existía. La leche, el pescado y los congelados que comemos dependen de una cadena de frío; esa cadena depende de un software; ese software depende de una conexión; esa conexión depende de contraseñas, actualizaciones, proveedores y de alguien, en algún lugar, que decida no atacarla. Todo eso estaba ahí antes del lunes. Simplemente no lo veíamos, porque funcionaba.

## Por qué nos inquieta tanto

La filosofía de Heidegger ayuda a entender por qué la noticia nos produce una ansiedad tan particular. No es solo miedo a un daño concreto: la mayoría de los lectores no ha perdido nada. Es una inquietud más difusa, la que aparece cuando descubres que el suelo sobre el que caminabas era una red de cables.

Heidegger usa una palabra para esa inquietud de fondo: *Unheimlichkeit*, lo «no-hogareño», lo inhóspito. Es la sensación de no estar en casa en el propio mundo. No tiene un objeto definido, como el miedo; es la experiencia de que las cosas familiares podrían no serlo. Cuando la nevera del súper se convierte en un posible objetivo militar, la cocina de tu casa, con su frigorífico conectado al wifi para avisarte de que falta leche, se vuelve un poco menos tuya.

Hay además un detalle que hace la experiencia especialmente desconcertante. En el caso del martillo, la rotura es local: lo ves, lo tocas, entiendes qué ha pasado. En el caso de los dispositivos conectados, la rotura viene de ninguna parte. Alguien a miles de kilómetros, sin cara y sin nombre, ha cambiado un número en una pantalla. El objeto falla, pero el responsable no aparece. La herramienta se vuelve visible y, a la vez, el mundo que la sostiene se vuelve más opaco.

{{img:2}}

## La pregunta por la técnica

Treinta años después del martillo, en 1953, Heidegger dio una conferencia que se ha vuelto clásica: «La pregunta por la técnica». Allí sostiene que la técnica moderna no es solo un conjunto de herramientas, sino una manera de mirar el mundo. La llama *Gestell*, que se traduce como «estructura de emplazamiento» o «dispositivo». Bajo esa mirada, todo aparece como *Bestand*, como «existencias»: recursos disponibles, almacenados, listos para ser usados, optimizados y controlados. [8](https://iep.utm.edu/heidegge/)

La refrigeración conectada es una imagen casi literal de esa idea. El frío ya no es algo que producen unas máquinas en una tienda, sino un recurso gestionado a distancia, monitorizado, eficiente, integrado en una red. Y esa red tiene ventajas reales: alertas cuando una cámara falla de madrugada, ahorro de energía, menos comida desperdiciada por averías no detectadas. Nadie conectó las neveras por capricho.

Pero Heidegger señalaba el precio de esa mirada: cuando todo es recurso disponible, todo es también recurso disponible para otros. Lo que se puede controlar a distancia puede ser controlado a distancia por cualquiera que consiga entrar. La eficiencia y la vulnerabilidad son dos caras de la misma disposición. Xataka lo resumía con ironía: el internet de las cosas parecía una gran idea en 2013. [2](https://www.xataka.com/seguridad/internet-cosas-parecia-gran-idea-2013-supermercados-europa-estan-descubriendo-que-ia-no-era)

Conviene no caricaturizar a Heidegger, que no era un tecnófobo que quisiera volver a las cavernas, ni tampoco convertirlo en un santo: su adhesión al nazismo es un hecho documentado que obliga a leerlo con espíritu crítico. Pero su intuición sobre la técnica es útil precisamente porque no es moral, sino descriptiva. No dice «la tecnología es mala». Dice: fíjate en cómo te hace ver las cosas, porque esa manera de ver también tiene consecuencias.

## De la nevera del súper a la de tu cocina

La noticia del lunes no va solo de supermercados. Habla de una forma de vivir que ya es la nuestra. Cerraduras que se abren desde el móvil, termostatos que aprenden tus horarios, cámaras que vigilan al perro, altavoces que escuchan, enchufes que obedecen a una aplicación. Cada uno de esos objetos es un martillo que funciona tan bien que lo olvidamos.

La ansiedad digital que tantas personas describen no viene solo de las redes sociales y las notificaciones. Viene también de esta sospecha difusa: vivimos rodeados de cosas que no entendemos y que dependen de sistemas que no controlamos. La mayoría del tiempo esa sospecha está dormida. Basta una noticia como la de esta semana para despertarla.

Y aquí la fenomenología, la escuela que Heidegger heredó de Husserl, tiene una propuesta modesta pero valiosa. No te pide que dejes de usar tecnología. Te pide que vuelvas a mirar lo que normalmente das por hecho, que describas tu experiencia tal como es, antes de que el miedo o la publicidad la deformen. El fallo hace visible el mundo de forma violenta. Tú puedes hacerlo visible de forma tranquila, a propósito, antes de que se rompa.

{{img:3}}

## La serenidad ante las cosas

En 1955, en un discurso en su pueblo natal, Messkirch, Heidegger propuso una actitud que llamó *Gelassenheit*, «serenidad». No es resignación ni rechazo. Consiste en poder decir a la vez «sí» y «no» a los objetos técnicos: «sí» a usarlos, «no» a dejar que nos absorban por completo y decidan cómo entendemos el mundo. Usarlos «como deben ser usados» y, al mismo tiempo, dejarlos «descansar en sí mismos» como algo que no nos toca en lo más íntimo.

Traducido a la vida diaria, la serenidad ante las cosas significa algo concreto: usar los aparatos conectados sabiendo lo que son, sin fe ciega ni pánico. Saber qué depende de qué. Tener una idea aproximada de qué pasaría si algo falla. No para vivir en alerta permanente, sino justo para lo contrario: para que el día que algo se rompa no te encuentre en la casilla del desconcierto absoluto.

Es una forma de prudencia que nuestras abuelas practicaban sin leer a Heidegger. Tenían despensa. Sabían qué aguantaba sin nevera y qué no. Sabían encender la cocina con una cerilla cuando fallaba el chispero. No eran más sabias que nosotros en todo, pero vivían con herramientas que entendían. Nosotros no podemos volver a eso, ni tiene sentido intentarlo. Pero sí podemos recuperar un poco de esa relación comprensible con las cosas.

## Un ejercicio fenomenológico para esta semana

Si la noticia de las neveras te ha dejado una pequeña inquietud, puedes convertirla en algo útil. Estas cuatro prácticas no sustituyen a las medidas que deben tomar empresas y gobiernos; son para tu relación con tus propias herramientas.

1. **Haz el inventario de tus martillos invisibles.** Recorre tu casa y anota qué objetos están conectados a internet: la tele, el router, el altavoz, la cámara, el robot aspirador, quizá la caldera o la nevera. No juzgues, solo mira. La mayoría de la gente descubre que tiene más de los que creía. Ese descubrimiento es, en pequeño, lo mismo que vivió Europa el lunes, pero sin perder nada.
2. **Pregúntate qué falla si falla.** Para cada objeto, una línea: si deja de funcionar o alguien lo controla, ¿qué pasa? «La tele: nada grave». «La cerradura: no puedo entrar en casa». «La cámara: alguien ve mi salón». Esta pregunta separa la ansiedad general del riesgo concreto, que suele ser mucho más manejable.
3. **Cuida lo básico sin obsesionarte.** El INCIBE recomienda cambiar las contraseñas que traen de fábrica los dispositivos, mantenerlos actualizados y desactivar las funciones de acceso remoto que no uses. [9](https://www.incibe.es/ciudadania) Son tres gestos que cuestan una tarde y reducen mucho los riesgos. No necesitas ser experto; necesitas que tus herramientas dejen de ser cajas negras.
4. **Mantén una pequeña despensa de serenidad.** Un poco de comida que no necesite frío, agua, una linterna, una llave física de casa en un sitio seguro. No por catastrofismo, sino por *Gelassenheit*: para poder decir «sí» a la tecnología sin que tu tranquilidad dependa por entero de ella. La Unión Europea, de hecho, ya recomienda a los ciudadanos tener un kit básico para 72 horas ante crisis. [10](https://commission.europa.eu/topics/preparedness_en)

El martillo de Heidegger se rompió en un taller imaginario de la Selva Negra hace casi un siglo. Las neveras se rompieron el lunes en Bruselas, en Estocolmo, en Tallin. Entre una cosa y otra ha cambiado casi todo, salvo la lección: lo que funciona bien nos vuelve ciegos, y la ceguera solo se cura mirando. Mejor hacerlo un miércoles tranquilo que la próxima vez que un número en una pantalla marque 50 grados.

## Para seguir pensando

Si esta inquietud se parece a la que te producen las notificaciones, en [la ansiedad digital desde el zen](/ensayos/ansiedad-digital-zen) encontrarás otra manera de mirarla. Si te interesa cómo la fenomenología ilumina nuestra relación con las máquinas, [las emociones y la IA con Merleau-Ponty](/ensayos/emociones-ia-merleau-ponty) parte de la misma escuela. Y si te preguntas qué responsabilidad tienen quienes diseñan sistemas que deciden por nosotros, [los agentes de IA desde Sartre](/ensayos/agentes-ia-responsabilidad-sartre) aborda la cuestión desde el existencialismo.

Tienes más textos en la sección de [ansiedad digital](/temas/ansiedad-digital), en la escuela de la [fenomenología](/escuelas/fenomenologia) y en nuestra selección de [libros recomendados](/libros). Si quieres leer a Heidegger sin perderte, la conferencia «La pregunta por la técnica» es breve y mucho más accesible que *Ser y tiempo*; la entrada dedicada a Heidegger en la [Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/heidegger/) es una buena guía previa.
`,
};

export default post;
