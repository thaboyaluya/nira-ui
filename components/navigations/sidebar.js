export default Sidebar=>({
    '.sidebar': {
    '@apply top-0 z-[55] flex h-screen w-full max-w-[18rem] translate-x-0 flex-col justify-between bg-base-200': {}       
  },
  '.sidebar-sticky': {
    '@apply sticky': {}
  },
  '.sidebar-fixed-left': {
    '@apply fixed left-0': {}
  },
  '.sidebar-fixed-right': {
    '@apply fixed right-0': {}
  },
  '.sidebar-title': {
    '@apply flex w-full items-center font-semibold text-base-content': {}
  },
  '.sidebar-content': {
    '@apply flex h-full w-full flex-col overflow-y-auto py-6': {}
  },
  '.sidebar-footer': {
    '@apply flex w-full flex-col text-base-content': {}
  },
  '.sidebar-mobile': {
    '@apply transition-transform duration-150': {}
  },
  '.sidebar-state': {
    '@apply hidden': {}
  },
  'html:has(.sidebar-state:checked)': {
    '@apply overflow-hidden': {}
  },
  '.sidebar-state:checked~.sidebar-overlay': {
    '@apply fixed inset-0 z-50 bg-black/60 opacity-80 transition-all peer-checked:opacity-100 peer-checked:pointer-events-auto': {}
  },
  '.menu': {
    '@apply flex w-full flex-col gap-2': {}
  },
  '.menu-section': {
    '@apply flex flex-col gap-2': {}
  },
  '.menu-title': {
    '@apply text-xs font-normal': {}
  },
'.menu-item':{
    '@apply flex cursor-pointer select-none flex-row items-center gap-2 rounded-lg px-4 py-2 text-sm text-base-content duration-150 will-change-transform hover:bg-base-300/30  active:bg-base-300/30 ease-in':{}
},
  '.menu-item-disabled': {
    '@apply pointer-events-none cursor-not-allowed text-base-content ': {}
  },
    '.menu-item-no-animation': {
    '@apply transition-none ': {}
  },
  '.menu-item.menu-active': {
    '@apply bg-base-300/30 transition-none ': {}
  },
  '.menu-toggle': {
    '@apply hidden': {}
  },
  '.menu-item-collapse':{
    'transition': 'padding 0.15s, grid-template-rows 0.15s',
    '@apply grid grid-rows-[0fr] overflow-hidden':{}
  },
  '.menu-toggle:checked ~ .menu-item-collapse': {
    '@apply grid-rows-[1fr] border-none': {}
  },

  '.menu-item:focus-within ~ .menu-item-collapse': {
    '@apply grid-rows-[1fr] border-none': {}
  },
  '.menu-icon': {
    '@apply transition-transform duration-300': {}
  },

  '.menu-toggle:checked ~ .menu-item .menu-icon': {
    '@apply rotate-90': {}
  }





















































})