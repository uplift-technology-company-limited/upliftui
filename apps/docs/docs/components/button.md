---
sidebar_position: 1
---

# Button

Displays a button or a component that looks like a button.

## Installation

```bash
bunx shadcn@latest add button -r uplift
```

Or with NPM package:

```tsx
import { Button } from "@upliftui/ui";
```

## Usage

```tsx
import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}
```

## Variants

### Default

```tsx
<Button variant="default">Default</Button>
```

### Secondary

```tsx
<Button variant="secondary">Secondary</Button>
```

### Destructive

```tsx
<Button variant="destructive">Destructive</Button>
```

### Outline

```tsx
<Button variant="outline">Outline</Button>
```

### Ghost

```tsx
<Button variant="ghost">Ghost</Button>
```

### Link

```tsx
<Button variant="link">Link</Button>
```

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <IconPlus />
</Button>
```

## With Icons

```tsx
import { MailIcon } from "lucide-react";

<Button>
  <MailIcon /> Login with Email
</Button>;
```

## Loading State

```tsx
<Button disabled>
  <Loader2 className="animate-spin" />
  Please wait
</Button>
```

## As Child

Use the `asChild` prop to render as a different element:

```tsx
import Link from "next/link";

<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>;
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | The visual style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | The size of the button |
| `asChild` | `boolean` | `false` | Render as the child element |
