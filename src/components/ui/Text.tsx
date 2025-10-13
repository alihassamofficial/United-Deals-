// src/components/ui/Text.tsx
"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2" | "h3" | "p" | "span";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onClick?: React.MouseEventHandler<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  >;
}

const Text = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  TextProps
>(({ children, className, as = "p", onClick }, ref) => {
  const baseClass = "text-foreground";

  switch (as) {
    case "h1":
      return (
        <h1
          ref={ref as React.Ref<HTMLHeadingElement>}
          onClick={onClick}
          className={cn(
            baseClass,
            "text-4xl md:text-5xl font-lato font-bold leading-tight",
            className
          )}
        >
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2
          ref={ref as React.Ref<HTMLHeadingElement>}
          onClick={onClick}
          className={cn(
            baseClass,
            "text-2xl md:text-3xl font-lato font-semibold leading-snug",
            className
          )}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3
          ref={ref as React.Ref<HTMLHeadingElement>}
          onClick={onClick}
          className={cn(
            baseClass,
            "text-xl md:text-2xl font-lato font-semibold",
            className
          )}
        >
          {children}
        </h3>
      );

    case "span":
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          onClick={onClick}
          className={cn(baseClass, "font-lato text-sm", className)}
        >
          {children}
        </span>
      );

    default:
      return (
        <p
          ref={ref as React.Ref<HTMLParagraphElement>}
          onClick={onClick}
          className={cn(
            baseClass,
            "font-lato text-base leading-relaxed",
            className
          )}
        >
          {children}
        </p>
      );
  }
});

Text.displayName = "Text";
export default Text;
