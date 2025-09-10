module.exports=Progress=()=>({
 ".progress": {
    "@apply relative h-2 w-40 appearance-none overflow-hidden rounded-full bg-base-200": {}
  },
  ".progress::-webkit-progress-bar": {
    "@apply rounded-full bg-base-200": {}
  },
  ".progress::-moz-progress-bar": {
    "@apply rounded-full bg-primary": {}
  },
  ".progress::-webkit-progress-value": {
    "@apply rounded-full bg-primary": {}
  },
  ".progress-sm": {
    "@apply h-1": {}
  },
  ".progress-lg": {
    "@apply h-3": {}
  },
  ".progress-xl": {
    "@apply h-4": {}
  },
    ".progress:indeterminate::after,.progress-indeterminate::after": {
    "@apply absolute bottom-0  top-0 w-1/3 rounded-full bg-primary content-['']": {},
     "animation": "indeterminate-progress-bar 1s infinite ease-in"
  },

  ".progress-primary::-webkit-progress-value,.progress-flat-primary::-webkit-progress-value,.progress-primary.progress:indeterminate::after,.progress-flat-primary.progress:indeterminate::after,.progress-primary.progress-indeterminate::after,.progress-flat-primary.progress-indeterminate::after": {
    "@apply bg-primary": {}
  },
  ".progress-success::-webkit-progress-value,.progress-flat-success::-webkit-progress-value,.progress-success.progress:indeterminate::after,.progress-flat-success.progress:indeterminate::after,.progress-success.progress-indeterminate::after,.progress-flat-success.progress-indeterminate::after": {
    "@apply bg-success": {}
  },
  ".progress-secondary::-webkit-progress-value,.progress-flat-secondary::-webkit-progress-value,.progress-secondary.progress:indeterminate::after,.progress-flat-secondary.progress:indeterminate::after,.progress-secondary.progress-indeterminate::after,.progress-flat-secondary.progress-indeterminate::after": {
    "@apply bg-secondary": {}
  },
  ".progress-danger::-webkit-progress-value,.progress-flat-danger::-webkit-progress-value,.progress-danger.progress:indeterminate::after,.progress-flat-danger.progress:indeterminate::after,.progress-danger.progress-indeterminate::after,.progress-flat-danger.progress-indeterminate::after": {
    "@apply bg-danger": {}
  },
  ".progress-warning::-webkit-progress-value,.progress-flat-warning::-webkit-progress-value,.progress-warning.progress:indeterminate::after,.progress-flat-warning.progress:indeterminate::after,.progress-warning.progress-indeterminate::after,.progress-flat-warning.progress-indeterminate::after": {
    "@apply bg-warning": {}
  },
  ".progress-flat-primary::-webkit-progress-bar,.progress-flat-primary.progress-indeterminate": {
    "@apply bg-primary/20": {}
  },
  ".progress-flat-secondary::-webkit-progress-bar,.progress-flat-secondary.progress-indeterminate": {
    "@apply bg-secondary/20": {}
  },
  ".progress-flat-success::-webkit-progress-bar,.progress-flat-success.progress-indeterminate": {
    "@apply bg-success/20": {}
  },
  ".progress-flat-danger::-webkit-progress-bar,.progress-flat-danger.progress-indeterminate": {
    "@apply bg-danger/20": {}
  },
  ".progress-flat-warning::-webkit-progress-bar,.progress-flat-warning.progress-indeterminate": {
    "@apply bg-warning/20": {}
  }
})