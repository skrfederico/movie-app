const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: String },
  moviePoster: { type: String },
  moviePageLink: { type: String },
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
