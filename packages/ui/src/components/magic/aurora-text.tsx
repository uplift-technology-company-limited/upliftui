"use client";

import { memo, useMemo, useEffect } from "react";
import { cn } from "../../lib/utils";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

// Inject global keyframes once
const KEYFRAMES_ID = "aurora-keyframes";

function ensureKeyframes() {
  if (typeof document === "undefined") return;
  if (document.getElementById(KEYFRAMES_ID)) return;

  const style = document.createElement("style");
  style.id = KEYFRAMES_ID;
  style.textContent = `
    @keyframes aurora {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
  `;
  document.head.appendChild(style);
}

export const AuroraText = memo(function AuroraText({
  children,
  className,
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed = 3,
}: AuroraTextProps) {
  useEffect(() => {
    ensureKeyframes();
  }, []);

  const gradientStyle = useMemo(() => {
    const gradientColors = colors.join(", ");
    return {
      backgroundImage: `linear-gradient(135deg, ${gradientColors}, ${colors[0]})`,
      backgroundSize: "400% 400%",
      animation: `aurora ${speed}s ease infinite`,
    };
  }, [colors, speed]);

  return (
    <span
      className={cn("bg-clip-text text-transparent", className)}
      style={gradientStyle}
    >
      {children}
    </span>
  );
});
