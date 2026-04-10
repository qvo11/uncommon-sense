import { products } from "@/data/products";
import FilterableProductGrid from "@/components/store/FilterableProductGrid";

export default function ShopPage() {
  return (
    <div className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl italic">All Products</h1>
        </div>
        <FilterableProductGrid products={products} showTypeFilter={true} />
      </div>
    </div>
  );
}
