import type { Category } from "@/types";

export type ProductItem = {
  name: string;
  price: number;
  image: string;
  category: Category;
  slug: string;
  color: string;
};

export const products: ProductItem[] = [
  { name: "The Midnight Dreamer", price: 9800, image: "/images/hoodie-midnight.jpg", category: "hoodies", slug: "midnight-dreamer-hoodie", color: "black" },
  { name: "Cloud Nine",           price: 9800, image: "/images/hoodie-cloud.jpg",    category: "hoodies", slug: "cloud-nine-hoodie",       color: "white" },
  { name: "Forest Green",         price: 9800, image: "/images/hoodie-forest.jpg",   category: "hoodies", slug: "forest-green-hoodie",     color: "green" },
  { name: "Night Shift",          price: 5800, image: "/images/tee-night.jpg",       category: "tees",    slug: "night-shift-tee",         color: "black" },
  { name: "White Tee",            price: 5800, image: "/images/tee-dawn.jpg",        category: "tees",    slug: "white-tee",               color: "white" },
  { name: "Sandy Dreams",         price: 5800, image: "/images/tee-sand.jpg",        category: "tees",    slug: "sandy-dreams-tee",        color: "sand"  },
];
