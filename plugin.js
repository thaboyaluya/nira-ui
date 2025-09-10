const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const Button = require("./components/inputs/button.js");
const ButtonGroup = require("./components/inputs/button-grouped.js");
const Checkbox = require("./components/inputs/checkbox.js");
const Form = require("./components/inputs/form.js");
const InputFile = require("./components/inputs/input-file.js");
const Input = require("./components/inputs/input.js");
const InputRange = require("./components/inputs/range.js");
const Radio = require("./components/inputs/radio.js");
const Select = require("./components/inputs/select.js");
const Switch = require("./components/inputs/swtich.js");
const Textarea = require("./components/inputs/textarea.js");
const Scrollbar = require("./components/utilities/utilities.js");
const Accordion = require("./components/informational/accordion.js");
const Alert = require("./components/informational/alert.js");
const Badge = require("./components/informational/badge.js");
const Avatar = require("./components/informational/avatar.js");
const Card = require("./components/informational/card.js");
const Spinner = require("./components/informational/spinner.js");
const Tooltip = require("./components/informational/tooltip.js");
const KBD = require("./components/informational/kbd.js");
const Table = require("./components/informational/table.js");
const Breadcrumb = require("./components/navigations/breadcrumb.js");
const Dot = require("./components/informational/dot.js");
const Divider = require("./components/informational/divider.js");
const Link = require("./components/navigations/link.js");
const Skeleton = require("./components/informational/skeleton.js");
const MockupBrowser = require("./components/informational/mockup-browser.js");
const MockupCode = require("./components/informational/mockup-code.js");
const Step = require("./components/informational/step.js");
const Tab = require("./components/navigations/tab.js");
const Sidebar = require("./components/navigations/sidebar.js");
const Dropdown = require("./components/navigations/dropdown.js");
const Navbar = require("./components/navigations/navbar.js");
const Footer = require("./components/navigations/footer.js");
const Modal = require("./components/informational/modal.js");
const Drawer = require("./components/navigations/drawer.js");
const Progress = require("./components/informational/progress.js");
const Pagination = require("./components/informational/pagination.js");


