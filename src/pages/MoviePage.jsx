import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useController } from '../Controller'
import ReviewForm from '../components/ReviewForm'
import Review from '../components/Review'

export function MoviePage() {
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
    <div className="flex flex-col gap-12 mt-32 mr-64 ml-64 items-center">
      {movie && (
        <>
          <div>
            <div className="flex gap-12">
              <img
                className="object-cover h-3/6 min-w-min"
                src={movie.Poster}
              />
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-semibold italic">{movie.Title}</h1>
                <div className="flex gap-2 text-base">
                  <h4 className="font-semibold">Actors:</h4>
                  <p>{movie.Actors}</p>
                </div>
                <div className="flex gap-2 text-base">
                  <h4 className="font-semibold">Director:</h4>
                  <p>{movie.Director}</p>
                </div>
                <div className="flex gap-2 text-base">
                  <h4 className="font-semibold">Genre:</h4>
                  <p>{movie.Genre}</p>
                </div>
                <p className="italic text-lg">{movie.Plot}</p>
                <div className="gap-2">
                  <h4 className="font-semibold">Runtime:</h4>
                  <p>{movie.Runtime}</p>
                </div>

                {movie?.Ratings?.map((rating, index) => (
                  <div
                    key={index}
                    className="flex text-base border rounded p-2"
                  >
                    <div style={{ marginRight: '10px' }}>{rating.Source}</div>
                    <div>{rating.Value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col-reverse items-center w-full">
              {reviews && reviews.length > 0 && (
                <>
                  {reviews.map((review, i) => {
                    if (review.movie === movie.imdbID)
                      return <Review key={i} review={review} />
                  })}
                </>
              )}
            </div>
            <ReviewForm createReview={createReview} movie={movie} />
          </div>
        </>
      )}
    </div>
  )
}

// {Title: 'Ant-Man and the Wasp: Quantumania', Year: '2023', Rated: 'PG-13', Released: '17 Feb 2023', Runtime: '124 min', …}Actors: "Paul Rudd, Evangeline Lilly, Michael Douglas"Awards: "1 nomination"BoxOffice: "$190,205,913"Country: "United States, Australia, Canada"DVD: "N/A"Director: "Peyton Reed"Genre: "Action, Adventure, Comedy"Language: "English"Metascore: "48"Plot: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible."Poster: "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_SX300.jpg"Production: "N/A"Rated: "PG-13"Ratings: [{…}]Released: "17 Feb 2023"Response: "True"Runtime: "124 min"Title: "Ant-Man and the Wasp: Quantumania"Type: "movie"Website: "N/A"Writer: "Jeff Loveness, Stan Lee, Larry Lieber"Year: "2023"imdbID: "tt10954600"imdbRating: "N/A"imdbVotes: "82,062"[[Prototype]]: Object
