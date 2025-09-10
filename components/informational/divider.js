module.exports = Divider = (styles) => ({
  '.divider:not(:empty)': {
    '@apply gap-[1rem]': {}
  },
  '.divider': {
    '@apply flex items-center h-[1rem] mb-[1rem] mt-[1rem] whitespace-nowrap': {}
  },
  '.divider-horizontal:after,.divider-horizontal:before,.divider:after,.divider:before': {
    '@apply w-full h-[1px] bg-base-200': {},
    "content":"var(--tw-content)",
    "--tw-content":"''"
  },
  '.divider-vertical': {
    '@apply flex-col h-full w-[1rem] my-[0rem] mx-[1rem]': {}
  },
  '.divider-vertical:after,.divider-vertical:before': {
    '@apply h-full w-[1px] bg-base-200': {},
       "content":"var(--tw-content)",
    "--tw-content":"''"
  }
});