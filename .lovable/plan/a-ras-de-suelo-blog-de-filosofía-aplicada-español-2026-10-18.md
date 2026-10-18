# A ras de suelo — blog de filosofía aplicada (español)

Lema: "Filosofía aplicada a problemas de hoy". Dominio previsto: arasdesuelo.com.

## Decisiones tomadas
- Idioma: español.
- Taxonomía completa del brief: 10 temas (categorías) + 12 escuelas (etiquetas), cada una con su página, intro y color de acento.
- Artículos largos: 2000+ palabras, 1 imagen destacada + 4 imágenes internas, todas con ALT descriptivo, enlaces internos y externos (obras reales, fuentes fiables).
- Se construye aquí y se publica con Lovable (con tu dominio), en lugar de Eleventy/GitHub Pages.

## Contenido inicial
- 6 artículos largos, cada uno de un tema distinto y una escuela distinta, siguiendo la estructura del brief: escena inicial, 3-4 secciones con títulos que afirman, "Dónde la idea no sirve", "Qué cambia el lunes por la mañana" (4 acciones). Sin citas ni cifras inventadas.
- Fechas distintas hacia atrás desde hoy (cada 4 días), ninguna futura.
- Cada artículo: seoTitle (≤56), description (≤160), extracto, imagen destacada.

## Flujo diario
Cuando escribas "Write today's best and trending topic", investigaré en la web el tema filosófico más relevante del día, escribiré un artículo de 2000+ palabras con las mismas reglas (5 imágenes, ALT, enlaces) y lo añadiré al sitio. Nota: no puedo actuar solo cada día; se activa con tu mensaje, y después debes pulsar Publicar.

## Páginas
Portada (hero, chips de escuelas, destacado, rejilla, temas), /ensayos, /temas, /temas/$tema, /escuelas, /escuelas/$escuela, /ensayos/$slug, /sobre, /contacto, /privacidad, /aviso-legal, /cookies, 404.

Página de ensayo: imagen de cabecera, migas, chips tema/escuela, fecha en español, minutos de lectura, índice automático (≥3 secciones), letra capital, botones de compartir (WhatsApp, X, Facebook, copiar), caja de autor, relacionados, barra de progreso, "Saltar al contenido". Búsqueda en overlay (atajos / y Ctrl+K).

## Diseño
Editorial y cálido: fondo crema #fbf9f5, Source Serif 4 para texto, Inter para interfaz, tarjetas con sombra suave y chip de tema, pie oscuro de tres columnas, color de acento por tema, responsive y accesible.

## Imágenes
Ilustraciones generadas con IA en estilo editorial coherente (paisajes/objetos simbólicos por escuela), 1200×630 las destacadas; las internas, ilustrativas de cada sección. Sustituye los SVG/Playwright del brief.

## SEO
- Título, descripción, canonical, Open Graph y Twitter Card únicos por página; lang="es".
- JSON-LD: Article, BreadcrumbList, WebSite, Organization.
- sitemap.xml y feed RSS generados desde los artículos; robots.txt con sitemap (cuando haya dominio público).
- Test automático que falla si hay títulos o descripciones duplicados.

## AdSense y legal
- Configuración central: publisherId, slots banner/rect, código GoatCounter, verificación de Search Console. Vacíos = no se carga nada, ningún hueco "ANUNCIO".
- Con publisherId: script, meta google-adsense-account y ads.txt.
- Páginas de privacidad/cookies (AdSense, consentimiento EEE) y aviso legal. Necesito tu nombre y email reales; hasta entonces no inventaré datos.

## Pendiente tuyo después
DNS del dominio, Search Console, solicitud de AdSense con mensaje de consentimiento, GoatCounter. Te daré los pasos exactos.

## Detalles técnicos
- Contenido en módulos TS (src/content/posts/*.ts) con front matter tipado y cuerpo en Markdown renderizado; datos de temas/escuelas en src/content/taxonomy.ts; config en src/config/site.ts.
- Rutas TanStack con head() por ruta; sitemap/rss/ads.txt como server routes.
- Imágenes en src/assets/posts/<slug>/.
- Comentarios Giscus omitidos hasta tener IDs reales.
