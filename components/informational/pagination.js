export default Pagination=>({
     '.pagination': {
    '@apply flex pl-0 select-none list-none': {}
  },
       '.page-link': {
    '@apply block border border-base-300/47 transition-colors py-[0.375rem] px-[0.75rem] text-base-content hover:z-[2] hover:text-primary hover:bg-base-300/20 focus:z-[3] focus:text-primary focus:bg-base-300/20 focus:outline-none': {}
  },
  '.page-item:not(:first-child) .page-link ': {
    '@apply ml-[-1px]': {}
  },
    '.page-item.active .page-link': {
    '@apply z-[3] border border-primary text-white bg-primary': {}
  },

  '.page-item.disabled .page-link': {
    '@apply opacity-50 pointer-events-none': {}
  },

 '.page-item:first-child .page-link': {
     "border-top-left-radius":" 0.25rem;",
  "border-bottom-left-radius": "0.25rem"
  },

  '.page-item:last-child .page-link ': {
    "  border-top-right-radius": "0.25rem",
  "border-bottom-right-radius":" 0.25rem"
  },
})