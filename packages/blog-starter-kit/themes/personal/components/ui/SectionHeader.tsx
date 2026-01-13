import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  description?: string;
  linkHref?: string;
  linkText?: string;
}

export const SectionHeader = ({ title, description, linkHref, linkText }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
      <div className="space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground text-lg max-w-2xl">
            {description}
          </p>
        )}
      </div>
      
      {linkHref && (
        <Link 
          href={linkHref}
          className="group flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
        >
          <span>{linkText || "View more"}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
};
