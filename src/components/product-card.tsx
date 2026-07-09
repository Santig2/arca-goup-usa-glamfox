"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { AmazonCta } from "@/components/amazon-cta";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("grid");
  const [imgError, setImgError] = useState(false);

  const rating = product.rating ?? 5.0;
  const reviewCount = product.reviewCount ?? 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_2px_10px_-4px_oklch(0_0_0/0.12)] transition-shadow duration-200 ease-out hover:shadow-[0_10px_28px_-8px_oklch(0_0_0/0.18)]">
      <div className="relative aspect-square w-full overflow-hidden bg-secondary rounded-t-2xl">
        {product.image && !imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
            <span className="font-heading text-lg text-center px-6 leading-tight text-balance">{product.name}</span>
          </div>
        )}
        {product.tags && product.tags[0] && (
          <Badge className="absolute left-3 top-3 bg-card text-foreground shadow-sm">
            {product.tags[0]}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg leading-snug tracking-[-0.01em] text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <div className="flex text-coral">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3.5"
                fill={i < Math.round(rating) ? "currentColor" : "none"}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span>
            {rating} ({reviewCount.toLocaleString()} {t("ratingLabel")})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-heading text-xl text-foreground">{product.price}</span>
          <AmazonCta
            href={product.amazonLink}
            size="default"
            variant="outline"
            className="h-9 px-3.5 text-xs sm:text-sm"
          >
            {t("cta")}
          </AmazonCta>
        </div>
      </div>
    </div>
  );
}
