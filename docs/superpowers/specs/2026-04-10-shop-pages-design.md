# Shop Pages Design

**Date:** 2026-04-10
**Scope:** `/shop`, `/shop/hoodies`, `/shop/tees` pages with filterable product grids and a slide-in filter drawer.

---

## 1. Data Layer

**File:** `data/products.ts`

Exports:
- `ProductItem` type (extracted from `ProductsSection.tsx`, extended with `color: string`)
- `products` array (the canonical product list)

```ts
export type ProductItem = {
  name: string;
  price: number;
  image: string;
  category: "hoodies" | "tees";
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

`ProductsSection.tsx` is updated to import `ProductItem` and `products` from `data/products.ts` instead of defining them locally.

---

## 2. New Components

Both live in `components/store/`.

### `FilterableProductGrid.tsx`

**Type:** Client Component (`"use client"`)

**Props:**
```ts
type Props = {
  products: ProductItem[];
  showTypeFilter: boolean;
};
```

**Responsibilities:**
- Owns filter state: `activeColors`, `activeSizes`, `activeTypes` (all `Set<string>`)
- Renders a "Filter" button in the upper-right corner of the section
- Filters the product list in real time: a product is shown only if it matches all active filter groups (AND logic). An empty group = no constraint from that group.
- Renders filtered products in a 3-column grid using `ProductCard`
- Renders `FilterDrawer` when open, passing current filter state and change handlers

### `FilterDrawer.tsx`

**Type:** Client Component (`"use client"`)

**Props:**
```ts
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
```

**Layout:**
- Fixed overlay covers the full viewport when open
- Overlay background: `rgba(255, 255, 255, 0.6)` — clicking it calls `onClose`
- Drawer: fixed, left edge, full height, exactly `20vw` wide
- Drawer slides in from the left via CSS transform (`-translate-x-full` → `translate-x-0`)
- `×` close button in the drawer's upper-right corner

**Filter groups inside drawer:**
| Group | Options | Pages |
|-------|---------|-------|
| Color | black, white, green, sand | all |
| Size  | S, M, L, XL | all |
| Type  | hoodie, tee | `/shop` only |

Each option is a checkbox. Checking/unchecking calls the relevant `onChange` handler. Multiple selections within a group are OR'd; across groups they are AND'd.

---

## 3. Pages

All three existing stub pages are replaced. Each is a Server Component.

### `/shop` — `app/(store)/shop/page.tsx`
- Imports all products from `data/products.ts`
- Renders heading "All Products"
- Passes all products to `FilterableProductGrid` with `showTypeFilter={true}`

### `/shop/hoodies` — `app/(store)/shop/hoodies/page.tsx`
- Imports products filtered to `category === "hoodies"`
- Renders heading "Hoodies"
- Passes filtered products to `FilterableProductGrid` with `showTypeFilter={false}`

### `/shop/tees` — `app/(store)/shop/tees/page.tsx`
- Imports products filtered to `category === "tees"`
- Renders heading "Tees"
- Passes filtered products to `FilterableProductGrid` with `showTypeFilter={false}`

---

## 4. Filter Logic

```
visibleProducts = products.filter(p =>
  (activeColors.size === 0 || activeColors.has(p.color)) &&
  (activeSizes.size === 0 || activeSizes.has(someSize)) &&  // size is static UI only — no size field on ProductItem
  (activeTypes.size === 0 || activeTypes.has(p.category))
)
```

> **Note on Size:** `ProductItem` has no `size` field — size is a UI-only filter for now. When a size is selected, no products will be hidden (size filter is a no-op against the static data). This is intentional: the filter UI is scaffolded for when size data is added to products.

---

## 5. Files Changed / Created

| Action | Path |
|--------|------|
| Create | `data/products.ts` |
| Update | `components/store/ProductsSection.tsx` |
| Create | `components/store/FilterableProductGrid.tsx` |
| Create | `components/store/FilterDrawer.tsx` |
| Update | `app/(store)/shop/page.tsx` |
| Update | `app/(store)/shop/hoodies/page.tsx` |
| Update | `app/(store)/shop/tees/page.tsx` |
