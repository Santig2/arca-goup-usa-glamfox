import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

import { Link } from "@/i18n/navigation";

export function ProductGrid({ limit, showViewAll }: { limit?: number; showViewAll?: boolean }) {
  const t = useTranslations("grid");
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <section id="shop" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl leading-tight tracking-[-0.02em] text-foreground sm:text-4xl text-balance">
              {t("headline")}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {t("subhead")}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product, i) => (
            <Reveal key={product.id} delay={Math.min(i * 0.06, 0.24)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {showViewAll && (
          <Reveal delay={0.3}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/products"
                className="press-scale inline-flex h-12 cursor-pointer items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background transition-colors duration-200 ease-out hover:bg-foreground/90"
              >
                View All Products
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
