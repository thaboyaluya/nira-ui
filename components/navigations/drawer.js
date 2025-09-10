module.exports=Drawer=()=>({
      '.drawer-toggle': {
    '@apply px-4 py-2 leading-[1.5em] inline-flex items-center gap-2 text-base rounded-lg select-none border  bg-base-200/40  text-base-content border-base-300/47 transition-colors hover:bg-base-300/40 duration-[.2s] ease-in   focus:outline-hidden focus:bg-base-300/40  active:bg-base-300/40   cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.drawer-overlay': {
    '@apply fixed inset-0 bg-black/50 hidden peer-checked:block z-[9998]': {}
  },
    '.drawer-content': {
    '@apply p-6 relative': {}
  },
   '.drawer-close': {
    '@apply absolute top-2 right-2 cursor-pointer text-base-content p-3 font-bold block': {}
  },
    '.drawer-title': {
    '@apply text-xl font-bold mb-4 mt-3': {}
  }, 
    '.drawer-left': {
    '@apply fixed left-0 top-0 h-full w-64 bg-base-100 shadow-lg transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-[9999]': {}
  },
      '.drawer-right': {
    '@apply fixed right-0 top-0 h-full w-64 bg-base-100 shadow-lg transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-[9999]': {}
  },
   '.drawer-top': {
    '@apply fixed top-0 left-0 w-full bg-base-100 shadow-lg transform -translate-y-full peer-checked:translate-y-0 transition-transform duration-300 z-[9999]': {}
  },
     '.drawer-bottom': {
    '@apply fixed bottom-0 left-0 w-full bg-base-100 shadow-lg transform translate-y-full peer-checked:translate-y-0 transition-transform duration-300 z-[9999]': {}
  },
})