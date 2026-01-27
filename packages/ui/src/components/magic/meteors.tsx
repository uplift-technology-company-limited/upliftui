"use client";

import { useEffect, useState } from "react";

import { cn } from "../../lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [meteors, setMeteors] = useState<
    Array<{ id: number; style: React.CSSProperties }>
  >([]);

  useEffect(() => {
    const styles = [...new Array(number)].map((_, idx) => ({
      id: idx,
      style: {
        top: `${Math.random() * 50 - 20}%`, // -20% to 30% (spread across top area)
        left: `${Math.random() * 80 + 50}%`, // 50% to 130% (start from right side, some off-screen)
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 6 + 4}s`, // 4-10s
      } as React.CSSProperties,
    }));
    setMeteors(styles);
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          style={meteor.style}
          className={cn(
            "absolute h-1 w-1 animate-meteor rounded-full",
            "bg-slate-700 dark:bg-white",
            "shadow-[0_0_6px_2px_rgba(100,116,139,0.6)] dark:shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]",
            className,
          )}
        >
          {/* Meteor Tail - pointing opposite of movement direction */}
          <div className="pointer-events-none absolute top-1/2 left-full h-[2px] w-[80px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent dark:from-white/80 dark:to-transparent" />
        </span>
      ))}
    </div>
  );
};
