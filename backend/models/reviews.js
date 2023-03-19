const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const reviewSchema = new mongoose.Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: String },
  moviePoster: { type: String },
  moviePageLink: { type: String }
})
// console.log(reviewSchema.createdAt)
// console.log('schema')

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
