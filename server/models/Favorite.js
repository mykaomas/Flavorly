const { Schema } = require('mongoose')

const favoriteSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  recipeId: {
    type: String,
    required: true,
  },
})

module.exports = favoriteSchema