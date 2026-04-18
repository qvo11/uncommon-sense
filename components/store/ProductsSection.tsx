import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section id="shop" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">
            The Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-aston-script italic">
            Day Dreamers Essentials
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
