const express = require('express')
const router = express.Router()

const Movie = require('../../models/movies')

// Get all
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({})
    return res.json(movies)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// // Update
// router.put('/:id', async (req, res) => {
//   const { id } = req.params
//   try {
//     const updatedMovie = await Movie.findByIdAndUpdate(id, { ...req.body })
//     return res.json(updatedMovie)
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

// Create
router.post('/', async (req, res) => {
  try {
    const createdMovie = Movie.create({ ...req.body })
    return res.json(createdMovie)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id)
    return res.json(deletedMovie)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Get one
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const Movie = await Movie.findOne({ _id: id })
    return res.json(Movie)
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
