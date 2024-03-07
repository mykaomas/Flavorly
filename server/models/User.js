const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  expertise: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  }
})

const User = model('User', userSchema)

module.exports = User
