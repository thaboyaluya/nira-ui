export default Checkbox  => ({
  '.checkbox': {
    '@apply bg-base-200  border border-base-300/47 appearance-none rounded-sm w-4 h-4  outline-base-300 outline-offset-2 focus:outline-2 focus:border-base-300/47  focus:outline-base-content-100 checked:bg-neutral-950 checked:border-neutral-950 disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
    '.checkbox[type=checkbox]:checked': {
     "background-image": `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`
  },
  '.checkbox-primary': {
    '@apply focus:border-primary focus:outline-primary checked:bg-primary checked:border-primary': {}
  },
  '.checkbox-secondary': {
    '@apply focus:border-secondary focus:outline-secondary checked:bg-secondary checked:border-secondary': {}
  },
  '.checkbox-success': {
    '@apply focus:border-success focus:outline-success checked:bg-success checked:border-success': {}
  },
  '.checkbox-danger': {
    '@apply focus:border-danger focus:outline-danger checked:bg-danger checked:border-danger': {}
  },
  '.checkbox-warning': {
    '@apply focus:border-warning focus:outline-warning checked:bg-warning checked:border-warning': {}
  }

});