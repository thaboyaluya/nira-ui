module.exports = Link = (styles) => ({
  '.link': {
    '@apply items-center text-base-content cursor-pointer inline-flex text-base duration-[.15s] transition-colors hover:text-base-content/70': {}
  },
  '.link-primary': {
    '@apply text-primary hover:text-primary/85': {}
  },
  '.link-secondary': {
    '@apply text-secondary hover:text-secondary/85': {}
  },
    '.link-success': {
    '@apply text-success hover:text-success/85': {}
  },
    '.link-warning': {
    '@apply text-warning hover:text-warning/85': {}
  },
    '.link-danger': {
    '@apply text-danger hover:text-danger/85': {}
  },
    '.link-underline,.link-underline-hover:hover': {
    '@apply underline': {}
  },
    '.link-ghost': {
    '@apply rounded-2xl py-[.25rem] px-[.5rem] hover:bg-base-200 hover:text-base-content/50': {}
  },
    '.link-ghost-primary': {
    '@apply rounded-2xl py-[.25rem] px-[.5rem] hover:bg-primary/10 hover:text-primary': {}
  },
      '.link-ghost-secondary': {
    '@apply rounded-2xl py-[.25rem] px-[.5rem] hover:bg-secondary/10 hover:text-secondary': {}
  },
      '.link-ghost-warning': {
    '@apply rounded-2xl py-[.25rem] px-[.5rem] hover:bg-warning/10 hover:text-warning': {}
  },
      '.link-ghost-success': {
    '@apply rounded-2xl py-[.25rem] px-[.5rem] hover:bg-success/10 hover:text-success': {}
  },
      '.link-ghost-danger': {
    '@apply rounded-2xl py-[.25rem] px-[.5rem] hover:bg-danger/10 hover:text-danger': {}
  },
  





});