import { HeroSection, ProductCategories, ProductSection, QuoteSection, AboutSection, NewsLetter, Marquee } from "@/components/store";
import { shopifyServer } from '@/lib/shopify';

const { data } = await shopifyServer.request(`
  query {
    shop {
      name
    }
  }
`);

console.log(data.shop.name);

export default function HomePage() {
  return (
    <>
    <HeroSection />
    <Marquee />
    <ProductSection />
    <ProductCategories />
    <QuoteSection />
    <AboutSection />
    <NewsLetter />
    </>
  );
}
