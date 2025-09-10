export default Table  => ({
  '.breadcrumbs': {
    '@apply px-[.75rem] text-base flex overflow-x-auto gap-[.5] text-base-content': {}
  },
  '.breadcrumbs>ul,.breadcrumbs>ul>li>a': {
    '@apply flex items-center': {}
  },
  '.breadcrumbs>ul': {
    '@apply whitespace-nowrap': {}
  },
  '.breadcrumbs>ul>li': {
    '@apply items-center cursor-pointer flex': {}
  },
  '.breadcrumbs>ul>:not(li:last-child)>a:hover': {
    '@apply underline ': {}
  },
  '.breadcrumbs>ul>li+:before': {
    '@apply opacity-4 ml-[.5rem] mr-[.75rem] block': {},
    "content":"var(--tw-content)",
    "--tw-content":"'/'"
  },
  
  '.breadcrumbs-active,.breadcrumbs>ul>li:last-child': {
    '@apply text-base-content/50': {}
  },
   '.breadcrumbs>ul>li:last-child': {
    '@apply cursor-auto': {}
  },
'.breadcrumbs>ul>li:first-child:hover': {
    '@apply underline': {}
  },
});