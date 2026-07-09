"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { key: "shop", href: "#shop" },
  { key: "skincare", href: "#ingredients" },
  { key: "reviews", href: "#reviews" },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 pointer-events-none">
      <div
        className={cn(
          "mx-auto grid grid-cols-3 max-w-6xl items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-300 ease-out sm:px-5 pointer-events-auto",
          scrolled
            ? "border-border/80 bg-background/85 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        {/* Left Side: Navigation Links (Desktop) / Hamburger Trigger (Mobile) */}
        <div className="flex items-center justify-start">
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors duration-200 ease-out hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger
                aria-label="Open menu"
                className="press-scale inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
                render={<button type="button" />}
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-heading text-lg text-left px-3">GLAMFOX</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1 px-4">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="press-scale mt-3 inline-flex items-center justify-center rounded-lg bg-secondary px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/80"
                  >
                    {t("catalog")}
                  </Link>
                  <a
                    href="https://www.amazon.com/s?me=A10U9JZBG90RWV&language=es&marketplaceID=ATVPDKIKX0DER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press-scale mt-3 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
                  >
                    {t("cta")}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Center: Brand Logo */}
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center press-scale cursor-pointer">
            <Image
              src="/images/logo/glamfox-logo.png"
              alt="GLAMFOX"
              width={160}
              height={40}
              className="h-6 sm:h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Right Side: CTA Buttons */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/products"
            className="press-scale hidden cursor-pointer items-center rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:bg-secondary/80 sm:inline-flex"
          >
            {t("catalog")}
          </Link>
          <a
            href="https://www.amazon.com/s?me=A10U9JZBG90RWV&language=es&marketplaceID=ATVPDKIKX0DER"
            target="_blank"
            rel="noopener noreferrer"
            className="press-scale hidden cursor-pointer items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/85 sm:inline-flex"
          >
            {t("cta")}
          </a>
          {/* Spacer on mobile to balance left menu trigger */}
          <div className="w-9 h-9 sm:hidden" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

