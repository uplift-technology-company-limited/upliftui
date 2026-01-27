import { readdir, readFile, writeFile, mkdir, rm } from "fs/promises";
import { join, basename, dirname } from "path";
import { existsSync } from "fs";

const ROOT_DIR = dirname(dirname(import.meta.path));
const PACKAGES_UI_SRC = join(ROOT_DIR, "packages/ui/src");
const REGISTRY_DIR = join(ROOT_DIR, "registry");

interface RegistryItem {
  name: string;
  type: "registry:ui";
  title: string;
  description: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: Array<{
    path: string;
    content: string;
    type: "registry:ui";
    target?: string;
  }>;
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

// Map of component names to their dependencies
const COMPONENT_DEPS: Record<string, { deps?: string[]; registryDeps?: string[] }> = {
  // UI components
  accordion: { deps: ["@radix-ui/react-accordion"], registryDeps: [] },
  "alert-dialog": { deps: ["@radix-ui/react-alert-dialog"], registryDeps: ["button"] },
  alert: { deps: [], registryDeps: [] },
  "aspect-ratio": { deps: ["@radix-ui/react-aspect-ratio"], registryDeps: [] },
  avatar: { deps: ["@radix-ui/react-avatar"], registryDeps: [] },
  badge: { deps: [], registryDeps: [] },
  breadcrumb: { deps: [], registryDeps: [] },
  button: { deps: ["@radix-ui/react-slot", "class-variance-authority"], registryDeps: [] },
  calendar: { deps: ["react-day-picker"], registryDeps: ["button"] },
  card: { deps: [], registryDeps: [] },
  carousel: { deps: ["embla-carousel-react"], registryDeps: ["button"] },
  chart: { deps: ["recharts"], registryDeps: [] },
  checkbox: { deps: ["@radix-ui/react-checkbox"], registryDeps: [] },
  collapsible: { deps: ["@radix-ui/react-collapsible"], registryDeps: [] },
  command: { deps: ["cmdk"], registryDeps: ["dialog"] },
  "context-menu": { deps: ["@radix-ui/react-context-menu"], registryDeps: [] },
  dialog: { deps: ["@radix-ui/react-dialog"], registryDeps: [] },
  drawer: { deps: ["vaul"], registryDeps: [] },
  "dropdown-menu": { deps: ["@radix-ui/react-dropdown-menu"], registryDeps: [] },
  form: { deps: ["react-hook-form", "@hookform/resolvers", "zod"], registryDeps: ["label"] },
  "hover-card": { deps: ["@radix-ui/react-hover-card"], registryDeps: [] },
  input: { deps: [], registryDeps: [] },
  "input-otp": { deps: ["input-otp"], registryDeps: [] },
  label: { deps: ["@radix-ui/react-label"], registryDeps: [] },
  menubar: { deps: ["@radix-ui/react-menubar"], registryDeps: [] },
  "navigation-menu": { deps: ["@radix-ui/react-navigation-menu"], registryDeps: [] },
  pagination: { deps: [], registryDeps: ["button"] },
  popover: { deps: ["@radix-ui/react-popover"], registryDeps: [] },
  progress: { deps: ["@radix-ui/react-progress"], registryDeps: [] },
  "radio-group": { deps: ["@radix-ui/react-radio-group"], registryDeps: [] },
  resizable: { deps: ["react-resizable-panels"], registryDeps: [] },
  "scroll-area": { deps: ["@radix-ui/react-scroll-area"], registryDeps: [] },
  section: { deps: [], registryDeps: [] },
  select: { deps: ["@radix-ui/react-select"], registryDeps: [] },
  separator: { deps: ["@radix-ui/react-separator"], registryDeps: [] },
  sheet: { deps: ["@radix-ui/react-dialog"], registryDeps: [] },
  sidebar: { deps: ["@radix-ui/react-slot"], registryDeps: ["button", "input", "separator", "sheet", "skeleton", "tooltip"] },
  skeleton: { deps: [], registryDeps: [] },
  slider: { deps: ["@radix-ui/react-slider"], registryDeps: [] },
  sonner: { deps: ["sonner", "next-themes"], registryDeps: [] },
  switch: { deps: ["@radix-ui/react-switch"], registryDeps: [] },
  table: { deps: [], registryDeps: [] },
  tabs: { deps: ["@radix-ui/react-tabs"], registryDeps: [] },
  textarea: { deps: [], registryDeps: [] },
  toggle: { deps: ["@radix-ui/react-toggle", "class-variance-authority"], registryDeps: [] },
  "toggle-group": { deps: ["@radix-ui/react-toggle-group"], registryDeps: ["toggle"] },
  tooltip: { deps: ["@radix-ui/react-tooltip"], registryDeps: [] },

  // Uplift enhanced components
  "uplift-button": { deps: ["@radix-ui/react-slot", "class-variance-authority"], registryDeps: [] },
  "uplift-card": { deps: [], registryDeps: [] },
  "uplift-dialog": { deps: ["@radix-ui/react-dialog"], registryDeps: [] },
  "uplift-input": { deps: [], registryDeps: [] },
  "uplift-label": { deps: ["@radix-ui/react-label"], registryDeps: [] },
  "uplift-logo": { deps: [], registryDeps: [] },
  "uplift-tabs": { deps: ["@radix-ui/react-tabs"], registryDeps: [] },

  // Magic UI components
  "animated-beam": { deps: ["motion"], registryDeps: [] },
  "aurora-text": { deps: [], registryDeps: [] },
  "blur-fade": { deps: ["motion"], registryDeps: [] },
  "border-beam": { deps: [], registryDeps: [] },
  globe: { deps: ["cobe"], registryDeps: [] },
  "infinite-moving-cards": { deps: [], registryDeps: [] },
  marquee: { deps: [], registryDeps: [] },
  meteors: { deps: [], registryDeps: [] },
  "text-generate-effect": { deps: ["motion"], registryDeps: [] },
  "word-rotate": { deps: ["motion"], registryDeps: [] },
};

function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function getComponentFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  return files.filter((f) => f.endsWith(".tsx") && f !== "index.ts" && f !== "index.tsx");
}

