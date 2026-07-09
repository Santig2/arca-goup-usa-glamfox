"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Droplets, Sprout, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/products";

const BUBBLE_ICONS = [Droplets, Sprout, Layers];

export function FeaturedProduct() {
  const t = useTranslations("featured");
  const bubbles = t.raw("bubbles") as { title: string; desc: string }[];

  return (
    <section id="featured" className="scroll-mt-24 bg-[#f3f2e8] py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        
        {/* Top Header Row */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16 px-4 lg:px-8">
            <div>
              <p className="text-[#a8a596] font-medium text-lg tracking-wide mb-2 uppercase">
                {t("label")}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.5rem] font-medium text-foreground tracking-tight">
                {t("headline")}
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                {t("subhead")}
              </p>
            </div>
            <div className="lg:pb-2">
              <h3 className="font-heading text-xl sm:text-2xl text-foreground font-medium mb-3">
                {t("mainDesc")}
              </h3>
              <p className="text-[13px] text-muted-foreground">
                {t("subDesc")}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom Content Row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Product Image */}
          <Reveal delay={0.1}>
            <div className="relative aspect-square w-full max-w-[600px] mx-auto overflow-hidden">
              <Image
                src="/images/products/retinol-collagen-double-effect.jpg"
                alt="Retinol + Collagen Double Effect Serum"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain mix-blend-multiply drop-shadow-sm scale-[1.15] origin-right sm:scale-100 sm:origin-center"
              />
            </div>
          </Reveal>

          {/* Right: Info Bubbles */}
          <Reveal delay={0.2} className="flex flex-col h-full justify-center lg:px-8">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-center text-center">
              {bubbles.map((bubble, i) => {
                const Icon = BUBBLE_ICONS[i];
                return (
                  <div key={bubble.title} className="flex flex-col items-center flex-1 group">
                    {/* Circle Icon to mimic the visual bubbles */}
                    <div className="size-24 sm:size-28 lg:size-32 rounded-full bg-white/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-center mb-6 text-foreground/80 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="size-10 sm:size-12 opacity-80" strokeWidth={1} />
                    </div>
                    <p className="text-[13px] text-muted-foreground mb-1.5 leading-relaxed">
                      {bubble.desc}
                    </p>
                    <h4 className="font-medium text-foreground text-[15px] whitespace-pre-wrap">
                      {bubble.title}
                    </h4>
                  </div>
                );
              })}
            </div>
            
            {/* Subtle note at the bottom right */}
            <div className="text-center sm:text-right mt-16 text-xs text-muted-foreground/60">
              ※ Formulation characteristics.
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
