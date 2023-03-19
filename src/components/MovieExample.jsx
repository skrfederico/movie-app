import { useEffect } from 'react'
import { useController } from '../Controller'
import ReviewForm from '../components/ReviewForm'
import Review from '../components/Review'

export default function MovieExample(user) {
  const {
    getAllReviews,
    reviews,
    review,
    getMoviePage,
    movies,
    setMovie,
    data,
    movie
  } = useController()

  useEffect(() => {
    async function grabMovie() {
      await setMovie(getMoviePage(review.movie))
    }
    grabMovie()
    getAllReviews()
  }, [])

  return (
    <>
      <div className="flex" key="{i}">
        <div className="w-2/4">
          <Review review={review} user={user} movie={movie} />
        </div>
        <div className="w-1/4">
          <h1>Title goes here</h1>
          {movie.Title}
        </div>
        <div className="w-1/4">
          <h1>Movie poster goes here</h1>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    </>
  )
}
