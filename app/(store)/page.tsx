import { HeroSection, ProductCategories, ProductSection, QuoteSection, AboutSection, NewsLetter, Marquee } from "@/components/store";

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
