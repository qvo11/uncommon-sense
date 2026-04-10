"use client";

import { useState, useMemo } from "react";
import type { ProductItem } from "@/data/products";
import ProductCard from "./ProductCard";
import FilterDrawer from "./FilterDrawer";

const AVAILABLE_COLORS = ["black", "white", "green", "sand"];

type Props = {
  products: ProductItem[];
  showTypeFilter: boolean;
};

function toggle(set: Set<string>, value: string, checked: boolean): Set<string> {
  const next = new Set(set);
  checked ? next.add(value) : next.delete(value);
  return next;
}

export default function FilterableProductGrid({ products, showTypeFilter }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeColors, setActiveColors] = useState<Set<string>>(new Set());
  const [activeSizes, setActiveSizes] = useState<Set<string>>(new Set());
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (activeColors.size === 0 || activeColors.has(p.color)) &&
          (activeTypes.size === 0 || activeTypes.has(p.category))
        // activeSizes: UI-only — no size field on ProductItem yet
      ),
    [products, activeColors, activeTypes]
  );

  return (
    <div className="relative">
      {/* Filter button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setDrawerOpen(true)}
          className="text-xs tracking-widest uppercase border border-neutral-950 px-4 py-2 hover:bg-neutral-950 hover:text-white transition-colors duration-200"
        >
          Filter
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filtered.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-3 text-center text-sm text-neutral-400 py-16">
            No products match your filters.
          </p>
        )}
      </div>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeColors={activeColors}
        activeSizes={activeSizes}
        activeTypes={activeTypes}
        showTypeFilter={showTypeFilter}
        availableColors={AVAILABLE_COLORS}
        onColorChange={(color, checked) => setActiveColors(toggle(activeColors, color, checked))}
        onSizeChange={(size, checked) => setActiveSizes(toggle(activeSizes, size, checked))}
        onTypeChange={(type, checked) => setActiveTypes(toggle(activeTypes, type, checked))}
      />
    </div>
  );
}
