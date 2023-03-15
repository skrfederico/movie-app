const express = require('express')
const router = express.Router()

/**
 * Models
 */
const Review = require('../models/reviews')

// Read all
router.get('/', async (req, res) => {
  try {
    const query = await Review.find({})
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})

//new update
router.put('/:id', async (req, res) => {
  const { id } = req.params
  console.log('Received PUT request for Review with ID', id)
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    console.log('Successfully updated review with ID', id)
    return res.json(updatedReview)
  } catch (error) {
    console.log('Error updating review with ID', id, ':', error)
    res.status(500).json({ error })
  }
})
// Create
router.post('/', async (req, res) => {
  try {
    const createdReview = await Review.create({ ...req.body })
    return res.json(createdReview)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const deletedReview = await Review.findByIdAndDelete(id)
    return res.json(deletedReview)
  } catch (error) {
    res.status(500).json({ error })
  }
})

// read one
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const query = await Review.findOne({ _id: id })
    return res.json(query)
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
