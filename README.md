# UpliftUI

Modern React component library built on Radix UI and Tailwind CSS.

## Features

- 63+ beautifully designed components
- Built on Radix UI primitives for accessibility
- Styled with Tailwind CSS for easy customization
- Full TypeScript support
- Dark mode out of the box
- Magic UI animation components

## Installation

### NPM Package

```bash
bun add @upliftui/ui
```

### shadcn Registry

```bash
bunx shadcn@latest add button --registry https://upliftui.dev/registry.json
```

## Usage

```tsx
import { Button, Card, CardContent } from "@upliftui/ui";
import "@upliftui/ui/globals.css";

export default function App() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### UI Components (46)
Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Command, ContextMenu, Dialog, Drawer, DropdownMenu, Form, HoverCard, Input, InputOTP, Label, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Switch, Table, Tabs, Textarea, Toggle, ToggleGroup, Tooltip

### Uplift Enhanced (7)
UpliftButton, UpliftCard, UpliftDialog, UpliftInput, UpliftLabel, UpliftLogo, UpliftTabs

### Magic UI (10)
AnimatedBeam, AuroraText, BlurFade, BorderBeam, Globe, InfiniteMovingCards, Marquee, Meteors, TextGenerateEffect, WordRotate

## Documentation

Visit [https://upliftui.dev](https://upliftui.dev) for full documentation.

## Development

```bash
# Install dependencies
bun install

# Build UI package
bun run build

# Build registry
bun run build:registry

# Start docs dev server
bun run docs
```

## License

MIT
