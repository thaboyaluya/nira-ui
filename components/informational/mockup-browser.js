export default MockupBrowser  => (
    {
  ' .mockup-browser': {
    '@apply relative rounded-2xl': {},
     "overflow": "auto hidden"
  },
  '.mockup-browser pre[data-prefix]:before': {
    '@apply inline-block text-right': {},
    "content":"attr(data-prefix)"
  },
    '.mockup-browser .mockup-browser-toolbar': {
    '@apply items-center w-full pr-[1.4rem] inline-flex my-[.75rem]': {},
  },
     '.mockup-browser .mockup-browser-toolbar:where(:dir(rtl),[dir=rtl],[dir=rtl] *)': {
    '@apply flex-row-reverse': {},
  },

  '.mockup-browser .mockup-browser-toolbar:before': {
    '@apply inline-flex mr-[4.8rem] h-[.75rem] opacity-[.3] aspect-[1]': {},
  "border-radius": "3.40282e38px",
  "box-shadow": "1.4em 0,2.8em 0,4.2em 0",
   "content": "''"
  },
 
  '.mockup-browser .mockup-browser-toolbar .input': {
    '@apply text-sm w-[50%] mx-auto': {},
  },
 
 
 
  















});



