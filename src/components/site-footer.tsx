import Image from "next/image";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { InstagramIcon, YoutubeIcon } from "@/components/social-icons";

interface FooterLink {
  label: string;
  href: string;
}

export function SiteFooter() {
  const t = useTranslations("footer");
  const shopLinks = t.raw("shopLinks") as FooterLink[];
  const companyLinks = t.raw("companyLinks") as FooterLink[];

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <Image
              src="/images/logo/glamfox-logo.png"
              alt="GLAMFOX"
              width={128}
              height={32}
              className="h-6 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("blurb")}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GLAMFOX on Instagram"
                className="press-scale flex size-9 cursor-pointer items-center justify-center rounded-full bg-card text-foreground/70 transition-colors hover:text-coral"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GLAMFOX on YouTube"
                className="press-scale flex size-9 cursor-pointer items-center justify-center rounded-full bg-card text-foreground/70 transition-colors hover:text-coral"
              >
                <YoutubeIcon className="size-4" />
              </a>
              <a
                href={`mailto:${t("email")}`}
                aria-label="Email GLAMFOX"
                className="press-scale flex size-9 cursor-pointer items-center justify-center rounded-full bg-card text-foreground/70 transition-colors hover:text-coral"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{t("shopHeading")}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{t("companyHeading")}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="disclosure" className="mt-12 scroll-mt-24 border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-6">
          <div>
            <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
              {t("disclosure")}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t("copyright")}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 text-xs font-medium text-muted-foreground/80 sm:text-right shrink-0">
            <p>{t("sponsoredBy")}</p>
            <a 
              href="https://www.addstrategic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              {t("builtBy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
