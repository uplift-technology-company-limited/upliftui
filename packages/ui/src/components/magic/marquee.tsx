"use client";

import { useState, type CSSProperties } from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      style={{ "--gap": gap } as CSSProperties}
      className={cn(
        "flex overflow-hidden p-2 [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "flex-row": !vertical,
              "flex-col": vertical,
              "[animation-direction:reverse]": reverse,
            })}
            style={{
              animation: `${vertical ? "marquee-vertical" : "marquee"} ${duration} linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
