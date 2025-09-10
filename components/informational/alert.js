export default Alert  => ({
  '.alert': {
    '@apply relative w-full rounded-lg border border-base-300/47 bg-base-100 p-4 [&>svg]:absolute  [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 text-base-content': {}
  },
  '.alert-icon': {
    '@apply w-5 h-5': {}
  },
  '.alert-headline': {
    '@apply mb-1 font-medium leading-none tracking-tight': {}
  },
  '.alert-text': {
    '@apply text-sm': {}
  }
  ,
  '.alert-primary': {
    '@apply bg-primary border-primary text-white': {}
  }
   ,
  '.alert-secondary': {
    '@apply bg-secondary border-secondary text-white': {}
  }
   ,
  '.alert-danger': {
    '@apply bg-danger border-danger text-white': {}
  }
   ,
  '.alert-success': {
    '@apply bg-success border-success text-white': {}
  }
   ,
  '.alert-warning': {
    '@apply bg-warning border-warning text-white': {}
  },
    '.alert-primary-transparent': {
    '@apply bg-primary/10 border-primary/10 text-primary': {}
  }
  ,
    '.alert-secondary-transparent': {
    '@apply bg-secondary/10 border-secondary/10 text-secondary': {}
  }
  ,
    '.alert-success-transparent': {
    '@apply bg-success/10 border-success/10 text-success': {}
  }
  ,
    '.alert-danger-transparent': {
    '@apply bg-danger/10 border-danger/10 text-danger': {}
  }
  ,
    '.alert-warning-transparent': {
    '@apply bg-warning/10 border-warning/10 text-warning': {}
  }

  



});