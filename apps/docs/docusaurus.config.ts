import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "UpliftUI",
  tagline: "Modern React component library built on Radix UI and Tailwind CSS",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://ui-docs.uplifttech.dev",
  baseUrl: "/",

  organizationName: "uplift-technology-company-limited",
  projectName: "upliftui",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/uplift-technology-company-limited/upliftui/tree/main/apps/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/upliftui-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "UpliftUI",
      logo: {
        alt: "UpliftUI Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "componentsSidebar",
          position: "left",
          label: "Components",
        },
        {
          href: "https://github.com/uplift-technology-company-limited/upliftui",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/installation",
            },
          ],
        },
        {
          title: "Components",
          items: [
            {
              label: "UI Components",
              to: "/docs/components/button",
            },
            {
              label: "Magic UI",
              to: "/docs/components/animated-beam",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/uplift-technology-company-limited/upliftui",
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/package/@upliftui/ui",
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} UpliftUI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "typescript", "tsx"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
