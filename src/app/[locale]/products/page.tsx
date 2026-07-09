import { getTranslations } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { ProductGrid } from "@/components/product-grid";
import { SiteFooter } from "@/components/site-footer";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "grid" });
  return {
    title: `All Products | GLAMFOX`,
    description: t("subhead"),
  };
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-24 pb-10">
        <ProductGrid />
      </main>
      <SiteFooter />
    </>
  );
}
