import type { Category } from "@/types";
import ProductCard from "./ProductCard";

type ProductItem = {
  name: string;
  price: number;
  image: string;
  category: Category;
  slug: string;
};

const products: ProductItem[] = [
  {
    name: "The Midnight Dreamer",
    price: 9800,
    image: "/images/hoodie-midnight.jpg",
    category: "hoodies",
    slug: "midnight-dreamer-hoodie"
  },
  {
    name: "Cloud Nine",
    price: 9800,
    image: "/images/hoodie-cloud.jpg",
    category: "hoodies",
    slug: "cloud-nine-hoodie"
  },
  {
    name: "Forest Green",
    price: 9800,
    image: "/images/hoodie-forest.jpg",
    category: "hoodies",
    slug: "forest-green-hoodie"
  },
  {
    name: "Night Shift",
    price: 5800,
    image: "/images/tee-night.jpg",
    category: "tees",
    slug: "night-shift-tee"
  },
  {
    name: "White Tee",
    price: 5800,
    image: "/images/tee-dawn.jpg",
    category: "tees",
    slug: "white-tee"
  },
  {
    name: "Sandy Dreams",
    price: 5800,
    image: "/images/tee-sand.jpg",
    category: "tees",
    slug: "sandy-dreams-tee"
  },
]

export default function ProductsSection() {
  return (
    <section id="shop" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-[var(--font-sans-body)]">
            The Collection
          </p>
          <h2 className="text-4xl md:text-5xl italic">
            Essentials for Dreamers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}