const defaultThemes = {
  light: {//
    "--color-primary": "#2fc6f8",
    "--color-secondary": "#a835fa",
    "--color-success": "#02ce57",
    "--color-danger": "#f51d2f",
    "--color-warning": "#fabf2b",
    "--color-base-content":"oklch(21% 0.006 285.885)",
    "--color-base-content-100":"oklch(30% 0.006 285.885)",
    "--color-base-content-200":"oklch(39% 0.006 285.885)",
    "--color-base-content-300":"oklch(48% 0.006 285.885)",
    "--color-base-100":"oklch(100% 0.00011 271.152)",
    "--color-base-200":"oklch(95% 0.00011 271.152)",
    "--color-base-300":"oklch(83% 0.00011 271.152)",
    "--color-base-400":"oklch(80% 0.00011 271.152)"
  },
  dark: {//
    "--color-primary": "#00bcff",
    "--color-secondary": "#9810fa",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",

    "--color-base-content":"oklch(100% 0.00011 271.152)",
    "--color-base-content-100":"oklch(91% 0.00011 271.152)",
    "--color-base-content-200":"oklch(82% 0.00011 271.152)",
    "--color-base-content-300":"oklch(73% 0.00011 271.152)",
    "--color-base-100":"oklch(15% 0 0)",
    "--color-base-200":"oklch(23% 0 0)",
    "--color-base-300":"oklch(29% 0 0)",
    "--color-base-400":"oklch(35% 0 0)"
  },

  midnight: {//
    "--color-primary": "#1e3a8a",
    "--color-secondary": "#3b82f6",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
//-9
    "--color-base-content": "oklch(90% 0.05 270)",
    "--color-base-content-100": "oklch(81% 0.05 270)",
    "--color-base-content-200": "oklch(72% 0.05 270)",
    "--color-base-content-300": "oklch(63% 0.05 270)",
//+6
    "--color-base-100": "oklch(17% 0.05 270)",
    "--color-base-200": "oklch(23% 0.05 270)",
    "--color-base-300": "oklch(29% 0.05 270)",
    "--color-base-400": "oklch(35% 0.05 270)"
  },

neon: {//
  "--color-primary": "#00ff88",
  "--color-secondary": "#ff00ff",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
  //-9
  "--color-base-content": "oklch(92% 0.02 250)",
  "--color-base-content-100": "oklch(83% 0.02 250)",
  "--color-base-content-200": "oklch(74% 0.02 250)",
  "--color-base-content-300": "oklch(65% 0.02 250)",
  //+6
  "--color-base-100": "oklch(15% 0.22777 152.572)",
  "--color-base-200": "oklch(21% 0.22777 152.572)",
  "--color-base-300": "oklch(27% 0.22777 152.572)",
  "--color-base-400": "oklch(33% 0.22777 152.572)"
},


steel: {//
  "--color-primary": "#64748b",
  "--color-secondary": "#475569",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
  //-9
  "--color-base-content": "oklch(92% 0.04078 257.446)",
  "--color-base-content-100": "oklch(83% 0.04078 257.446)",
  "--color-base-content-200": "oklch(74% 0.04078 257.446)",
  "--color-base-content-300": "oklch(65% 0.04078 257.446)",
  //+6
  "--color-base-100": "oklch(14% 0.04078 257.446)",
  "--color-base-200": "oklch(20% 0.04078 257.446)",
  "--color-base-300": "oklch(26% 0.04078 257.446)",
  "--color-base-400": "oklch(32% 0.04078 257.446)"
},



storm: {//
  "--color-primary": "#1e40af",
  "--color-secondary": "#4338ca",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
  //-9
  "--color-base-content": "oklch(90% 0.18094 265.652)",
  "--color-base-content-100": "oklch(81% 0.18094 265.652)",
  "--color-base-content-200": "oklch(72% 0.18094 265.652)",
  "--color-base-content-300": "oklch(63% 0.18094 265.652)",
  //+6
  "--color-base-100": "oklch(14% 0.18094 265.652)",
  "--color-base-200": "oklch(20% 0.18094 265.652)",
  "--color-base-300": "oklch(26% 0.18094 265.652)",
  "--color-base-400": "oklch(32% 0.18094 265.652)"
},


  forest: {//
    "--color-primary": "#166534",
    "--color-secondary": "#22c55e",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
//-9
    "--color-base-content": "oklch(90% 0.10831 151.351)",
    "--color-base-content-100": "oklch(81% 0.10831 151.351)",
    "--color-base-content-200": "oklch(72% 0.10831 151.351)",
    "--color-base-content-300": "oklch(63% 0.10831 151.351)",
//+6
    "--color-base-100": "oklch(20% 0.10831 151.351)",
    "--color-base-200": "oklch(26% 0.10831 151.351)",
    "--color-base-300": "oklch(32% 0.10831 151.351)",
    "--color-base-400": "oklch(38% 0.10831 151.351)"
  },


sunset: {//
    "--color-primary": "#f97316",
    "--color-secondary": "#ea580c",
     "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
//-9
    "--color-base-content": "oklch(20% 0.18669 47.592)",
    "--color-base-content-100": "oklch(34% 0.18669 47.592)",
    "--color-base-content-200": "oklch(52% 0.18669 47.592)",
    "--color-base-content-300": "oklch(70% 0.18669 47.592)",
//-6
    "--color-base-100": "oklch(99% 0.18669 47.592)",
    "--color-base-200": "oklch(93% 0.18669 47.592)",
    "--color-base-300": "oklch(87% 0.18669 47.592)",
    "--color-base-400": "oklch(81% 0.18669 47.592)"
  },

  rose: {
    "--color-primary": "#e11d48",
    "--color-secondary": "#f43f5e",
     "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
//-9
    "--color-base-content": "oklch(20% 0.22205 17.569)",
    "--color-base-content-100": "oklch(29% 0.22205 17.569)",
    "--color-base-content-200": "oklch(38% 0.22205 17.569)",
    "--color-base-content-300": "oklch(47% 0.22205 17.569)",
//-6
    "--color-base-100": "oklch(99% 0.22205 17.569)",
    "--color-base-200": "oklch(93% 0.22205 17.569)",
    "--color-base-300": "oklch(87% 0.22205 17.569)",
    "--color-base-400": "oklch(81% 0.22205 17.569)"
  },

gold: {
    "--color-primary": "#f59e0b",
    "--color-secondary": "#d97706",
     "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
//-9
    "--color-base-content": "oklch(20% 0.1646 70.075)",
    "--color-base-content-100": "oklch(29% 0.1646 70.075)",
    "--color-base-content-200": "oklch(38% 0.1646 70.075)",
    "--color-base-content-300": "oklch(47% 0.1646 70.075)",
//-6
    "--color-base-100": "oklch(99% 0.1646 70.075)",
    "--color-base-200": "oklch(93% 0.1646 70.075)",
    "--color-base-300": "oklch(87% 0.1646 70.075)",
    "--color-base-400": "oklch(81% 0.1646 70.075)"
  },

  corporate: {
    "--color-primary": "#2563eb",
    "--color-secondary": "#0ea5e9",
      "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
    //+9
    "--color-base-content": "oklch(18% 0.02 240)",
    "--color-base-content-100": "oklch(27% 0.02 240)",
    "--color-base-content-200": "oklch(36% 0.02 240)",
    "--color-base-content-300": "oklch(45% 0.02 240)",
    //-6
    "--color-base-100": "oklch(100% 0.01 240)",
    "--color-base-200": "oklch(94% 0.01 240)",
    "--color-base-300": "oklch(88% 0.01 240)",
    "--color-base-400": "oklch(82% 0.01 240)"
  },

    retro: {
    "--color-primary": "#ef4444",
    "--color-secondary": "#f97316",
     "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
    //+9
    "--color-base-content": "oklch(25% 0.1 40)",
    "--color-base-content-100": "oklch(34% 0.1 40)",
    "--color-base-content-200": "oklch(43% 0.1 40)",
    "--color-base-content-300": "oklch(52% 0.1 40)",
    //-6
    "--color-base-100": "oklch(95% 0.05 100)",
    "--color-base-200": "oklch(89% 0.05 100)",
    "--color-base-300": "oklch(83% 0.05 100)",
    "--color-base-400": "oklch(77% 0.05 100)"
  },

    lofi: {
    "--color-primary": "#3f3f46",
    "--color-secondary": "#71717a",
      "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
    //-9
    "--color-base-content": "oklch(90% 0.01 240)",
    "--color-base-content-100": "oklch(81% 0.01 240)",
    "--color-base-content-200": "oklch(72% 0.01 240)",
    "--color-base-content-300": "oklch(63% 0.01 240)",
    //+6
    "--color-base-100": "oklch(15% 0.01 240)",
    "--color-base-200": "oklch(21% 0.01 240)",
    "--color-base-300": "oklch(27% 0.01 240)",
    "--color-base-400": "oklch(33% 0.01 240)"
  },
 pastel: {
    "--color-primary": "#a5b4fc",
    "--color-secondary": "#f9a8d4",
    "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
    //+9
    "--color-base-content": "oklch(20% 0.02 80)",
    "--color-base-content-100": "oklch(29% 0.02 80)",
    "--color-base-content-200": "oklch(38% 0.02 80)",
    "--color-base-content-300": "oklch(47% 0.02 80)",
    //-6
    "--color-base-100": "oklch(98% 0.01 80)",
    "--color-base-200": "oklch(92% 0.01 80)",
    "--color-base-300": "oklch(86% 0.01 80)",
    "--color-base-400": "oklch(80% 0.01 80)"
  },
   dracula: {
    "--color-primary": "#bd93f9",
    "--color-secondary": "#ff79c6",
   "--color-success": "#00a63e",
    "--color-danger": "#e7000b",
    "--color-warning": "#f0b100",
    //-9
    "--color-base-content": "oklch(95% 0.02 280)",
    "--color-base-content-100": "oklch(86% 0.02 280)",
    "--color-base-content-200": "oklch(77% 0.02 280)",
    "--color-base-content-300": "oklch(68% 0.02 280)",
//+6
    "--color-base-100": "oklch(10% 0.02 280)",
    "--color-base-200": "oklch(16% 0.02 280)",
    "--color-base-300": "oklch(22% 0.02 280)",
    "--color-base-400": "oklch(28% 0.02 280)"
  }
  
};




