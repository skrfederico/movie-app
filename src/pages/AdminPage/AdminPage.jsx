import { useController } from '../../Controller'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import adminPageClasses from './adminPageClasses'

export default function AdminPage({}) {
  const { getMovie, getAllMovies, movies } = useController()
  const [input, setInput] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    await getMovie(input)
    setInput('')
  }

  useEffect(() => {
    async function fetchMovies() {
      await getAllMovies()
      setIsLoading(false)
    }
    fetchMovies()
  }, [isLoading])

  return (
    <div className={adminPageClasses.container}>
      <h1 className={adminPageClasses.heading}>Movie Selection</h1>
      <p className={adminPageClasses.addMovie}>Add a New Movie</p>
      <input
        className={adminPageClasses.input}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          e.key === 'Enter' && handleSubmit()
        }}
      />
      <h4 className={adminPageClasses.movieHeader}>Current movies:</h4>
      <div className={adminPageClasses.moviesContainer}>
        {movies.map((movie, i) => {
          {
            return movie ? <Loaded movie={movie} key={i} /> : <Loading />
          }
        })}
      </div>
    </div>
  )
}

const Loaded = ({ movie }) => {
  const { deleteMovie } = useController()

  const handleDelete = async (event) => {
    event.preventDefault()
    deleteMovie(movie._id)
  }

  return (
    <div
      className={adminPageClasses.moviesContainer2}
      style={{ width: '400px' }}
    >
      <div className={adminPageClasses.delete}>
        <span className="cursor-pointer" onClick={handleDelete}>
          &#10005;
        </span>
      </div>
      <Link to={`/${movie.title}`} className={adminPageClasses.link}>
        <img
          className={adminPageClasses.image}
          src={movie.poster}
          alt={movie.title}
        />
      </Link>
      <div className={adminPageClasses.infoContainer}>
        <div className={adminPageClasses.infoContainer2}>
          <p className={adminPageClasses.title}>{movie.title}</p>
          <p>({movie.rating})</p>
        </div>
      </div>
    </div>
  )
}

const Loading = () => {
  return <></>
}
