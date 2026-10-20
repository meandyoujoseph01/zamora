export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  sellerId: string;
  stock: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image?: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};