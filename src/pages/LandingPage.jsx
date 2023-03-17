import { MovieDisplay } from '../components/MovieDisplay'

export function LandingPage() {
  return (
    <div>
      <div className="flex flex-col items-center gap-8 px-auto py-12 mx-auto max-w-screen-lg lg:px-32 md:px-16 lg:py-8 lg:my-16">
        <h2 className="text-2xl font-bold">DaMaFe Premium Movie Reviews</h2>
        <p className="text-slate-400 font-normal text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{' '}
        </p>
      </div>
      <MovieDisplay />
    </div>
  )
}
