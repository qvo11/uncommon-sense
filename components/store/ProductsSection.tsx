import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/shopify";
import type { ShopifyProductItem } from "@/lib/shopify";
import { Category } from "@/types";

export default async function ProductsSection() {
  const shopifyProducts = await getProducts();

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
          {shopifyProducts.map((product: ShopifyProductItem) => (
          <ProductCard 
          key={product.slug}
          slug={product.slug}
          category={product.category as Category}
          name={product.name}
          price={product.price}
          image={product.image} />
      ))}
        </div>
      </div>
    </section>
  );
}
