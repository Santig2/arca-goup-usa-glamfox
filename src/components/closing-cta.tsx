import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/reveal";

export function ClosingCta() {
  const t = useTranslations("newsletter");

  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="/images/hero/lip-duo-model-apply.jpg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-3xl leading-tight tracking-[-0.02em] text-primary-foreground sm:text-4xl text-balance">
            {t("headline")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-primary-foreground/75">
            {t("body")}
          </p>
          <div className="mt-8">
            <a
              href="#shop"
              className="press-scale inline-flex h-12 cursor-pointer items-center justify-center rounded-lg bg-coral px-8 text-sm font-medium text-coral-foreground transition-colors duration-200 ease-out hover:bg-coral/85 sm:text-base"
            >
              {t("cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