async function buildComponentRegistry(
  category: "ui" | "uplift" | "magic",
  sourceDir: string
): Promise<RegistryItem[]> {
  const items: RegistryItem[] = [];
  const files = await getComponentFiles(sourceDir);

  for (const file of files) {
    const componentName = basename(file, ".tsx");
    const registryName = category === "uplift" ? `uplift-${componentName}` : componentName;
    const content = await readFile(join(sourceDir, file), "utf-8");

    // Transform imports for registry format
    const transformedContent = content
      .replace(/from "\.\.\/\.\.\/lib\/utils"/g, 'from "@/lib/utils"')
      .replace(/from "\.\/button"/g, 'from "@/components/ui/button"')
      .replace(/from "\.\/dialog"/g, 'from "@/components/ui/dialog"')
      .replace(/from "\.\/label"/g, 'from "@/components/ui/label"')
      .replace(/from "\.\.\/uplift\/button"/g, 'from "@/components/ui/button"')
      .replace(/from "\.\.\/uplift\/input"/g, 'from "@/components/ui/input"');

    const deps = COMPONENT_DEPS[registryName] || { deps: [], registryDeps: [] };

    const item: RegistryItem = {
      name: registryName,
      type: "registry:ui",
      title: toTitleCase(componentName),
      description: `${toTitleCase(componentName)} component${category === "uplift" ? " (Uplift enhanced)" : category === "magic" ? " (Magic UI)" : ""}`,
      files: [
        {
          path: `components/${category}/${file}`,
          content: transformedContent,
          type: "registry:ui",
          target: `components/ui/${file}`,
        },
      ],
    };

    if (deps.deps && deps.deps.length > 0) {
      item.dependencies = deps.deps;
    }
    if (deps.registryDeps && deps.registryDeps.length > 0) {
      item.registryDependencies = deps.registryDeps;
    }

    items.push(item);

    // Write individual component JSON
    const componentJsonPath = join(REGISTRY_DIR, "components", category, `${componentName}.json`);
    await writeFile(componentJsonPath, JSON.stringify(item, null, 2));
    console.log(`  Generated: ${category}/${componentName}.json`);
  }

  return items;
}

async function main() {
  console.log("Building UpliftUI registry...\n");

  // Clean and recreate registry directories
  for (const category of ["ui", "uplift", "magic"]) {
    const dir = join(REGISTRY_DIR, "components", category);
    if (existsSync(dir)) {
      await rm(dir, { recursive: true });
    }
    await mkdir(dir, { recursive: true });
  }

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "uplift-ui",
    homepage: "https://upliftui.dev",
    items: [],
  };

  // Build UI components
  console.log("Building UI components...");
  const uiItems = await buildComponentRegistry(
    "ui",
    join(PACKAGES_UI_SRC, "components/ui")
  );
  registry.items.push(...uiItems);

  // Build Uplift components
  console.log("\nBuilding Uplift components...");
  const upliftItems = await buildComponentRegistry(
    "uplift",
    join(PACKAGES_UI_SRC, "components/uplift")
  );
  registry.items.push(...upliftItems);

  // Build Magic UI components
  console.log("\nBuilding Magic UI components...");
  const magicItems = await buildComponentRegistry(
    "magic",
    join(PACKAGES_UI_SRC, "components/magic")
  );
  registry.items.push(...magicItems);

  // Write main registry.json
  await writeFile(
    join(REGISTRY_DIR, "registry.json"),
    JSON.stringify(registry, null, 2)
  );

  console.log(`\nRegistry built successfully!`);
  console.log(`Total components: ${registry.items.length}`);
  console.log(`  - UI: ${uiItems.length}`);
  console.log(`  - Uplift: ${upliftItems.length}`);
  console.log(`  - Magic UI: ${magicItems.length}`);
}

main().catch(console.error);
