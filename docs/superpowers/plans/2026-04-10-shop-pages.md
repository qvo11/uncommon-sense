# Shop Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build filterable `/shop`, `/shop/hoodies`, and `/shop/tees` pages using a shared product data file and a slide-in filter drawer.

**Architecture:** Product data and type live in `data/products.ts` and are imported by both the existing `ProductsSection` homepage component and the three new shop pages. Each page is a Server Component that passes a pre-filtered product list to `FilterableProductGrid`, a Client Component that owns all filter state and renders `FilterDrawer`.

**Tech Stack:** Next.js 16, React 19, Tailwind v4, TypeScript, Lucide React

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `data/products.ts` | Single source of truth for `ProductItem` type + product array |
| Modify | `components/store/ProductsSection.tsx` | Import from `data/products.ts` instead of defining locally |
| Create | `components/store/FilterDrawer.tsx` | Slide-in drawer UI with filter checkboxes |
| Create | `components/store/FilterableProductGrid.tsx` | Filter state, Filter button, product grid |
| Modify | `app/(store)/shop/page.tsx` | All-products page |
| Modify | `app/(store)/shop/hoodies/page.tsx` | Hoodies-only page |
| Modify | `app/(store)/shop/tees/page.tsx` | Tees-only page |

---

## Task 1: Create `data/products.ts`

**Files:**
- Create: `data/products.ts`

- [ ] **Step 1: Create the file**

```ts
// data/products.ts
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
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add data/products.ts
git commit -m "feat: add shared product data file"
```

---

## Task 2: Update `ProductsSection.tsx` to import from `data/products.ts`

**Files:**
- Modify: `components/store/ProductsSection.tsx`

- [ ] **Step 1: Replace the file**

```tsx
// components/store/ProductsSection.tsx
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
          <h2 className="text-4xl md:text-5xl italic">
            Essentials for Dreamers
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
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/store/ProductsSection.tsx
git commit -m "refactor: import products from shared data file"
```

---

## Task 3: Create `FilterDrawer.tsx`

**Files:**
- Create: `components/store/FilterDrawer.tsx`

- [ ] **Step 1: Create the file**

```tsx
// components/store/FilterDrawer.tsx
"use client";

import { X } from "lucide-react";

const SIZES = ["S", "M", "L", "XL"];
const TYPES = ["hoodies", "tees"];

type Props = {
  open: boolean;
  onClose: () => void;
  activeColors: Set<string>;
  activeSizes: Set<string>;
  activeTypes: Set<string>;
  showTypeFilter: boolean;
  availableColors: string[];
  onColorChange: (color: string, checked: boolean) => void;
  onSizeChange: (size: string, checked: boolean) => void;
  onTypeChange: (type: string, checked: boolean) => void;
};

export default function FilterDrawer({
  open,
  onClose,
  activeColors,
  activeSizes,
  activeTypes,
  showTypeFilter,
  availableColors,
  onColorChange,
  onSizeChange,
  onTypeChange,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255, 255, 255, 0.6)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute left-0 top-0 h-full w-1/5 bg-white shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <span className="text-xs tracking-widest uppercase">Filter</span>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Color */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-3">Color</p>
            <div className="space-y-2">
              {availableColors.map((color) => (
                <label key={color} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeColors.has(color)}
                    onChange={(e) => onColorChange(color, e.target.checked)}
                  />
                  <span className="text-sm capitalize">{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-3">Size</p>
            <div className="space-y-2">
              {SIZES.map((size) => (
                <label key={size} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeSizes.has(size)}
                    onChange={(e) => onSizeChange(size, e.target.checked)}
                  />
                  <span className="text-sm">{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type — /shop only */}
          {showTypeFilter && (
            <div>
              <p className="text-xs tracking-widest uppercase mb-3">Type</p>
              <div className="space-y-2">
                {TYPES.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeTypes.has(type)}
                      onChange={(e) => onTypeChange(type, e.target.checked)}
                    />
                    <span className="text-sm capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/store/FilterDrawer.tsx
git commit -m "feat: add FilterDrawer component"
```

---

## Task 4: Create `FilterableProductGrid.tsx`

**Files:**
- Create: `components/store/FilterableProductGrid.tsx`

- [ ] **Step 1: Create the file**

```tsx
// components/store/FilterableProductGrid.tsx
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
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/store/FilterableProductGrid.tsx
git commit -m "feat: add FilterableProductGrid component"
```

---

## Task 5: Update the three shop pages

**Files:**
- Modify: `app/(store)/shop/page.tsx`
- Modify: `app/(store)/shop/hoodies/page.tsx`
- Modify: `app/(store)/shop/tees/page.tsx`

- [ ] **Step 1: Replace `app/(store)/shop/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Replace `app/(store)/shop/hoodies/page.tsx`**

```tsx
import { products } from "@/data/products";
import FilterableProductGrid from "@/components/store/FilterableProductGrid";

export default function HoodiesPage() {
  const hoodies = products.filter((p) => p.category === "hoodies");
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
```

- [ ] **Step 3: Replace `app/(store)/shop/tees/page.tsx`**

```tsx
import { products } from "@/data/products";
import FilterableProductGrid from "@/components/store/FilterableProductGrid";

export default function TeesPage() {
  const tees = products.filter((p) => p.category === "tees");
  return (
    <div className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl italic">Tees</h1>
        </div>
        <FilterableProductGrid products={tees} showTypeFilter={false} />
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Verify visually**

Run `npm run dev` and visit:
- `http://localhost:3000/shop` — shows all 6 products, Filter button top-right, Type filter in drawer
- `http://localhost:3000/shop/hoodies` — shows 3 hoodies, no Type filter in drawer
- `http://localhost:3000/shop/tees` — shows 3 tees, no Type filter in drawer
- Open the Filter drawer on any page: verifies it slides from left, 20% width, overlay behind it, `×` closes it, clicking overlay closes it
- Select Color: "black" on `/shop` — should show The Midnight Dreamer + Night Shift only
- Select Color: "black" + Type: "hoodies" on `/shop` — should show only The Midnight Dreamer

- [ ] **Step 6: Commit**

```bash
git add app/(store)/shop/page.tsx app/(store)/shop/hoodies/page.tsx app/(store)/shop/tees/page.tsx
git commit -m "feat: implement shop, hoodies, and tees pages with filter drawer"
```
