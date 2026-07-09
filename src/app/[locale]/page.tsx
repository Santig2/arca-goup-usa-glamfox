import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { FeaturedProduct } from "@/components/featured-product";
import { ProductGrid } from "@/components/product-grid";
import { BrandStory } from "@/components/brand-story";
import { Testimonials } from "@/components/testimonials";
import { ClosingCta } from "@/components/closing-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <FeaturedProduct />
        <ProductGrid limit={6} showViewAll={true} />
        <BrandStory />
        <Testimonials />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}


