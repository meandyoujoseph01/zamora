export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  brand: string;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  vendor: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "zm-001",
    name: "Premium Sneakers",
    slug: "premium-sneakers",
    description:
      "Modern and comfortable sneakers suitable for everyday wear.",
    price: 45000,
    currency: "RWF",
    category: "Fashion",
    brand: "ZAMORA",
    image: "/products/sneakers.jpg",
    rating: 4.8,
    reviews: 24,
    stock: 18,
    vendor: "ZAMORA Fashion",
    featured: true,
  },

  {
    id: "zm-002",
    name: "Smartphone Pro",
    slug: "smartphone-pro",
    description:
      "A modern smartphone with a powerful processor and excellent camera.",
    price: 385000,
    currency: "RWF",
    category: "Electronics",
    brand: "ZAMORA Tech",
    image: "/products/smartphone.jpg",
    rating: 4.6,
    reviews: 31,
    stock: 12,
    vendor: "ZAMORA Electronics",
    featured: true,
  },

  {
    id: "zm-003",
    name: "Wireless Headphones",
    slug: "wireless-headphones",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
    price: 65000,
    currency: "RWF",
    category: "Electronics",
    brand: "ZAMORA Tech",
    image: "/products/headphones.jpg",
    rating: 4.7,
    reviews: 19,
    stock: 25,
    vendor: "ZAMORA Electronics",
    featured: true,
  },

  {
    id: "zm-004",
    name: "Leather Handbag",
    slug: "leather-handbag",
    description:
      "Elegant leather handbag designed for modern everyday use.",
    price: 75000,
    currency: "RWF",
    category: "Fashion",
    brand: "ZAMORA Fashion",
    image: "/products/handbag.jpg",
    rating: 4.5,
    reviews: 16,
    stock: 9,
    vendor: "ZAMORA Fashion",
    featured: false,
  },

  {
    id: "zm-005",
    name: "Modern Table Lamp",
    slug: "modern-table-lamp",
    description:
      "Stylish table lamp for bedrooms, offices and living spaces.",
    price: 28000,
    currency: "RWF",
    category: "Home & Living",
    brand: "ZAMORA Home",
    image: "/products/table-lamp.jpg",
    rating: 4.4,
    reviews: 11,
    stock: 20,
    vendor: "ZAMORA Home",
    featured: false,
  },

  {
    id: "zm-006",
    name: "Luxury Perfume",
    slug: "luxury-perfume",
    description:
      "A premium fragrance with a fresh and long-lasting scent.",
    price: 55000,
    currency: "RWF",
    category: "Beauty",
    brand: "ZAMORA Beauty",
    image: "/products/perfume.jpg",
    rating: 4.9,
    reviews: 37,
    stock: 15,
    vendor: "ZAMORA Beauty",
    featured: true,
  },

  {
    id: "zm-007",
    name: "Sports Backpack",
    slug: "sports-backpack",
    description:
      "Durable backpack suitable for sports, school and travel.",
    price: 42000,
    currency: "RWF",
    category: "Sports",
    brand: "ZAMORA Sports",
    image: "/products/backpack.jpg",
    rating: 4.3,
    reviews: 14,
    stock: 22,
    vendor: "ZAMORA Sports",
    featured: false,
  },

  {
    id: "zm-008",
    name: "Premium Coffee Pack",
    slug: "premium-coffee-pack",
    description:
      "Quality roasted coffee packed for freshness and great taste.",
    price: 12000,
    currency: "RWF",
    category: "Food & Beverages",
    brand: "ZAMORA Foods",
    image: "/products/coffee.jpg",
    rating: 4.8,
    reviews: 28,
    stock: 40,
    vendor: "ZAMORA Foods",
    featured: false,
  },
];