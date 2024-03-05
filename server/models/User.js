const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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
