
export default Select  => ({
    
   '.select':{
      "background-image": `url("data:image/svg+xml;charset=utf-8,%3Csvg class='select-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill:%237e868c'%3E%3Cpath d='M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z'/%3E%3C/svg%3E")`,
    "background-position": "right .5rem center",
    "background-size": "1.5em 1.5em",
     "@apply px-4 py-2  shadow-2xs text-base max-w-xs w-full   rounded-lg select-none border border-base-300/47 bg-base-100 text-base-content outline-base-content active:border-base-content focus:border-base-content shadow-xs  outline-offset-2 focus:outline-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:select-none appearance-none bg-no-repeat":{}
   },
  '.select-primary': { '@apply border-primary outline-primary active:border-primary focus:border-primary': {} },
  '.select-secondary': { '@apply border-secondary outline-secondary active:border-secondary focus:border-secondary': {} },
  '.select-success': { '@apply border-success outline-success active:border-success focus:border-success': {} },
  '.select-danger': { '@apply border-danger outline-danger active:border-danger focus:border-danger': {} },
  '.select-warning': { '@apply border-warning outline-warning active:border-warning focus:border-warning': {} },
  '.select-small': { '@apply px-3 py-1 text-sm': {} },
  '.select-large': { '@apply px-6 py-3 text-lg': {} },
  '.select-x-large': { '@apply px-8 py-4 text-xl': {} },
  '.select-full': { '@apply max-w-full': {} }
}
);



