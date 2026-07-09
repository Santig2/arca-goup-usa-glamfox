import { getTranslations } from "next-intl/server";
import { Mail, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/social-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-secondary/30 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <h1 className="font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t("headline")}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("subhead")}
            </p>
          </div>
        </section>

        <section className="py-24 sm:py-32 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-12 sm:grid-cols-3">
              
              {/* Email */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm">
                <div className="flex size-14 items-center justify-center rounded-full bg-coral/10 text-coral mb-6">
                  <Mail className="size-6" />
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  {t("emailLabel")}
                </h3>
                <a 
                  href={`mailto:${t("email")}`}
                  className="text-muted-foreground hover:text-coral transition-colors"
                >
                  {t("email")}
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm">
                <div className="flex size-14 items-center justify-center rounded-full bg-coral/10 text-coral mb-6">
                  <Phone className="size-6" />
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  {t("phoneLabel")}
                </h3>
                <a 
                  href={`tel:${t("phone")}`}
                  className="text-muted-foreground hover:text-coral transition-colors"
                >
                  {t("phone")}
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-border shadow-sm">
                <div className="flex size-14 items-center justify-center rounded-full bg-coral/10 text-coral mb-6">
                  <InstagramIcon className="size-6" />
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  {t("socialLabel")}
                </h3>
                <a 
                  href="https://www.instagram.com/ksecretsbeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-coral transition-colors"
                >
                  {t("social")}
                </a>
              </div>

            </div>

            <div className="mt-16 sm:mt-24">
              <ContactForm />
            </div>

            <div className="mt-16 sm:mt-24 text-center">
              <p className="text-sm text-muted-foreground">
                {t("responseTime")}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
