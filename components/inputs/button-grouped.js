export default ButtonGroup  => ({
    ".button-grouped,.button-grouped-rounded":{
        "@apply inline-flex rounded-lg":{}
    },
    ".button-grouped-rounded .button":{
      "@apply rounded-none first:ms-0 -ms-px first:rounded-s-[9999px] last:rounded-e-[9999px]":{}
    },
    ".button-grouped  .button":{
      "@apply -ms-px rounded-none first:rounded-s-lg first:ms-0 last:rounded-e-lg focus:z-10":{}
    },
});