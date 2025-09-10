module.exports=Tab=(styles)=>({
    ".tabs": {
    "@apply flex w-fit flex-row flex-wrap items-center whitespace-nowrap": {}
  },
  ".tab": {
    "@apply min-h-[2rem] px-3 text-sm leading-loose text-base-content": {}
  },
  ".tab-disabled": {
    "@apply pointer-events-none cursor-not-allowed text-base-content/40": {}
  },
  ".tab-bordered": {
    "@apply border-base-400 border-b-2 py-2": {}
  },
    ".tab": {
    "@apply flex cursor-pointer focus:outline-none px-3": {}
  },
  ".tab:not(.tab-active)": {
    "@apply hover:text-base-content/70": {}
  },
  ".tabs:has(.tab-underline) .tab": {
    "@apply pb-2": {}
  },
  ".tab-active": {
    "@apply border-b-primary text-primary": {}
  },
  ".tab-underline": {
    "@apply relative pb-2": {}
  },
  ".tab-underline::after": {
    "@apply absolute bottom-0 left-0 z-10 h-0.5 w-full bg-primary content-['']": {},
    "transition": "transform 0.3s ease"
  },
  ".tab-pill": {
    "@apply rounded-xl border-transparent p-2 leading-5": {}
  },
  ".tab-pill:not(.tab-active)": {
    "@apply active:bg-base-200/50 hover:bg-base-200/60": {}
  },
  ".tab-pill.tab-active": {
    "@apply border-base-200 bg-base-200 text-base-content": {}
  },
  ".tab-toggle": {
    "@apply absolute h-0 w-0 appearance-none opacity-0": {}
  },
  ".tab-toggle:checked + .tab": {
    "@apply border-b-primary text-primary": {}
  },
  ".tabs-underline .tab-toggle + .tab": {
    "@apply relative pb-2": {}
  },
  ".tabs-underline .tab-toggle:checked + .tab::before": {
    "@apply absolute bottom-0 left-0 z-10 h-0.5 w-full bg-primary content-['']": {},
    "transition": "transform 0.3s ease"
  },
  ".tab-toggle:checked + .tab.tab-pill": {
    "@apply bg-base-200 text-base-content": {}
  },
  ".tabs-boxed .tab-toggle:checked + .tab": {
    "@apply bg-base-200 text-base-content": {}
  }
})