const appClasses = {
  // Navigation
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

  // Footer
  footer: 'bg-slate-800 rounded-lg shadow m-4',
  footerContainer: 'w-full container mx-auto p-4 md:px-6 md:py-8',
  footerLogo: 'sm:flex sm:items-center sm:justify-between',
  footerLogoImg: 'h-6 mr-3 sm:h-10',
  footerTitle: 'self-center text-2xl font-semibold whitespace-nowrap',
  footerLinks:
    'flex flex-wrap items-center mb-6 text-sm text-slate-400 sm:mb-0',
  footerLink: 'mr-4 hover:underline md:mr-6',
  footerCopy: 'block text-sm text-slate-400 sm:text-center',
  footerCopyLink: 'hover:underline',
  footerRule: 'my-6 border-slate-400 sm:mx-auto lg:my-8"',
}

const moviePageClasses = {
  container:
    'flex flex-col gap-12 px-8 mb-32 sm:px-16 md:px-32 lg:px-64 mt-16 sm:mt-24 md:mt-32 lg:mt-48 items-center text-lg ',
  imageContainer: 'mx-auto',
  imageFlexContainer:
    'flex flex-col xl:flex-row gap-12 sm:w-3/4 md:w-3/4 mx-auto',
  image: 'object-cover h-3/6 w-full',
  title: 'text-4xl font-semibold italic',
  div: 'flex gap-2 text-slate-400',
  plot: 'italic text-xl text-slate-400',
  runtimeContainer: 'gap-2 text-slate-400',
  ratingContainer:
    'flex border border-slate-700 bg-slate-800 rounded p-4 justify-between text-slate-400',
  reviewTitle: 'text-2xl font-semibold mb-2',
  reviewsContainer: 'flex flex-col items-center',
  reviewListContainer:
    'flex flex-col-reverse items-center w-full text-slate-400',
}

export { appClasses, moviePageClasses }
