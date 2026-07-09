"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-coral/5 rounded-3xl border border-coral/20">
        <div className="flex size-16 items-center justify-center rounded-full bg-coral/10 text-coral mb-6">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
          {t("formSuccess")}
        </h3>
        <p className="text-muted-foreground">
          {t("responseTime")}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-3xl border border-border shadow-sm p-8 sm:p-10">
      <h3 className="font-heading text-2xl font-medium text-foreground mb-8 text-center">
        {t("formTitle")}
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              {t("formName")}
            </label>
            <input
              type="text"
              id="name"
              required
              className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-coral focus:ring-1 focus:ring-coral"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              {t("formEmail")}
            </label>
            <input
              type="email"
              id="email"
              required
              className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-coral focus:ring-1 focus:ring-coral"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            {t("formMessage")}
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="rounded-xl border border-border bg-background p-4 text-sm outline-none transition-colors focus:border-coral focus:ring-1 focus:ring-coral resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="press-scale mt-2 inline-flex h-12 items-center justify-center rounded-full bg-coral px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-coral/90 disabled:opacity-70"
        >
          {isSubmitting ? "..." : t("formSubmit")}
        </button>
      </form>
    </div>
  );
}
