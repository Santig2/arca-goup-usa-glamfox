"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

const REVIEW_IMAGES = [
  "/images/products/ginseng-peptide-face-cream.jpg",
  "/images/products/rice-niacinamide-serum.jpg",
  "/images/products/retinol-collagen-serum.jpg",
  "/images/products/rice-niacinamide-cleansing-oil-brightening-and-hydrating.jpg",
  "/images/products/rice-niacinamide-toner.jpg",
  "/images/products/ginseng-collagen-wrap-mask.jpg",
  "/images/products/red-bean-collagen-eye-cream.jpg",
  "/images/products/rice-niacinamide-foaming-cleanser.jpg",
  "/images/products/matcha-retinol-ceramide-face-serum.jpg",
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section id="reviews" className="scroll-mt-24 py-20 sm:py-28 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-wider text-foreground">
              {t("headline")}
            </h2>
          </div>
        </Reveal>

        {/* Horizontal Slider Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {items.map((item, i) => (
            <Reveal
              key={item.name}
              delay={Math.min(i * 0.06, 0.24)}
              className="min-w-[280px] w-[85vw] sm:w-[320px] lg:w-[340px] shrink-0 snap-center sm:snap-start"
            >
              <figure className="flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow">
                {/* Image Section */}
                <div className="relative aspect-square w-full bg-[#f0f0f0] overflow-hidden">
                  <Image
                    src={REVIEW_IMAGES[i % REVIEW_IMAGES.length]}
                    alt={`Review by ${item.name}`}
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 85vw"
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-foreground truncate mr-2">
                      {item.name}
                    </h3>
                    <div className="flex text-[#ff4b4b] shrink-0">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="size-[14px]"
                          fill={starIdx < item.rating ? "currentColor" : "none"}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-6">
                    {item.quote}
                  </blockquote>
                  
                  <div className="mt-auto">
                    <button className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                      read more &gt;
                    </button>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
