import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import type { Category } from '@/types';

// Use in Server Components, Route Handlers — never exposed to browser
export const shopifyServer = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-01',
  privateAccessToken: process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN!,
});

type ShopifyProductOption = {
  name: string;
  value: string;
};

type ShopifyVariant = {
  node: {
    id: string;
    title: string;
    price: {
      amount: string;
    };
    selectedOptions: ShopifyProductOption[];
  };
};

type ShopifyImage = {
  node: {
    url: string;
    altText: string | null;
  };
};

type ShopifyProduct = {
  node: {
    id: string;
    title: string;
    handle: string;
    productType: string;
    variants: {
      edges: ShopifyVariant[];
    };
    images: {
      edges: ShopifyImage[];
    };
  };
};

export type ShopifyProductItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  slug: string;
  color: string;
  variantId: string;
};

const VALID_CATEGORIES: Category[] = ['hoodies', 'tees'];

export async function getProducts(): Promise<ShopifyProductItem[]> {
  const { data, errors } = await shopifyServer.request(`
    query {
      products(first: 20) {
        edges {
          node {
            id
            title
            handle
            productType
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw new Error(`Shopify API errors: ${JSON.stringify(errors)}`);
  }

  if (!data) {
    throw new Error('Shopify API returned null/undefined data');
  }

  const products: ShopifyProductItem[] = [];

  for (const edge of data.products.edges as ShopifyProduct[]) {
    const product = edge.node;

    // Skip products with no variants
    if (product.variants.edges.length === 0) {
      continue;
    }

    // Only include products with known categories
    const categoryCandidate = product.productType.toLowerCase();
    if (!VALID_CATEGORIES.includes(categoryCandidate as Category)) {
      continue;
    }
    const category = categoryCandidate as Category;

    const variant = product.variants.edges[0].node;
    const colorOption = variant.selectedOptions.find(
      (o: ShopifyProductOption) => o.name.toLowerCase() === 'color'
    );

    products.push({
      id: product.id,
      name: product.title,
      price: Math.round(parseFloat(variant.price.amount) * 100),
      image: product.images.edges[0]?.node.url ?? '',
      category,
      slug: product.handle,
      color: colorOption?.value.toLowerCase() ?? '',
      variantId: variant.id,
    });
  }

  return products;
}
