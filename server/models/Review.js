const { Schema } = require('mongoose')

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true
  }
})

module.exports = reviewSchema
