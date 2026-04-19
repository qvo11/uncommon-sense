import { createStorefrontApiClient } from '@shopify/storefront-api-client';

// Use in Server Components, Route Handlers — never exposed to browser
export const shopifyServer = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-01',
  privateAccessToken: process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN!,
});

// Use in Client Components — cart, search, live updates
export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2025-01',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
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
  category: string;
  slug: string;
  color: string;
  variantId: string;
};

export async function getProducts(): Promise<ShopifyProductItem[]> {
  const { data } = await shopifyServer.request(`
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

  return data.products.edges.map((edge: ShopifyProduct) => {
    const product = edge.node;
    const variant = product.variants.edges[0].node;
    const colorOption = variant.selectedOptions.find(
      (o: ShopifyProductOption) => o.name.toLowerCase() === 'color'
    );

    return {
      id: product.id,
      name: product.title,
      price: Math.round(parseFloat(variant.price.amount) * 100),
      image: product.images.edges[0]?.node.url ?? '',
      category: product.productType.toLowerCase(),
      slug: product.handle,
      color: colorOption?.value.toLowerCase() ?? '',
      variantId: variant.id,
    };
  });
}