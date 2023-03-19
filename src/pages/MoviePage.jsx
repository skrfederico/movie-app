import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useController } from '../Controller'
import ReviewForm from '../components/ReviewForm'
import Review from '../components/Review'

import { moviePageClasses } from '../appClasses'

export function MoviePage({ user }) {
  const {
    getMoviePage,
    movie,
    setMovie,
    createReview,
    getAllReviews,
    reviews,
  } = useController()

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
            <ReviewForm createReview={createReview} movie={movie} user={user} />
          </div>
        </>
      )}
    </div>
  )
}

// {Title: 'Ant-Man and the Wasp: Quantumania', Year: '2023', Rated: 'PG-13', Released: '17 Feb 2023', Runtime: '124 min', …}Actors: "Paul Rudd, Evangeline Lilly, Michael Douglas"Awards: "1 nomination"BoxOffice: "$190,205,913"Country: "United States, Australia, Canada"DVD: "N/A"Director: "Peyton Reed"Genre: "Action, Adventure, Comedy"Language: "English"Metascore: "48"Plot: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible."Poster: "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_SX300.jpg"Production: "N/A"Rated: "PG-13"Ratings: [{…}]Released: "17 Feb 2023"Response: "True"Runtime: "124 min"Title: "Ant-Man and the Wasp: Quantumania"Type: "movie"Website: "N/A"Writer: "Jeff Loveness, Stan Lee, Larry Lieber"Year: "2023"imdbID: "tt10954600"imdbRating: "N/A"imdbVotes: "82,062"[[Prototype]]: Object
