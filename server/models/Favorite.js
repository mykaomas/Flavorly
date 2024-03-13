const { Schema } = require('mongoose')

const favoriteSchema = new Schema({
  recipeId: {
    type: String,
    required: true,
  }
})

module.exports = favoriteSchema