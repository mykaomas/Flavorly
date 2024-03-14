const { Schema, model } = require('mongoose')

const recipeSchema = new Schema({
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
  }
})

const Recipe = model('Recipe', recipeSchema)

module.exports = Recipe
