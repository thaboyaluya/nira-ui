
module.exports = Switch = (styles) => (
    {
  '.switch': { '@apply relative inline-block  w-11 h-6 cursor-pointer': {} },
  '.switch-inner': { '@apply sr-only ': {} },
  '.switch-track': {
    '@apply absolute inset-0 bg-base-300   peer-checked:bg-neutral-800   rounded-full transition-colors duration-[.2s] ease-in   peer-disabled:opacity-50 peer-disabled:pointer-events-none': {}
  },
  '.switch-thumb': {
    '@apply   absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white    rounded-full shadow-xs transition-transform duration-[.2s] ease-in peer-checked:translate-x-full': {}
  },
  '.switch-track-primary': {
    '@apply peer-checked:bg-sky-400 ': {}
  },
  '.switch-thumb-primary': { '@apply bg-white ': {} },

  '.switch-track-secondary': {
    '@apply peer-checked:bg-purple-600 ': {} 
  },
  '.switch-thumb-secondary': {
    '@apply bg-white  ': {}
  },
  '.switch-track-success': {
    '@apply peer-checked:bg-green-400 ': {}    
  },
  '.switch-thumb-success': {
    '@apply bg-white  ': {}
  },
  '.switch-track-danger': {
    '@apply peer-checked:bg-red-500 ': {}
  },
  '.switch-thumb-danger': { '@apply bg-white ': {} }, 

  '.switch-track-warning': {
    '@apply peer-checked:bg-yellow-500 ': {} 
  },
  '.switch-thumb-warning': {
    '@apply bg-white  ': {}
  }
}
);



