---
sidebar_position: 1
---

# Introduction

UpliftUI is a modern React component library built on **Radix UI** primitives and styled with **Tailwind CSS**. It provides beautifully designed, accessible, and customizable components for building modern web applications.

## Features

- **63+ Components** - A comprehensive set of UI components for any application
- **Accessible** - Built on Radix UI primitives with full keyboard and screen reader support
- **Customizable** - Styled with Tailwind CSS for easy theming and customization
- **TypeScript** - Full TypeScript support with complete type definitions
- **Dark Mode** - Built-in dark mode support out of the box
- **Magic UI** - Beautiful animation components for stunning visual effects

## Component Categories

### UI Components (46)

Standard shadcn/ui components including Button, Card, Dialog, Form, Table, and many more.

### Uplift Enhanced (7)

Enhanced versions of common components with improved styling and features:
- UpliftButton, UpliftCard, UpliftDialog, UpliftInput, UpliftLabel, UpliftTabs

### Magic UI (10)

Beautiful animation and visual effect components:
- Animated Beam, Aurora Text, Blur Fade, Border Beam, Globe, Marquee, Meteors, Text Generate Effect, Word Rotate

## Installation Options

UpliftUI can be installed in two ways:

### 1. NPM Package

Install the entire library as a dependency:

```bash
bun add @upliftui/ui
```

### 2. shadcn Registry (Recommended)

Add individual components directly to your project:

```bash
bunx shadcn@latest add button --registry https://ui.uplifttech.dev/registry.json
```

## Quick Start

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
