export default Button=>({
    ".button" : {
    "@apply px-4 py-2 leading-[1.5em] inline-flex justify-center text-center items-center gap-2 text-base rounded-lg shadow-xs select-none border  bg-base-200/10  text-base-content border-base-300/47  hover:bg-base-200/40 duration-150 will-change-transform ease-in   focus:outline-hidden focus:bg-base-200/40  active:bg-base-200/40   cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none active:scale-[0.98] ":{}
  },
    ".button-outline":{
     "@apply px-4 py-2 bg-transparent text-center border border-base-300/47 hover:border-base-300 hover:bg-base-200/50  text-base-content active:border-base-300 active:bg-base-200/50 duration-150 will-change-transform ease-in   inline-flex items-center gap-2 text-base rounded-lg  focus:outline-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none active:scale-[0.98] ":{}
  },
    ".button-soft":{
    "@apply px-4 py-2 bg-base-200/30 text-center text-base-content hover:bg-base-300/40 focus:bg-base-300/40 active:bg-base-300/40 inline-flex items-center gap-2 text-base rounded-lg border border-transparent     focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none cursor-pointer duration-150 will-change-transform ease-in active:scale-[0.98] ":{}
  },
    ".button-ghost":{
    "@apply px-4 py-2 inline-flex text-center items-center gap-2 text-base rounded-lg border border-transparent   cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none  focus:outline-hidden active:bg-base-200 text-base-content hover:bg-base-200 hover:text-base-content-200  focus:bg-base-200 focus:text-base-content-200 duration-150 will-change-transform ease-in active:scale-[0.98] ":{} 
  },
    ".button-link":{
    "@apply py-3 px-5 inline-flex items-center gap-2 text-base rounded-lg border border-transparent text-base-content focus:outline-hidden focus:text-base-content hover:underline  disabled:opacity-50 disabled:pointer-events-none disabled:select-none active:underline duration-150 will-change-transform ease-in":{} 
  },
    ".button-primary":{
    "@apply  bg-primary   text-white hover:bg-primary hover:border-primary  focus:bg-primary focus:outline-hidden border border-transparent  disabled:opacity-50 disabled:pointer-events-none disabled:select-none duration-150 will-change-transform ease-in":{}
  },
    ".button-secondary":{
    "@apply  bg-secondary   text-white hover:bg-secondary  focus:bg-secondary focus:outline-hidden border border-transparent  disabled:opacity-50 disabled:pointer-events-none disabled:select-none duration-150 will-change-transform ease-in":{}
  },
    ".button-success":{
    "@apply bg-success   border border-transparent text-white hover:bg-success focus:outline-hidden focus:bg-success  cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none duration-150 will-change-transform ease-in":{}
  },

".button-danger":{
    "@apply  bg-danger border border-transparent text-white  hover:bg-danger  focus:outline-hidden focus:bg-danger  cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none duration-150 will-change-transform ease-in":{}
  },
".button-warning":{
    "@apply  bg-warning border border-transparent text-white hover:bg-warning  focus:outline-hidden focus:bg-warning  cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none duration-150 will-change-transform ease-in":{}
  },
    ".button-loading":{
    "@apply before:animate-spin before:inline-block before:size-4 before:border-3 before:border-current before:border-t-transparent  before:rounded-full duration-150 will-change-transform ease-in before:text-base-content":{}
  },
  ".button-full":{
    "@apply w-full py-3 px-4 inline-flex justify-center items-center":{}
  },
   ".button-rounded":{
    "@apply rounded-full":{}
  },
    '.button-outline-primary': {
    '@apply hover:border-transparent focus:border-transparent border-primary text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary active:text-white  disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-outline-secondary': {
    '@apply hover:border-transparent focus:border-transparent border-secondary text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:text-white active:bg-secondary active:text-white  disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-outline-success': {
    '@apply hover:border-transparent focus:border-transparent border-success text-success hover:bg-success hover:text-white focus:bg-success focus:text-white active:bg-success active:text-white  disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-outline-danger': {
    '@apply hover:border-transparent focus:border-transparent border-danger text-danger hover:bg-danger hover:text-white focus:bg-danger focus:text-white active:bg-danger active:text-white  disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-outline-warning': {
    '@apply hover:border-transparent focus:border-transparent border-warning text-warning hover:bg-warning hover:text-white focus:bg-warning focus:text-white active:bg-warning active:text-white  disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-soft-primary': {
    '@apply bg-primary/10 text-primary/95 hover:bg-primary/20  focus:outline-hidden focus:bg-primary/20 active:bg-primary/20  disabled:opacity-50 disabled:pointer-events-none cursor-pointer': {}
  },
  '.button-soft-secondary': {
    '@apply bg-secondary/10 text-secondary/95 hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/20    focus:outline-hidden   disabled:opacity-50 disabled:pointer-events-none cursor-pointer': {}
  },
  '.button-soft-success': {
    '@apply bg-success/10 text-success/95 hover:bg-success/20 focus:bg-success/20 active:bg-success/20 focus:outline-hidden  disabled:opacity-50 disabled:pointer-events-none cursor-pointer': {}
  },
  '.button-soft-danger': {
    '@apply bg-danger/10 text-danger/95 hover:bg-danger/20 focus:bg-danger/20 active:bg-danger/20 focus:outline-hidden  disabled:opacity-50 disabled:pointer-events-none cursor-pointer': {}
  },
  '.button-soft-warning': {
    '@apply bg-warning/10 text-warning/95 hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/20  focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none cursor-pointer': {}
  },
  '.button-ghost-primary': {
    '@apply text-primary hover:bg-primary/5 hover:text-primary focus:text-primary  focus:bg-primary/5 active:bg-primary/5  cursor-pointer focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none disabled:select-none ': {}
  },
  '.button-ghost-secondary': {
    '@apply text-secondary hover:bg-secondary/5 hover:text-secondary focus:text-secondary  focus:bg-secondary/5 active:bg-secondary/5  focus:outline-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none ': {}
  },
  '.button-ghost-success': {
    '@apply text-success hover:bg-success/5 hover:text-success focus:text-success  focus:bg-success/5 active:bg-success/5 focus:outline-hidden  cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-ghost-danger': {
    '@apply text-danger hover:bg-danger/5 hover:text-danger focus:text-danger  focus:bg-danger/5 active:bg-danger/5  focus:outline-hidden  cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-ghost-warning': {
    '@apply text-warning hover:bg-warning/10 hover:text-warning focus:text-warning  focus:bg-warning/10 active:bg-warning/10  focus:outline-hidden cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.button-small': { '@apply py-2 px-3 gap-2 text-sm': {} },
  '.button-large': { '@apply px-6 py-3 text-lg': {} },
  '.button-x-large': { '@apply px-8 py-4 text-xl': {} }
})








