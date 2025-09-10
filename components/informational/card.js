export default Card  => ({
  '.card': {
    '@apply flex flex-col bg-base-100 border border-base-300/47 shadow-xs rounded-xl p-4 ': {}
  },
  '.card-title': {
    '@apply text-lg font-bold text-base-content': {}
  }
  ,
  '.card-subtitle': {
    '@apply mt-1 text-xs font-medium uppercase text-base-content/50': {}
  }
    ,
  '.card-text': {
    '@apply mt-2 text-base-content': {}
  }
  ,
  '.card-link': {
    '@apply py-3 px-0  inline-flex items-center gap-2 text-base rounded-lg border border-transparent text-primary focus:outline-hidden focus:text-primary hover:underline  disabled:opacity-50 disabled:pointer-events-none disabled:select-none active:underline duration-[.2s] ease-in': {}
  }
  ,
  '.card-img-top': {
    '@apply w-full h-auto rounded-t-xl': {}
  }
    ,
  '.card-img-bottom': {
    '@apply w-full h-auto rounded-b-xl': {}
  }
    ,
  '.card-header': {
    '@apply bg-base-200 border-b border-base-200 rounded-t-xl py-3 px-4 md:py-4 md:px-5': {}
  },
  '.card-header-title': {
    '@apply mt-1 text-sm text-gray-500 dark:text-neutral-500': {}
  },
   '.card-primary': {
    '@apply max-w-xs flex flex-col bg-base-100 border border-base-300/47 border-t-4 border-t-primary shadow-xs rounded-xl': {}
  }
  ,
   '.card-secondary': {
    '@apply max-w-xs flex flex-col bg-base-100 border border-base-300/47 border-t-4 border-t-secondary shadow-xs rounded-xl': {}
  }
  ,
   '.card-success': {
    '@apply max-w-xs flex flex-col bg-base-100 border border-base-300/47 border-t-4 border-t-success shadow-xs rounded-xl': {}
  }
  ,
   '.card-danger': {
    '@apply max-w-xs flex flex-col bg-base-100 border border-base-300/47 border-t-4 border-t-danger shadow-xs rounded-xl': {}
  }
  ,
   '.card-warning': {
    '@apply max-w-xs flex flex-col bg-base-100 border border-base-300/47 border-t-4 border-t-warning shadow-xs rounded-xl': {}
  }

  

});