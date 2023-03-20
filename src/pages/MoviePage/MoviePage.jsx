import { useController } from '../../Controller'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ReviewForm from '../../components/ReviewForm/ReviewForm'
import Review from '../../components/Review/Review'

import moviePageClasses from './moviePageClasses'

export default function MoviePage({ user }) {
  const { getMoviePage, movie, setMovie, getAllReviews, reviews } =
    useController()

  const params = useParams()
  const id = params.id

  useEffect(() => {
    async function grabMovie() {
      await setMovie(getMoviePage(id))
    }
    grabMovie()
    getAllReviews()
  }, [])

  return (
    <div className={moviePageClasses.container}>
      {movie && (
        <>
          <div className={moviePageClasses.imageContainer}>
            <div className={moviePageClasses.imageFlexContainer}>
              <img className={moviePageClasses.image} src={movie.Poster} />
              <div className="flex flex-col gap-6 ">
                <h1 className={moviePageClasses.title}>{movie.Title}</h1>
                <div className={moviePageClasses.div}>
                  <h4 className="font-semibold ">Actors:</h4>
                  <p>{movie.Actors}</p>
                </div>
                <div className={moviePageClasses.div}>
                  <h4 className="font-semibold">Director:</h4>
                  <p>{movie.Director}</p>
                </div>
                <div className={moviePageClasses.div}>
                  <h4 className="font-semibold">Genre:</h4>
                  <p>{movie.Genre}</p>
                </div>
                <p className={moviePageClasses.plot}>{movie.Plot}</p>
                <div className={moviePageClasses.div}>
                  <h4 className="font-semibold ">Runtime:</h4>
                  <p>{movie.Runtime}</p>
                </div>

                <div className="flex flex-col my-16">
                  {movie?.Ratings?.map((rating, index) => (
                    <div key={index}>
                      <div className={moviePageClasses.ratingContainer}>
                        <div className="font-semibold">{rating.Source}</div>
                        <div>{rating.Value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-2 w-full border-slate-800 shadow-2xl" />
          <h2 className={moviePageClasses.reviewTitle}>Reviews</h2>

          <div className={moviePageClasses.reviewsContainer}>
            <div className={moviePageClasses.reviewListContainer}>
              {reviews && reviews.length > 0 && (
                <>
                  {reviews.map((review, i) => {
                    if (review.movie === movie.imdbID)
                      return <Review key={i} review={review} user={user} />
                  })}
                </>
              )}
            </div>
            <ReviewForm movie={movie} user={user} />
          </div>
        </>
      )}
    </div>
  )
}
