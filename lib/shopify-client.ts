import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// For future client-side use in Client Components — cart, search, live updates
export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-01',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
});
