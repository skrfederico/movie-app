const movieDisplayClasses = {
  container: 'mb-32 mt-16',
  movieContainer:
    'group flex flex-col justify-center items-center p-2 h-full transition ease-in-out delay-150 group/item hover:-translate-y-4 hover:scale-110 duration-300',
  image: 'object-contain w-full rounded-3xl group-hover:brightness-50',
  info: 'opacity-0 group-hover:opacity-100 group-hover:brightness-100 duration-300 absolute inset-0 z-10 flex flex-col justify-end items-start px-8 py-24',
  title: 'text-2xl text-white font-semibold',
}

export default movieDisplayClasses