module.exports = plugin.withOptions(
function (options = {}) {
return function ({ addBase}) {
const userThemes = options.themes || {};
const defaultTheme = options.defaultTheme || "light";
addBase({
":root": defaultThemes[defaultTheme] || userThemes[defaultTheme] || {},
})

for (const [name, vars] of Object.entries({
...defaultThemes,
...userThemes,
})) {
addBase({
  [`[data-theme='${name}']`]: vars,
})
}  
addBase({
"@media (prefers-color-scheme: light)": {
  ":root:not([data-theme])": defaultThemes.light,
},
"@media (prefers-color-scheme: dark)": {
  ":root:not([data-theme])": defaultThemes.dark,
},
})
addBase({
"@keyframes tooltip-appear": {
from: { opacity: "0" },
to: { opacity: "1" },
},
})
addBase({
"@keyframes skeletonWave": {
"0%": { "background-position": "200% 0" },
to: {  "background-position": "-200% 0" },
},
})
addBase({
"@keyframes skeletonPulse": {
"0% ": { opacity: "1" },
"50%": { opacity: ".4" },
to: { opacity: "1" },
},
})
addBase({
"@keyframes indeterminate-progress-bar": {
  from: { left: "-60%" },
  to: { left: "100%" },
},
});



addBase(Scrollbar());
addBase(Accordion());
addBase(Pagination());
addBase(Alert());
addBase(Badge());
addBase(Avatar());
addBase(Card());
addBase(Modal());
addBase(Progress());
addBase(Spinner());
addBase(Tooltip());
addBase(Button());
addBase(KBD());
addBase(Drawer());
addBase(Table());
addBase(Footer());
addBase(Tab());
addBase(Dot());
addBase(Skeleton());
addBase(Dropdown());
addBase(Step());
addBase(ButtonGroup());
addBase(Link());
addBase(Sidebar());
addBase(Navbar());
addBase(MockupBrowser());
addBase(MockupCode());
addBase(Divider());
addBase(Checkbox());
addBase(Breadcrumb());
addBase(Form());
addBase(InputFile());
addBase(Input());
addBase(Radio());
addBase(Select());
addBase(Switch());
addBase(Textarea());
addBase(InputRange());


  
  };
},
  function () {
    return {
      themes: Object.keys(defaultThemes),
      customThemes: {},
      system: true,
      theme: {
        extend: {
            fontFamily: {
          sans: ['"Geist", sans-serif', ...defaultTheme.fontFamily.sans],
        },
          colors: {
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            warning: "var(--color-warning)",
            success: "var(--color-success)",
            danger: "var(--color-danger)",
            "base-content": "var(--color-base-content)",
            "base-content-100": "var(--color-base-content-100)",
            "base-content-200": "var(--color-base-content-200)",
            "base-content-300": "var(--color-base-content-300)",
            "base-100": "var(--color-base-100)",
            "base-200": "var(--color-base-200)",
            "base-300": "var(--color-base-300)",
            "base-400": "var(--color-base-400)"
          },
        },
      },
    };
  }
);