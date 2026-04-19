# Uncommon Sense — Storefront

Custom Next.js headless storefront for Uncommon Sense, powered by the Shopify Storefront API. Built with Next.js 16, Tailwind CSS v4, Clerk authentication, and Cloudinary image hosting. Payments are handled natively through Shopify.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Storefront Data | Shopify Storefront API (`@shopify/storefront-api-client`) |
| Payments | Shopify Checkout |
| Styling | Tailwind CSS v4 |
| Auth | Clerk |
| Images | Shopify CDN (`cdn.shopify.com`) + Cloudinary |
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
    subscribe/        # Mailchimp newsletter signup
components/
  store/            # Homepage sections, product grid, filters
  layout/           # NavBar, Footer
  ui/               # Shared UI primitives
lib/
  shopify-server.ts  # Shopify Storefront API client (server-side, private token)
  shopify-client.ts  # Shopify Storefront API client (client-side, public token)
  cloudinary.ts      # Cloudinary client
data/
  products.ts       # Static fallback product data
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
- **Shopify** — Storefront API access token from your Shopify admin
- **Clerk** — [clerk.com](https://clerk.com) — authentication
- **Cloudinary** — [cloudinary.com](https://cloudinary.com) — image hosting
- **Mailchimp** — newsletter signup (optional)

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Your Shopify store domain (e.g. `your-store.myshopify.com`) |
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` | Shopify Storefront API public access token (client-side) |
| `SHOPIFY_STOREFRONT_PRIVATE_TOKEN` | Shopify Storefront API private access token (server-side only) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `MAILCHIMP_API_KEY` | Mailchimp API key |
| `MAILCHIMP_SERVER_PREFIX` | Mailchimp server prefix (e.g. `us1`) |
| `MAILCHIMP_AUDIENCE_ID` | Mailchimp audience/list ID |

---

## Shopify Setup

1. In your Shopify admin, go to **Apps > Develop apps** and create a new app.
2. Under **API credentials**, enable the Storefront API and grant the required scopes (`products`, `collections`, etc.).
3. Copy the **public** and **private** access tokens into your `.env.local`.

The Storefront API client is split across two files:
- `lib/shopify-server.ts` — uses the private token, safe for Server Components and Route Handlers only
- `lib/shopify-client.ts` — uses the public token, safe for Client Components (cart, live updates)

---

## Build & Deploy

```bash
npm run build
npm run start
```

Deploy to any Node.js host (Vercel, Railway, etc.). Ensure all environment variables are configured in the hosting platform.
