---
sidebar_position: 1
---

# Animated Beam

A beautiful animated beam effect that connects elements with glowing lines.

## Installation

```bash
bunx shadcn@latest add animated-beam -r uplift
```

## Usage

```tsx
import { AnimatedBeam } from "@/components/ui/animated-beam";

export default function Example() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      <div ref={fromRef}>From</div>
      <div ref={toRef}>To</div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `containerRef` | `RefObject<HTMLElement>` | Reference to the container element |
| `fromRef` | `RefObject<HTMLElement>` | Starting point element |
| `toRef` | `RefObject<HTMLElement>` | Ending point element |
| `curvature` | `number` | Beam curve amount |
| `duration` | `number` | Animation duration in seconds |
| `delay` | `number` | Animation delay |
| `pathColor` | `string` | Color of the beam path |
| `gradientStartColor` | `string` | Gradient start color |
| `gradientStopColor` | `string` | Gradient end color |
