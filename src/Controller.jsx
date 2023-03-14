import React, { createContext, useContext, useEffect, useState } from 'react'
const ControllerContext = createContext({})

export function ProvideController({ children }) {
  const provider = useHook()
  return (
    <ControllerContext.Provider value={provider}>
      {children}
    </ControllerContext.Provider>
  )
}

export const useController = () => {
  return useContext(ControllerContext)
}

function useHook() {
  const [movies, setMovies] = useState([])
  const API_KEY = '8ec77365'

  async function getMovie(searchTerm) {
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

  useEffect(() => {
    const searchTerms = [
      'Ant-man and the wasp: quantumania',
      'Die Hard',
      'Avatar 3',
      'Cocaine Bear',
    ]
    searchTerms.forEach((searchTerm) => {
      getMovie(searchTerm)
    })
  }, [])

  return {
    movies,
    setMovies,
    getMovie,
  }
}
