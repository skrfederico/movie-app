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

  console.log(movie)

  return (
    <div>
      <div>
        {movie && (
          <>
            <h1>{movie.Title}</h1>
            <h4>Rated {movie.Rated}</h4>
            <h4>{movie.Runtime}</h4>
            <h4>{movie.Released}</h4>

            <img src={movie.Poster} />
            <h4>{movie.Actors}</h4>
            <h4>Box Office: {movie.BoxOffice}</h4>
            <h4>{movie.Genre}</h4>
            <p>{movie.Plot}</p>
          </>
        )}
      </div>
      <div>
        <ReviewForm createReview={createReview} />
        {reviews.map((review, i) => {
          return <Review key={i} review={review} />
        })}
      </div>
    </div>
  )
}

// {Title: 'Ant-Man and the Wasp: Quantumania', Year: '2023', Rated: 'PG-13', Released: '17 Feb 2023', Runtime: '124 min', …}Actors: "Paul Rudd, Evangeline Lilly, Michael Douglas"Awards: "1 nomination"BoxOffice: "$190,205,913"Country: "United States, Australia, Canada"DVD: "N/A"Director: "Peyton Reed"Genre: "Action, Adventure, Comedy"Language: "English"Metascore: "48"Plot: "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible."Poster: "https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_SX300.jpg"Production: "N/A"Rated: "PG-13"Ratings: [{…}]Released: "17 Feb 2023"Response: "True"Runtime: "124 min"Title: "Ant-Man and the Wasp: Quantumania"Type: "movie"Website: "N/A"Writer: "Jeff Loveness, Stan Lee, Larry Lieber"Year: "2023"imdbID: "tt10954600"imdbRating: "N/A"imdbVotes: "82,062"[[Prototype]]: Object
