import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

interface AmazonCtaProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  showIcon?: boolean;
}

export function AmazonCta({
  href,
  variant = "default",
  size = "lg",
  showIcon = true,
  className,
  children,
  ...props
}: AmazonCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant, size }),
        "press-scale cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <ArrowUpRight
          className="transition-transform duration-200 ease-out group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          data-icon="inline-end"
        />
      )}
    </a>
  );
}
