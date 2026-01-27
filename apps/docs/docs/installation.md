---
sidebar_position: 2
---

# Installation

There are two ways to use UpliftUI in your project.

## Option 1: NPM Package

Install the entire library as a single package.

### Prerequisites

- React 18 or 19
- Tailwind CSS 4

### Installation

```bash
bun add @upliftui/ui
```

### Setup Tailwind CSS

Add the UpliftUI globals.css to your application:

```tsx title="app/layout.tsx"
import "@upliftui/ui/globals.css";
```

### Usage

```tsx
import { Button, Card, Dialog } from "@upliftui/ui";

// Or import from specific categories
import { Button } from "@upliftui/ui/ui";
import { UpliftButton } from "@upliftui/ui/uplift";
import { AnimatedBeam } from "@upliftui/ui/magic";
```

---

## Option 2: shadcn Registry (Recommended)

Add individual components directly to your project. This gives you full control over the component source code.

### Prerequisites

- shadcn CLI installed
- Tailwind CSS 4 configured
- TypeScript project

### Configure Registry

Add the UpliftUI registry to your `components.json`:

```json title="components.json"
{
  "registries": {
    "uplift": {
      "url": "https://upliftui.dev/registry.json"
    }
  }
}
```

### Add Components

```bash
# Add a single component
bunx shadcn@latest add button -r uplift

# Add multiple components
bunx shadcn@latest add button card dialog -r uplift

# Or use the full URL
bunx shadcn@latest add button --registry https://upliftui.dev/registry.json
```

### Magic UI Components

```bash
bunx shadcn@latest add animated-beam -r uplift
bunx shadcn@latest add aurora-text -r uplift
bunx shadcn@latest add globe -r uplift
```

---

## TypeScript Configuration

Ensure your `tsconfig.json` has the following paths configured:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## CSS Variables

UpliftUI uses CSS variables for theming. Add these to your globals.css:

```css title="globals.css"
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}
```
