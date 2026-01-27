import React from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const Section = ({ children, className, id, ref }: SectionProps) => {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative z-10 px-6 py-24 md:py-12 w-full mx-auto",
        className,
      )}
    >
      {children}
    </section>
  );
};

Section.displayName = "Section";
