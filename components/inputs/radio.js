export default Radio  => (
{
  '.radio': {
    '@apply appearance-none cursor-pointer rounded-[50%] bg-base-200 border-base-300/47 border w-4 h-4 checked:bg-neutral-950 checked:border-neutral-950 outline-neutral-950 outline-offset-2 focus:outline-2 focus:border-neutral-950 focus:outline-base-content-100 disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  '.radio[type=radio]:checked': {
     "background-image": `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`
  },
  '.radio-primary': {
    '@apply focus:border-primary focus:outline-primary checked:bg-primary checked:border-primary': {}
  },
  '.radio-secondary': {
    '@apply focus:border-secondary focus:outline-secondary checked:bg-secondary checked:border-secondary': {}
  },
  '.radio-success': {
    '@apply focus:border-success focus:outline-success checked:bg-success checked:border-success': {}
  },
  '.radio-danger': {
    '@apply focus:border-danger focus:outline-danger checked:bg-danger checked:border-danger': {}
  },
  '.radio-warning': {
    '@apply focus:border-warning focus:outline-warning checked:bg-warning checked:border-warning': {}
  }
}
);