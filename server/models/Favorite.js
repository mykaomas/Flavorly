const { Schema } = require('mongoose')
const reviewSchema = require('./Review')

const favoriteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true,
  },
  cook_time: {
    type: Number,
    required: true,
  },
  directions: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  reviews: [reviewSchema]
})

module.exports = favoriteSchema