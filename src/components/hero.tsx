"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { featuredProduct } from "@/data/products";

const SLIDES = [
  { src: "/images/hero/hero-1.png", alt: "GLAMFOX Skincare Collection" },
  { src: "/images/hero/hero-2.png", alt: "GLAMFOX Skincare Routine" },
  { src: "/images/hero/hero-3.png", alt: "GLAMFOX Premium Skincare" },
  { src: "/images/hero/hero-4.png", alt: "GLAMFOX Glass Skin Essentials" },
  { src: "/images/hero/hero-5.png", alt: "GLAMFOX Natural Ingredients" },
  { src: "/images/hero/hero-6-m.png", alt: "GLAMFOX Korean Formulation" },
  { src: "/images/hero/hero-7.png", alt: "GLAMFOX Skincare Science" },
  { src: "/images/hero/hero-8.jpeg", alt: "GLAMFOX Standard" },
];

const AUTOPLAY_DELAY = 6000; // 6 seconds

export function Hero() {
  const t = useTranslations("hero");
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch swiping handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Carousel transition variants (Fade/Slide hybrid for ultra-premium feel)
  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? "8%" : "-8%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 180, damping: 26 },
        opacity: { duration: 0.6, ease: "easeOut" },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "8%" : "-8%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 180, damping: 26 },
        opacity: { duration: 0.6, ease: "easeIn" },
      },
    }),
  };

  const container: any = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#e0f1f6] pt-14 sm:pt-16 lg:pt-0">
      {/* 
        Responsive Aspect Ratio Wrapper.
        Maintains the exact aspect ratio of the images:
        - Mobile: aspect-[1664/869] (approx 1.91)
        - Desktop: aspect-[5864/2820] (approx 2.08)
      */}
      <div
        className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-auto lg:aspect-[5864/2820] overflow-hidden select-none group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
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
              src={SLIDES[currentIndex].src}
              alt={SLIDES[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              sizes="100vw"
              className="object-cover object-[85%_center] scale-[1.15] origin-right sm:scale-100 sm:origin-center lg:object-right-center pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Text Overlay in English (Restored as it was before) */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-12 md:px-16 lg:px-20 pointer-events-none">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-[95%] sm:max-w-[70%] lg:max-w-[48%] text-foreground pointer-events-auto"
            >
              {/* Rating badge */}
              <motion.div
                variants={item}
                className="mb-4 sm:mb-6 flex items-center gap-3 bg-white/70 backdrop-blur-xs w-fit px-3 py-1.5 rounded-full border border-white/40 shadow-xs"
              >
                <div className="flex text-coral">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground">
                  {featuredProduct.rating ?? 4.8}
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    from {(featuredProduct.reviewCount ?? 1204).toLocaleString("en-US")}+ reviews
                  </span>
                </p>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={item}
                className="font-heading text-[clamp(1.85rem,4.5vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-foreground text-balance"
              >
                {t("headline")}
              </motion.h1>

              {/* Subhead */}
              <motion.p
                variants={item}
                className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md sm:max-w-lg text-balance"
              >
                {t("subhead")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={item} className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#shop"
                  className="press-scale inline-flex h-11 sm:h-12 cursor-pointer items-center justify-center rounded-lg bg-primary px-6 sm:px-7 text-xs sm:text-sm font-medium text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/85"
                >
                  {t("ctaPrimary")}
                </a>
                <a
                  href="#featured"
                  className="press-scale inline-flex h-11 sm:h-12 cursor-pointer items-center justify-center rounded-lg border border-border bg-white/80 backdrop-blur-xs px-6 sm:px-7 text-xs sm:text-sm font-medium text-foreground transition-colors duration-200 ease-out hover:bg-muted"
                >
                  {t("ctaSecondary")}
                </a>
              </motion.div>

              {/* Microtrust */}
              <motion.p variants={item} className="mt-4 text-[10px] sm:text-xs text-muted-foreground">
                {t("microtrust")}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows - Smooth fade on desktop hover */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/5 bg-white/30 text-black/80 backdrop-blur-xs transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/60 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
        >
          <ChevronLeft className="size-5 sm:size-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/5 bg-white/30 text-black/80 backdrop-blur-xs transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/60 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
        >
          <ChevronRight className="size-5 sm:size-6" />
        </button>

        {/* Indicator Dots with premium expand-active animation */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 pointer-events-auto">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex
                  ? "w-6 bg-black/60 shadow-xs"
                  : "w-2 bg-black/20 hover:bg-black/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

