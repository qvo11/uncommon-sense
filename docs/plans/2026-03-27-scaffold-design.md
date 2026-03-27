# Scaffold Design — Uncommon Sense E-Commerce

**Date:** 2026-03-27
**Stack:** Next.js 16.2.1 (App Router), TypeScript, Tailwind, Prisma + PostgreSQL, Clerk, Cloudinary, Stripe

---

## Decisions

- **Structure:** Option A — route groups in `app/`, shared code at project root
- **Product routing:** Category-based (`/shop/hoodies/[slug]`, `/shop/tees/[slug]`)
- **Mutations:** Next.js Server Actions (no REST API except Stripe webhook)
- **Admin:** Separate `(admin)` route group with its own root layout and shell

---

## `app/` Routing Tree

```
app/
├── layout.tsx                        # minimal root (fonts, ClerkProvider)
├── not-found.tsx
│
├── (store)/
│   ├── layout.tsx                    # storefront shell: header, footer
│   ├── page.tsx                      # /
│   ├── shop/
│   │   ├── page.tsx                  # /shop
│   │   ├── hoodies/
│   │   │   ├── page.tsx              # /shop/hoodies
│   │   │   └── [slug]/page.tsx       # /shop/hoodies/[slug]
│   │   └── tees/
│   │       ├── page.tsx              # /shop/tees
│   │       └── [slug]/page.tsx       # /shop/tees/[slug]
│   ├── cart/page.tsx                 # /cart
│   ├── checkout/page.tsx             # /checkout
│   ├── orders/
│   │   ├── page.tsx                  # /orders
│   │   └── [id]/page.tsx             # /orders/[id]
│   └── account/page.tsx             # /account
│
├── (admin)/
│   ├── layout.tsx                    # admin shell: sidebar, nav
│   └── admin/
│       ├── page.tsx                  # /admin
│       ├── products/
│       │   ├── page.tsx              # /admin/products
│       │   ├── new/page.tsx          # /admin/products/new
│       │   └── [id]/page.tsx         # /admin/products/[id]
│       └── orders/
│           ├── page.tsx              # /admin/orders
│           └── [id]/page.tsx         # /admin/orders/[id]
│
└── api/
    └── webhooks/stripe/route.ts      # Stripe webhook handler
```

---

## Root-Level Shared Directories

```
components/
├── ui/       # Button, Input, Badge, Modal — primitives
├── layout/   # Header, Footer, Nav, MobileMenu
├── store/    # ProductCard, ProductGrid, CartItem, CartDrawer,
│             # CheckoutForm, OrderSummary
└── admin/    # ProductForm, OrderTable, ImageUploader, StatsCard

lib/
├── db.ts           # Prisma client singleton
├── cloudinary.ts   # upload helper
└── stripe.ts       # Stripe client singleton

actions/
├── cart.ts         # add/remove/update cart
├── checkout.ts     # create Stripe checkout session
├── orders.ts       # fetch order history
└── products.ts     # admin CRUD

types/
└── index.ts        # shared TS types (Product, Order, CartItem, etc.)

prisma/
├── schema.prisma
└── migrations/
```
