import React, { createContext, useContext, useEffect, useState } from 'react'
import reviewService from './services/reviewService'
import { useLocation } from 'react-router-dom'
import movieService from './services/movieService'

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
  const [movie, setMovie] = useState(null)

  const API_KEY = '8ec77365'

  async function getMoviePage(searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      )
      const data = await response.json()
      setMovie(data)
      localStorage.setItem('moviePoster', data.Poster) // Store the URL in local storage
    } catch (error) {
      console.error(error)
    }
  }

  // Create
  async function getMovie(searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      )
      const data = await response.json()
      const newMovie = await movieService.getMovie({
        title: data.Title,
        poster: data.Poster,
        id: data.imdbID,
        rating: data.Rated,
      })
      setMovies((oldMovies) => [...oldMovies, newMovie])
    } catch (error) {
      console.error(error)
    }
  }

  async function getAllMovies() {
    try {
      const results = await movieService.getAllMovies()
      setMovies([...results])
    } catch (error) {
      console.error(error)
    }
  }

  async function updateMovie(_id, searchTerm) {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${searchTerm}&apikey=${API_KEY}`
      )
      const data = await response.json()
      const updatedMovie = await movieService.getMovie({
        title: data.Title,
        poster: data.Poster,
        id: data.imdbID,
        rating: data.Rated,
      })
      const results = movieService.updateMovie(_id, updatedMovie)
      return results
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteMovie(id) {
    try {
      await movieService.deleteMovie(id)
      const indexToRemove = movies.findIndex((movie) => movie._id === id)
      if (indexToRemove) {
        const moviesCopy = [...movies]
        moviesCopy.splice(indexToRemove, 1)
        setMovies([...moviesCopy])
      }
    } catch (error) {
      console.error(error)
    }
  }

  const [reviews, setReviews] = useState([])
  const location = useLocation()
  const moviePageLink = location.pathname

  async function createReview(review, movie, user) {
    try {
      const moviePoster = localStorage.getItem('moviePoster') // Retrieve the URL from local storage
      const newReview = await reviewService.createReview(
        review,
        movie,
        moviePoster, // Add the URL to the movie object
        user._id,
        moviePageLink
      )
      console.log(newReview)
      console.log(user._id)
      setReviews((oldReviews) => [...oldReviews, newReview])
      console.log(reviews)
    } catch (error) {
      console.error(error)
    }
  }

  async function getAllReviews() {
    try {
      const results = await reviewService.getAllReviews()
      setReviews([...results])
    } catch (error) {
      console.error(error)
    }
  }

  async function updateReview(id, review, user) {
    try {
      const results = await reviewService.updateReview(id, review, user)
      return results
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteReview(id) {
    try {
      await reviewService.deleteReview(id)
      const indexToRemove = reviews.findIndex((review) => review._id === id)
      if (indexToRemove) {
        const reviewCopy = [...reviews]
        reviewCopy.splice(indexToRemove, 1)
        setReviews([...reviewCopy])
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      await getAllMovies()
    }
    fetchMovies()
  }, [])

  return {
    movies,
    setMovies,
    getMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    getMoviePage,
    setMovie,
    movie,
    createReview,
    reviews,
    getAllReviews,
    updateReview,
    setReviews,
    deleteReview,
    moviePageLink
  }
}
