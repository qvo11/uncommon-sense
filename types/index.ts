export type Category = "hoodies" | "tees";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: Category;
  price: number; // in cents
  description: string;
  images: string[]; // Cloudinary URLs
  stock: number;
  createdAt: Date;
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
};

export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "paid" | "shipped" | "delivered";
  stripeSessionId: string;
  createdAt: Date;
};
