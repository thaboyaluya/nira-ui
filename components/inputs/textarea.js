module.exports = Select = (styles) => (
    {
  '.textarea': {
    '@apply px-4 py-2 shadow-xs text-base-content md:text-base sm:py-3 sm:px-4  border outline-base-content outline-offset-2 focus:outline-2 placeholder:text-base-content/40 active:outline-base-content border-base-300/47 shadow-2xs rounded-lg bg-base-100   sm:text-sm  disabled:opacity-50 disabled:pointer-events-none disabled:select-none active:border-base-content focus:border-base-content ': {}
  },
  '.textarea-soft': {
    '@apply px-4 py-2 sm:py-3 sm:px-4 md:text-base  bg-base-200 text-base-content text-base active:outline-base-content-300 placeholder:text-base-content/40  leading-[1.5em] outline-base-content-300 outline-offset-2 focus:outline-2  shadow-2xs rounded-lg': {}
  },
  '.textarea-primary': {
    '@apply border-primary outline-primary outline-offset-2 focus:outline-2 active:outline-primary hover:border-primary  disabled:opacity-50 disabled:pointer-events-none active:border-primary focus:border-primary ': {}
  },
  '.textarea-secondary': {
    '@apply border-secondary outline-secondary outline-offset-2 focus:outline-2 active:outline-secondary hover:border-secondary  disabled:opacity-50 disabled:pointer-events-none active:border-secondary focus:border-secondary': {}
  },
  '.textarea-success': {
    '@apply border-success outline-success outline-offset-2 focus:outline-2 active:outline-success hover:border-success disabled:opacity-50 disabled:pointer-events-none active:border-success focus:border-success': {}
  },
  '.textarea-danger': {
    '@apply border-danger outline-danger outline-offset-2 focus:outline-2 active:outline-danger hover:border-danger  disabled:opacity-50 disabled:pointer-events-none active:border-danger focus:border-danger': {}
  },
  '.textarea-warning': {
    '@apply border-warning outline-warning hover:border-warning outline-offset-2 focus:outline-2 active:outline-warning disabled:opacity-50 disabled:pointer-events-none active:border-warning focus:border-warning': {}
  },
  '.textarea-full': { '@apply w-full': {} }
}
);



