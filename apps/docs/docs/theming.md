---
sidebar_position: 3
---

# Theming

UpliftUI uses CSS variables for theming, making it easy to customize colors, spacing, and other design tokens.

## Color System

The color system is based on HSL values for easy manipulation:

| Variable | Description |
|----------|-------------|
| `--background` | Page background |
| `--foreground` | Default text color |
| `--primary` | Primary brand color |
| `--secondary` | Secondary color |
| `--muted` | Muted backgrounds |
| `--accent` | Accent color for highlights |
| `--destructive` | Error and danger states |
| `--border` | Border colors |
| `--input` | Input field borders |
| `--ring` | Focus ring color |

## Dark Mode

UpliftUI supports dark mode out of the box. Use the `dark` class on your root element:

```tsx
<html className="dark">
  {/* Your app */}
</html>
```

### With next-themes

```tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Custom Themes

Create custom themes by overriding the CSS variables:

```css
/* Blue theme */
.theme-blue {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
}

/* Green theme */
.theme-green {
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 355.7 100% 97.3%;
}
```

## Radius

Control border radius globally with the `--radius` variable:

```css
:root {
  --radius: 0.5rem; /* Default */
}

/* Rounded theme */
.theme-rounded {
  --radius: 1rem;
}

/* Sharp theme */
.theme-sharp {
  --radius: 0;
}
```
