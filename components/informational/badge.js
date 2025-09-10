export default Badge  => ({
  '.badge': {
    '@apply rounded-full px-2.5 py-0.5 text-white text-xs font-semibold bg-black': {}
  },
    '.badge-with-icon': {
    '@apply px-2.5 py-0.5 inline-flex items-center gap-x-1 text-xs bg-base-200 text-base-content rounded-full': {}
  },
    '.badge-icon': {
    '@apply shrink-0 size-3.5': {}
  },
  '.badge-primary': {
    '@apply bg-primary': {}
  }
  ,
  '.badge-secondary': {
    '@apply bg-secondary': {}
  }
  ,
  '.badge-success': {
    '@apply bg-success': {}
  }
  ,
  '.badge-danger': {
    '@apply bg-danger': {}
  }
    ,
  '.badge-warning': {
    '@apply bg-warning': {}
  },
   '.badge-outline-primary': {
    '@apply bg-transparent text-primary border border-primary text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }
  ,
   '.badge-outline-secondary': {
    '@apply bg-transparent text-secondary border border-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }
  ,
   '.badge-outline-success': {
    '@apply bg-transparent text-success border border-success text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }
  ,
   '.badge-outline-danger': {
    '@apply bg-transparent text-danger border border-danger text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }
  ,
   '.badge-outline-warning': {
    '@apply bg-transparent text-warning border border-warning text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }

    ,
   '.badge-transparent-primary': {
    '@apply bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }
      ,
   '.badge-transparent-secondary': {
    '@apply bg-secondary/10 text-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  },
   '.badge-transparent-success': {
    '@apply bg-success/10 text-success text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  },
   '.badge-transparent-danger': {
    '@apply bg-danger/10 text-danger text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  },
   '.badge-transparent-warning': {
    '@apply bg-warning/10 text-warning text-xs font-semibold px-2.5 py-0.5 rounded-full': {}
  }

});