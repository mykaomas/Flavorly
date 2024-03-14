const User = require('../models/User')
const { Recipe } = require('../models/Recipe')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({})
    },
    recipes: async () => {
      return Recipe.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
    }
  },
  Mutation: {
    createRecipe: async (parent, args) => {
      const recipe = await Recipe.create(args)
      return recipe
    },
    addUser: async (parent, { name, email, password}) => {
      const user = await User.create({ name, email, password })
      const token = signToken(user)
      return { token, user}
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw AuthenticationError
      }
      
      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw AuthenticationError
      }

      const token = signToken(user)
      return { token, user}
    },
    addFavorite: async (parent, { userId, name, cook_time, difficulty, ingredients, rating }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { favorites: { name, cook_time, difficulty, ingredients, rating } } },
        { new: true }
      )
    },
    removeFavorite: async (parent, { userId, recipeName }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favorites: { name: recipeName } } },
        { new: true }
      )
    },
  }
}

module.exports = resolvers
