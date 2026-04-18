# Uncommon Sense — Storefront

Custom Next.js storefront for Uncommon Sense. Built with Next.js 16, Tailwind CSS v4, Clerk authentication, Stripe payments, Prisma ORM, and Cloudinary image hosting.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Auth | Clerk |
| Payments | Stripe |
| Database | PostgreSQL via Prisma |
| Images | Cloudinary |
| Language | TypeScript |

---

## Project Structure

```
app/
  (store)/          # Customer-facing pages
    page.tsx          # Home
    shop/             # Shop, Hoodies, Tees, product detail pages
    cart/
    checkout/
    account/
    orders/
  (admin)/          # Admin dashboard
    admin/
      products/       # Create, edit, list products
      orders/         # View and manage orders
  api/
    webhooks/stripe/  # Stripe webhook handler
    subscribe/        # Mailchimp newsletter signup
components/
  store/            # Homepage sections, product grid, filters
  layout/           # NavBar, Footer
  ui/               # Shared UI primitives
lib/
  db.ts             # Prisma client
  stripe.ts         # Stripe client
  cloudinary.ts     # Cloudinary client
data/
  products.ts       # Static product seed data
prisma/
  schema.prisma     # Database schema (Product, Order, OrderItem)
public/
  images/           # Static images
  fonts/            # Custom fonts (Aston Script)
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in all values:

```bash
cp .env.example .env.local
```

Required services:
- **PostgreSQL** — local or hosted (e.g. Supabase, Railway)
- **Clerk** — [clerk.com](https://clerk.com) — authentication
- **Stripe** — [stripe.com](https://stripe.com) — payments + webhooks
- **Cloudinary** — [cloudinary.com](https://cloudinary.com) — product image hosting
- **Mailchimp** — newsletter signup (optional)

### 3. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `STRIPE_SECRET_KEY` | Stripe server-side key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe client-side key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

---

## Stripe Webhooks

For local development, forward webhooks using the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret it outputs into `STRIPE_WEBHOOK_SECRET` in `.env.local`.

---

## Build & Deploy

```bash
npm run build
npm run start
```

The app can be deployed to any Node.js host (Vercel, Railway, etc.). Ensure all environment variables are set in the hosting platform.
