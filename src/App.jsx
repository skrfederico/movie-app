import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Form } from './components/Form'
import { MovieDisplay } from './components/MovieDisplay'
import { MoviePage } from './pages/MoviePage'
const API_KEY = '3c76e4d5'

function App() {
  const [movies, setMovies] = useState([])

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      )
      const data = await response.json()
      const newMovie = {
        title: data.Title,
        poster: data.Poster,
        id: data.imdbID,
      }
      setMovies((prevMovies) => [...prevMovies, newMovie])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <h1>DaMaFe movies</h1>
      <Form movieSearch={getMovie} />
      <MoviePage />
      {movies.length > 0 && <MovieDisplay movies={movies} />}
    </div>
  )
}

export default App
