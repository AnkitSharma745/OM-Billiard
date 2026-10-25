export type ProductDetails = {
  title: string;
  images: { original: string; thumbnail: string }[];
  size: string[];
  price: { current: number | string; original: number | string };
  discount: number;
  information?: string[];
};
