export default Input  => (
{
  '.input': {
    '@apply px-4 py-2 text-base text-base-content placeholder:text-base-content/40 font-light  leading-[1.5em] border outline-base-content outline-offset-2 focus:outline-2  focus:outline-base-content border-base-300/47  rounded-lg bg-base-100 shadow-xs  active:border-base-content focus:border-base-content  disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}    
  },
  '.input-soft': {
    '@apply bg-base-200 text-base-content shadow-xs px-4 py-2 text-base placeholder:text-base-content/40  leading-[1.5em] outline-base-content-300 outline-offset-2 focus:outline-2  shadow-2xs rounded-lg active:outline-base-content-300': {}   
  },
  '.input-primary': {
    '@apply outline-primary outline-offset-2  border-primary shadow-2xs  active:outline-primary active:border-primary hover:border-primary focus:outline-primary focus:border-primary': {}
  },
  '.input-secondary': {
    '@apply outline-secondary outline-offset-2  border-secondary shadow-2xs  active:outline-secondary active:border-secondary hover:border-secondary focus:outline-secondary focus:border-secondary': {}
  },
  '.input-success': {
    '@apply outline-success outline-offset-2  border-success shadow-2xs  active:outline-success active:border-success hover:border-success focus:outline-success focus:border-success': {}
  },
  '.input-warning': {
    '@apply outline-warning outline-offset-2  border-warning shadow-2xs  active:outline-warning active:border-warning hover:border-warning focus:outline-warning focus:border-warning': {}
  },
  '.input-danger': {
    '@apply outline-danger outline-offset-2 border-danger shadow-2xs  active:outline-danger active:border-danger  focus:outline-danger focus:border-danger': {}
  },
  '.input-soft-primary': {
    '@apply bg-primary/10 placeholder:text-primary outline-primary active:outline-primary outline-offset-2 focus:outline-2  shadow-2xs rounded-lg': {}
  },
  '.input-soft-secondary': {
    '@apply bg-secondary/10  placeholder:text-secondary outline-secondary active:outline-secondary': {}
  },
  '.input-soft-success': {
    '@apply bg-success/10  placeholder:text-success outline-success active:outline-success': {}
  },
  '.input-soft-danger': {
    '@apply bg-danger/10  placeholder:text-danger active:outline-danger outline-danger ': {}
  },
  '.input-soft-warning': {
    '@apply bg-warning/10  placeholder:text-warning active:outline-warning outline-warning': {}
  },
  '.input-full': { '@apply w-full': {} },
  '.input-small': { '@apply px-3 py-1 text-sm': {} },
  '.input-large': { '@apply px-6 py-3 text-lg': {} },
  '.input-x-large': { '@apply px-8 py-4 text-xl': {} }
}
);