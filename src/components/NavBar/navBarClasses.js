const navBarClasses = {
  nav: 'p-3 border-gray-200 rounded bg-slate-800',
  navContainer: 'container flex flex-wrap items-center justify-between mx-auto',
  navLogo: 'flex items-center',
  navLogoImg: 'h-6 mr-3 sm:h-10',
  navTitle: 'self-center text-xl font-semibold whitespace-nowrap',
  navListContainer: 'hidden w-full md:block md:w-auto',
  navList:
    'flex flex-col items-center mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ',
  navListItem:
    'block py-2 pl-3 pr-4 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0',
  navListItemActive:
    'block py-2 pl-3 pr-4 text-slate-400 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0',
  navLogoutBtn:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0',
}

export default navBarClasses
