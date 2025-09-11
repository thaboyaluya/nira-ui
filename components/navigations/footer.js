export default Footer=()=>({
  '.footer': {
    '@apply bg-base-100 text-base-content': {}
  },
  '.footer-container': {
    '@apply max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8': {}
  },
    '.footer-link': {
    '@apply text-base leading-6 text-base-content  hover:text-base-content/80 px-5 py-2': {}
  },
      '.footer-icon': {
    '@apply text-base-content  hover:text-base-content/80': {}
  },
    '.footer-copyright': {
    '@apply mt-8 text-base leading-6 text-center text-gray-400': {}
  },
  '.footer-primary': {
    '@apply bg-primary': {}
  },
    '.footer-primary .footer-link, .footer-primary .footer-icon': {
    '@apply text-white hover:text-white/80': {}
  },
 '.footer-primary .footer-copyright': {
    '@apply text-white/75': {}
  },
  '.footer-secondary': {
    '@apply bg-secondary': {}
  },
    '.footer-secondary .footer-link, .footer-secondary .footer-icon': {
    '@apply text-white hover:text-white/80': {}
  },
 '.footer-secondary .footer-copyright': {
    '@apply text-white/75': {}
  },
    '.footer-success': {
    '@apply bg-success': {}
  },
    '.footer-success .footer-link, .footer-success .footer-icon': {
    '@apply text-white hover:text-white/80': {}
  },
 '.footer-success .footer-copyright': {
    '@apply text-white/75': {}
  },
    '.footer-danger': {
    '@apply bg-danger': {}
  },
    '.footer-danger .footer-link, .footer-danger .footer-icon': {
    '@apply text-white hover:text-white/80': {}
  },
 '.footer-danger .footer-copyright': {
    '@apply text-white/75': {}
  },
    '.footer-warning': {
    '@apply bg-warning': {}
  },
    '.footer-warning .footer-link, .footer-warning .footer-icon': {
    '@apply text-white hover:text-white/80': {}
  },
 '.footer-warning .footer-copyright': {
    '@apply text-white/75': {}
  },

})