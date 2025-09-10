module.exports = InputRange = (styles) => ({
  ".range": {
    '@apply w-full h-[0.5rem] bg-base-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  ".range::-webkit-slider-thumb":{
    '@apply appearance-none  w-4 h-4 bg-base-200 rounded-full shadow-md border-4 border-base-content cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none' :{}
  },
  ".range::-moz-range-thumb":{
    '@apply appearance-none  w-4 h-4 bg-base-200 rounded-full shadow-md border-4 border-base-content cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  ".range::-ms-thumb": {
    '@apply appearance-none  w-4 h-4 bg-base-200 rounded-full shadow-md border-4 border-base-content cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none': {}
  },
  ".range.range-primary::-webkit-slider-thumb":{
    '@apply appearance-none  w-4 h-4 bg-white rounded-full shadow-md border-4 border-primary cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none':{}
  },
    ".range.range-secondary::-webkit-slider-thumb":{
    '@apply appearance-none  w-4 h-4 bg-white rounded-full shadow-md border-4 border-secondary cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none':{}
  },
    ".range.range-success::-webkit-slider-thumb":{
    '@apply appearance-none  w-4 h-4 bg-white rounded-full shadow-md border-4 border-success cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none':{}
  } ,
  ".range.range-danger::-webkit-slider-thumb":{
    '@apply appearance-none  w-4 h-4 bg-white rounded-full shadow-md border-4 border-danger cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none':{}
  },
    ".range.range-warning::-webkit-slider-thumb":{
    '@apply appearance-none  w-4 h-4 bg-white rounded-full shadow-md border-4 border-warning cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none':{}
  }
});