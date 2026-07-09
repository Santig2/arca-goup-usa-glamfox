import { Truck, ShieldCheck, Leaf, RotateCcw, Activity, Globe, Droplets, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [Truck, ShieldCheck, Leaf, RotateCcw, Activity, Globe, Droplets, Sparkles];

export function TrustBar() {
  const t = useTranslations("trustBar");
  const items = t.raw("items") as { label: string; detail: string }[];
  // Duplicate items to create seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <section className="border-y border-border bg-secondary/60 overflow-hidden">
      <div className="py-6 sm:py-8 flex w-full relative">
        <div className="flex w-max animate-marquee space-x-12 px-6">
          {marqueeItems.map((entry, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={`${entry.label}-${i}`} className="flex items-start gap-3 shrink-0 w-64 sm:w-72">
                <Icon className="mt-0.5 size-5 shrink-0 text-coral" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-semibold text-foreground">{entry.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                    {entry.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
