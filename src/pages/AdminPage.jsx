import { useController } from '../Controller'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    async function fetchTodos() {
      await getAllMovies()
      setIsLoading(false)
    }
    fetchTodos()
  }, [isLoading])

  return (
    <div className="flex flex-col items-center mx-auto gap-4 py-12 lg:py-8 lg:my-16">
      <h1 className="text-3xl font-semibold mb-4">Movie Selection</h1>
      <p className="text-md font-semibold text-slate-400">Add a New Movie</p>
      <input
        className="border p-2 mb-8  bg-slate-800 border-slate-700 md:w-1/2 xl:w-1/5"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          e.key === 'Enter' && handleSubmit()
        }}
      />
      <h4 className="text-2xl font-semibold text-slate-400">Current movies:</h4>
      <div className="flex h-full flex-wrap justify-center w-screen gap-8">
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
  const { deleteMovie, updateMovie } = useController()
  // const [editMovie, setEditMovie] = useState('')
  // const [editing, setEditing] = useState(false)

  // const handleInputChange = (event) => {
  //   setEditMovie(event.target.value)
  // }

  // const handleUpdate = async (event) => {
  //   event.preventDefault()
  //   console.log(movie._id)
  //   await updateMovie(movie._id, editMovie)
  //   setEditing(false)
  // }

  const handleDelete = async (event) => {
    event.preventDefault()
    deleteMovie(movie._id)
  }
  return (
    <div
      className="flex flex-col border bg-slate-800 border-slate-700 rounded-lg items-center p-6 gap-2 justify-between drop-shadow-lg text-slate-400"
      style={{ width: '400px' }}
    >
      <div className="flex justify-between w-full">
        {/* <span className="cursor-pointer" onClick={() => setEditing(!editing)}>
          Edit
        </span> */}
        <span className="cursor-pointer" onClick={handleDelete}>
          &#10005;
        </span>
      </div>
      <Link
        to={`/${movie.title}`}
        className="group flex flex-col justify-center items-center h-full w-full"
      >
        <img
          className="object-contain w-full rounded-3xl group-hover:brightness-50 border border-slate-700"
          src={movie.poster}
          alt={movie.title}
        />
      </Link>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-end items-start px-2">
          {/* {editing ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="searchterm"
                onChange={handleInputChange}
                value={editMovie}
              />
              <button type="submit">Edit Movie</button>
            </form>
          ) : (
            )} */}
          <p className="text-2xl text-white font-semibold">{movie.title}</p>
          <p>({movie.rating})</p>
        </div>
      </div>
    </div>
  )
}

const Loading = () => {
  return <></>
}
