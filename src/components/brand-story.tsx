"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal";

const STORY_IMAGES = [
  "/images/hero/hero-5.png",
  "/images/hero/hero-6-m.png",
  "/images/hero/hero-7.png",
  "/images/hero/hero-8.jpeg",
];

export function BrandStory() {
  const t = useTranslations("story");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % STORY_IMAGES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + STORY_IMAGES.length) % STORY_IMAGES.length);
  };

  const slideVariants: any = {
    enter: (dir: number) => ({ x: dir > 0 ? "10%" : "-10%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } } },
    exit: (dir: number) => ({ x: dir < 0 ? "10%" : "-10%", opacity: 0, transition: { opacity: { duration: 0.4 } } }),
  };

  return (
    <section id="ingredients" className="scroll-mt-24 bg-white">
      <div className="w-full">
        <div className="grid lg:grid-cols-2">
          {/* Left Side: Interactive Carousel */}
          <Reveal className="w-full h-[50vh] sm:h-[60vh] lg:h-auto min-h-[400px]">
            <div className="relative w-full h-full overflow-hidden bg-secondary">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={STORY_IMAGES[currentIndex]}
                    alt={`GLAMFOX Philosophy ${currentIndex + 1}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-[85%_center] scale-[1.15] origin-right lg:scale-100 lg:origin-center lg:object-right-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Right Side: Typography matching the real site structure */}
          <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-20 lg:py-24 xl:px-32">
            <Reveal delay={0.1}>
              {/* Overline */}
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 font-medium tracking-wide text-balance uppercase">
                GLAMFOX PHILOSOPHY & STANDARD
              </p>
              
              {/* Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-[-0.02em] text-foreground text-balance">
                {t("headline")}
              </h2>
              
              {/* Divider */}
              <div className="w-8 h-[1px] bg-foreground my-8 sm:my-10"></div>
              
              {/* Body Text */}
              <div className="space-y-5">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {t("body1")}
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {t("body2")}
                </p>
              </div>

              {/* Functional Carousel Arrows */}
              <div className="flex items-center gap-6 mt-12 sm:mt-16 text-muted-foreground/60">
                <button 
                  onClick={prevSlide}
                  className="hover:text-foreground transition-colors cursor-pointer p-2 -ml-2" 
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6 sm:size-7" strokeWidth={1.5} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="hover:text-foreground transition-colors cursor-pointer p-2" 
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6 sm:size-7" strokeWidth={1.5} />
                </button>
                
                {/* Indicators */}
                <div className="ml-4 flex items-center gap-2">
                  {STORY_IMAGES.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/30"}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
