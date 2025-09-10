export default Accordion  => ({
  '.accordion-group': {
    '@apply relative mx-auto text-base bg-base-100 transition duration-[.2s] ease-in': {}
  },
  '.accordion': {
    '@apply p-2': {}
  },
  '.accordion-title': {
    '@apply flex cursor-pointer items-center justify-between w-full text-left select-none py-4': {}
  },
  '.accordion-icon': {
    '@apply w-4 h-4 duration-200 ease-in  peer-checked:rotate-180': {}
  },
  '.accordion-content': {
    '@apply max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40': {}
  }

});