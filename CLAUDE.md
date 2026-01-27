# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
bun install

# Build the UI library
bun run build

# Watch mode for development
bun run dev

# Type checking
bun run typecheck

# Build component registry (generates registry/ files)
bun run build:registry

# Documentation site
bun run docs        # Start dev server
bun run docs:build  # Production build
```

## Architecture

UpliftUI is a monorepo containing a React component library with three component categories:

### Package Structure

- `packages/ui` - Main library (`@upliftui/ui`) built with tsup
- `apps/docs` - Docusaurus documentation site
- `registry/` - Generated shadcn-compatible registry files
- `scripts/build-registry.ts` - Generates component JSON files for registry distribution

### Component Categories

Components live in `packages/ui/src/components/`:

1. **ui/** - Standard shadcn/ui components (unmodified), exported directly
2. **uplift/** - Enhanced shadcn variants, exported with `Uplift` prefix (e.g., `UpliftButton`, `UpliftCard`) to avoid naming conflicts
3. **magic/** - Animation/effect components (Globe, Marquee, BorderBeam, etc.)

### Exports

The library provides multiple entry points:
```typescript
import { Button, cn } from "@upliftui/ui"           // Everything
import { Button } from "@upliftui/ui/ui"            // Standard components
import { UpliftButton } from "@upliftui/ui/uplift"  // Enhanced components
import { Globe, Marquee } from "@upliftui/ui/magic" // Animation components
```

### Component Patterns

- All components use `cn()` from `lib/utils` for Tailwind class merging (clsx + tailwind-merge)
- Variants use `class-variance-authority` (cva) - see `button.tsx` for reference
- Radix UI primitives for accessibility (Dialog, Popover, etc.)
- Components support React 18 and 19

### Registry System

Running `bun run build:registry` reads component source files and generates:
- `registry/registry.json` - Main registry with all components
- `registry/components/{ui,uplift,magic}/*.json` - Individual component files

The script transforms import paths for registry compatibility (e.g., `../../lib/utils` → `@/lib/utils`).
