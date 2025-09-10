module.exports=Modal=()=>({
     '.modal-toggle': {
    '@apply px-4 py-2 leading-[1.5em] inline-flex items-center gap-2 text-base rounded-lg select-none border  bg-base-200/40  text-base-content border-base-300/47 transition-colors hover:bg-base-300/40 duration-[.2s] ease-in   focus:outline-hidden focus:bg-base-300/40  active:bg-base-300/40   cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.modal-container': {
    '@apply fixed inset-0 transition-all duration-[2s] hidden peer-checked:flex items-center justify-center px-4 bg-black/50 z-[9998]': {}
  },
    '.modal-content': {
    '@apply bg-base-100 p-6 rounded-lg shadow-lg  relative z-[9999] ': {}
  }, 
      '.modal-title': {
    '@apply text-xl font-bold mb-4': {}
  }, 
    '.modal-close': {
    '@apply absolute top-2 right-2 cursor-pointer text-base-content font-bold p-3': {}
  },   
  
})