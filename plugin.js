import plugin from "tailwindcss/plugin";
import Button from "./components/inputs/button.js";
import ButtonGroup from "./components/inputs/button-grouped.js";
import Checkbox from "./components/inputs/checkbox.js";
import Form from "./components/inputs/form.js";
import InputFile from "./components/inputs/input-file.js";
import Input from "./components/inputs/input.js";
import InputRange from "./components/inputs/range.js";
import Radio from "./components/inputs/radio.js";
import Select from "./components/inputs/select.js";
import Switch from "./components/inputs/swtich.js";
import Textarea from "./components/inputs/textarea.js";
import Scrollbar from "./components/utilities/utilities.js";
import Accordion from "./components/informational/accordion.js";
import Alert from "./components/informational/alert.js";
import Badge from "./components/informational/badge.js";
import Avatar from "./components/informational/avatar.js";
import Card from "./components/informational/card.js";
import Spinner from "./components/informational/spinner.js";
import Tooltip from "./components/informational/tooltip.js";
import KBD from "./components/informational/kbd.js";
import Table from "./components/informational/table.js";
import Breadcrumb from "./components/navigations/breadcrumb.js";
import Dot from "./components/informational/dot.js";
import Divider from "./components/informational/divider.js";
import Link from "./components/navigations/link.js";
import Skeleton from "./components/informational/skeleton.js";
import MockupBrowser from "./components/informational/mockup-browser.js";
import MockupCode from "./components/informational/mockup-code.js";
import Step from "./components/informational/step.js";
import Tab from "./components/navigations/tab.js";
import Sidebar from "./components/navigations/sidebar.js";
import Dropdown from "./components/navigations/dropdown.js";
import Navbar from "./components/navigations/navbar.js";
import Footer from "./components/navigations/footer.js";
import Modal from "./components/informational/modal.js";
import Drawer from "./components/navigations/drawer.js";
import Progress from "./components/informational/progress.js";
import Pagination from "./components/informational/pagination.js";



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



// plugin factory
function themePlugin(options = {}) {
  const userThemes = options.themes || {};
const defaultTheme = options.defaultTheme || "light";
  return plugin(
    function ({ addBase }) {
      // set default theme
      addBase({
        ":root": defaultThemes[defaultTheme] || userThemes[defaultTheme] || {},
      });
addBase({
    "@font-face": {
      fontFamily: "Geist",
      fontStyle: "normal",
      fontWeight: "100 900",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/geist/v3/gyByhwUxId8gMEwcGFU.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  })

  // Inter (latin, normal)
  addBase({
    "@font-face": {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "100 900",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v20/UcCo3FwrK3iLTcviYwY.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  })

  // Noto Sans (latin, normal)
  addBase({
    "@font-face": {
      fontFamily: "Noto Sans",
      fontStyle: "normal",
      fontWeight: "100 900",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/notosans/v41/o-0bIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjc5a7duw.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  })

      // register all themes
      for (const [name, vars] of Object.entries({
        ...defaultThemes,
        ...userThemes,
      })) {
        addBase({
          [`[data-theme='${name}']`]: vars,
        });
      }

      // system color scheme
      addBase({
        "@media (prefers-color-scheme: light)": {
          ":root:not([data-theme])": defaultThemes.light,
        },
        "@media (prefers-color-scheme: dark)": {
          ":root:not([data-theme])": defaultThemes.dark,
        },
      });

      // keyframes
      addBase({
        "@keyframes tooltip-appear": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      });
      addBase({
        "@keyframes skeletonWave": {
          "0%": { "background-position": "200% 0" },
          to: { "background-position": "-200% 0" },
        },
      });
      addBase({
        "@keyframes skeletonPulse": {
          "0%": { opacity: "1" },
          "50%": { opacity: ".4" },
          to: { opacity: "1" },
        },
      });
      addBase({
        "@keyframes indeterminate-progress-bar": {
          from: { left: "-60%" },
          to: { left: "100%" },
        },
      });
               addBase({
        ":root":{
          "background-color":"var(--color-base-100)",
          "color":"var(--color-base-content)",
        },
      });
      addBase({
        "[data-theme]":{
          "background-color":"var(--color-base-100)",
          "color":"var(--color-base-content)",
        },
      });

      // components
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
    },
    {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Geist", sans-serif',"system-ui","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",],
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
            "base-400": "var(--color-base-400)",
          },
        },
      },
    }
  );
}

// export default plugin with your defaults
export default themePlugin();
