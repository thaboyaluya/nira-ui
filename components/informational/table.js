module.exports = Table = (styles) => ({
  '.table': {
    '@apply w-full my-[1rem] mx-[0rem] bg-base-100 text-base-content border-collapse border-spacing-[0]': {}
  },
  '.table td, .table th': {
    '@apply border border-t-0 border-r-0 border-b-1 border-l-0 border-base-300/47 text-left py-[10px] px-[15px] align-top': {}
  },
  '.table.table-bordered td, .table.table-bordered th': {
    '@apply border border-base-300/47  py-[10px] px-[15px] align-top text-left': {}
  },
  '.table.table-hover > tbody > tr:hover, .table.table-striped > tbody > tr:nth-child(odd)': {
    '@apply bg-base-200 transition-colors duration-[.25s]': {}
  },
  '.table.table-right thead tr th, .table.table-right tbody tr td': {
    '@apply text-right': {}
  },
  '.table.table-centered thead tr th, .table.table-centered tbody tr td': {
    '@apply text-center ': {}
  },
  
  'tbody, tfoot, thead': {
    '@apply bg-base-200/2': {}
  },
    
  

   

  



});