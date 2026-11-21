/**
 * Configuración central del sitio. Deja un campo vacío ("") para desactivarlo:
 * con adsense.publisherId vacío no se carga ningún script ni se pinta ningún hueco.
 */
export const site = {
  name: "A ras de suelo",
  tagline: "Filosofía aplicada a problemas de hoy",
  description:
    "Ensayos de filosofía aplicada a problemas modernos: trabajo, ansiedad digital, soledad, dinero, decisiones y tiempo, sin jerga y con ideas que puedes usar el lunes.",
  domain: "arasdesuelo.com",
  locale: "es_ES",
  lang: "es",
  author: {
    name: "Redacción de A ras de suelo",
    bio: "Escribimos ensayos que llevan la filosofía clásica a los problemas de cada día. Sin jerga, sin promesas milagrosas y con fuentes reales.",
  },
  owner: {
    // Rellena con tus datos reales para el aviso legal y la política de privacidad.
    name: "",
    email: "",
  },
  adsense: {
    publisherId: "ca-pub-3119188363951301",
    slots: { banner: "", rect: "" },
  },
  analytics: { goatcounter: "", ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID ?? "" }, // configurar VITE_GA4_MEASUREMENT_ID en el entorno de despliegue
  googleVerification: "5ClDnjQ_0zJN6jeZdQsiyTWZmv334mOCqWjtBdE8mXM",
};

export const adsenseEnabled = () => site.adsense.publisherId.trim().length > 0;
