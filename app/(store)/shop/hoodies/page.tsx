import { getProducts } from "@/lib/shopify-server";
import FilterableProductGrid from "@/components/store/FilterableProductGrid";

export default async function HoodiesPage() {
  const hoodies = (await getProducts()).filter((p) => p.category === "hoodies");
  return (
    <div className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl italic">Hoodies</h1>
        </div>
        <FilterableProductGrid products={hoodies} showTypeFilter={false} />
      </div>
    </div>
  );
}
