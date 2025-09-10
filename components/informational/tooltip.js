export default Tooltip  => ({
  '.tooltip': {
    '@apply relative': {},
  "--tooltip-bg": "#000000",
  "--tooltip-border": "#000000"
  },
".tooltip-primary" :{
  "--tooltip-bg": "var(--color-primary)",
  "--tooltip-border": "var(--color-primary)"
},
".tooltip-secondary" :{
  "--tooltip-bg": "var(--color-secondary)",
  "--tooltip-border": "var(--color-secondary)"
},

".tooltip-warning" :{
  "--tooltip-bg": "var(--color-warning)",
  "--tooltip-border": "var(--color-warning)"
},

".tooltip-success" :{
  "--tooltip-bg": "var(--color-success)",
  "--tooltip-border": "var(--color-success)"
},

".tooltip-danger" :{
  "--tooltip-bg": "var(--color-danger)",
  "--tooltip-border": "var(--color-danger)"
},
    '.tooltip::after': {
    '@apply absolute leading-[1.5rem] z-1000000 hidden text-center py-[.375rem] px-[1rem] normal-case opacity-0 text-white bg-[var(--tooltip-bg)] whitespace-pre tracking-normal rounded-lg pointer-events-none text-shadow-none text-sm': {},  
    "content":"attr(data-content)",
    "-webkit-font-smoothing":"subpixel-antialiased"
  },
     '.tooltip::before': {
    '@apply absolute z-1000000  w-0 h-0 hidden opacity-0  pointer-events-none border-[var(--tooltip-border)]': {},
    "content": '""',
    "border": "6px solid transparent"
  },
     '.tooltip:active::after, .tooltip:active::before, .tooltip:focus::after, .tooltip:focus::before, .tooltip:hover::after, .tooltip:hover::before ': {
      "display": "inline-block",
  "text-decoration": "none",
  "animation-name": "tooltip-appear",
  "animation-duration":" 0.1s",
  "animation-fill-mode": "forwards",
  "animation-timing-function": "ease-in",
  "animation-delay": "0.4s"
  },
     '.tooltip-s::after, .tooltip-se::after, .tooltip-sw::after': {
    '@apply top-[100%] right-[50%] mt-[6px]': {}
  },
     '.tooltip-s::before, .tooltip-se::before, .tooltip-sw::before': {
    '@apply top-[auto] right-[50%] bottom-[-7px] mr-[-6px] border-b-[var(--tooltip-border)]': {}
  },

    '.tooltip-se::after': {
    '@apply right-[auto]  mr-[-16px]': {}
  },

    '.tooltip-sw::after': {
    'margin-right': "-16px"
  },
      '.tooltip-n::after, .tooltip-ne::after, .tooltip-nw::after': {
    '@apply  right-[50%] bottom-[100%] mb-[6px]': {}
  },

       '.tooltip-ne::after, .tooltip-nw::after': {
    '@apply  right-[50%] bottom-[100%] mb-[6px]': {}
  },

        '.tooltip-ne::before, .tooltip-nw::before': {
    '@apply  top-[-7px] right-[50%] bottom-[auto] mr-[-6px] border-t-[var(--tooltip-border)]': {}
  },

  '.tooltip-n::before, .tooltip-ne::before, .tooltip-nw::before': {
    '@apply top-[-7px] right-[50%] bottom-[auto] mr-[-6px] border-t-[var(--tooltip-border)]': {}
  },

     '.tooltip-ne::after': {
    '@apply right-[auto] left-[50%] ml-[-16px]': {}
  },
    '.tooltip-nw::after': {
    '@apply mr-[-16px]': {}
  },

       '.tooltip-n::after, .tooltip-s::after ': {
    '@apply translate-x-[50%]': {}
  },
     '.tooltip-w::after': {
    '@apply right-[100%] bottom-[50%] mr-[6px] translate-y-[50%]': {}
  },
  '.tooltip-w::before': {
    '@apply top-[50%] bottom-[50%] left-[-7px] mt-[-6px] border-l-[var(--tooltip-border)]': {}
  },
     '.tooltip-e::after': {
    '@apply bottom-[50%] left-[100%] ml-[6px] translate-y-[50%]': {}
  },

  '.tooltip-e::before': {
    '@apply top-[50%] right-[-7px] bottom-[50%] mt-[-6px] border-r-[var(--tooltip-border)]': {}
  },
    
    

});