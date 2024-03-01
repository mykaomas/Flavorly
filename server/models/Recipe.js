const { Schema, model } = require('mongoose')
const reviewSchema = require('./Review')

const recipeSchema = new Schema({
  ingredients: {
    type: String,
    required: true,
  },
  cook_time: {
    type: String,
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
  reviews: [reviewSchema]
})

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe
