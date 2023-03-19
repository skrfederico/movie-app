const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String },
  id: { type: String, required: true },
  rating: { type: String },
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
