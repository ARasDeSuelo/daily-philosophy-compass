export interface PostImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Post {
  slug: string;
  title: string;
  /** ≤ 56 caracteres, pensado para la búsqueda */
  seoTitle: string;
  /** ≤ 160 caracteres */
  description: string;
  excerpt: string;
  /** ISO yyyy-mm-dd */
  date: string;
  tema: string;
  escuela: string;
  hero: PostImage;
  /** Imágenes internas: se insertan en el cuerpo con {{img:0}} … {{img:3}} */
  images: PostImage[];
  /** Markdown */
  body: string;
}
