import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    "installation",
    "theming",
  ],
  componentsSidebar: [
    {
      type: "category",
      label: "UI Components",
      collapsed: false,
      items: [
        "components/button",
        "components/card",
        "components/dialog",
        "components/input",
        "components/label",
        "components/tabs",
        "components/accordion",
        "components/alert",
        "components/avatar",
        "components/badge",
        "components/checkbox",
        "components/dropdown-menu",
        "components/form",
        "components/popover",
        "components/select",
        "components/table",
        "components/tooltip",
      ],
    },
    {
      type: "category",
      label: "Magic UI",
      collapsed: false,
      items: [
        "components/animated-beam",
        "components/aurora-text",
        "components/blur-fade",
        "components/border-beam",
        "components/globe",
        "components/marquee",
        "components/meteors",
        "components/text-generate-effect",
        "components/word-rotate",
      ],
    },
  ],
};

export default sidebars;
