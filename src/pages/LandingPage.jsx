import { MovieDisplay } from '../components/MovieDisplay'

export function LandingPage() {
  return (
    <>
      <div className="absolute lg:pb-8 lg:mb-16 w-screen z-0">
        <img
          src="landing.jpg"
          className=" w-full brightness-50 opacity-8 h-[800px] w-full  object-none"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 px-auto mx-auto w-screen max-w-screen-lg lg:px-32 md:px-16 my-auto lg:py-8 blur-none h-[800px] bg-black bg-opacity-30">
        <h2 className="text-3xl font-bold text-center">
          DaMaFe Premium Movie Reviews
        </h2>
        <p className="font-normal text-lg text-center">
          Welcome to DaMaFe Movies, your ultimate destination for unbiased and
          insightful movie reviews! Our platform is dedicated to providing you
          with the most comprehensive and honest reviews on the latest
          blockbusters, indie flicks, and timeless classics. Our team of expert
          reviewers carefully watches and analyzes every movie to bring you a
          fair and balanced opinion that is both informative and entertaining.
          Whether you are a casual moviegoer or a hardcore cinephile, DaMaFe
          Movies has something for everyone. So sit back, grab some popcorn, and
          let us guide you through the wonderful world of cinema. Join us now
          and discover your next favorite movie!
        </p>
      </div>
      <MovieDisplay />
    </>
  )
}
