module.exports = Dropdown = (styles) => ({
  '.dropdown': {
    '@apply relative': {}
  },
  '.dropdown-toggle': {
    '@apply px-4 py-2 text-base-content cursor-pointer': {}
  },
  '.dropdown-menu': {
    '@apply absolute hidden peer-checked:block left-0 min-w-48 rounded-lg shadow-xs mt-2 z-10 origin-top-left bg-base-100 p-1.5 outline-none border border-base-300/47 ': {}
  },
  '.dropdown-item': {
    '@apply px-2 lg:py-1.5 py-2 w-full flex items-center rounded-md transition-colors text-left text-base-content hover:bg-base-200 focus-visible:bg-base-200 disabled:opacity-50 disabled:cursor-not-allowed outline-none ': {}
  },
  '.dropdown-item-primary': {
    '@apply hover:bg-primary/10 active:bg-primary/10 hover:text-primary focus-visible:text-primary': {}
  },
    '.dropdown-item-secondary': {
    '@apply hover:bg-secondary/10 active:bg-secondary/10 hover:text-secondary focus-visible:text-secondary': {}
  },
      '.dropdown-item-success': {
    '@apply hover:bg-success/10 active:bg-success/10 hover:text-success focus-visible:text-success': {}
  },
'.dropdown-item-danger': {
    '@apply hover:bg-danger/10 active:bg-danger/10 hover:text-danger focus-visible:text-danger': {}
  },
  '.dropdown-item-warning': {
    '@apply hover:bg-warning/10 active:bg-warning/10 hover:text-warning focus-visible:text-warning': {}
  },
    '.dropdown-link': {
    '@apply relative inline-flex items-center gap-2 outline-none': {}
  },



});