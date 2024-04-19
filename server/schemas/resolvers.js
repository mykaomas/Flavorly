const { User, Recipe } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({})
    },
    user: async (parent, { email }) => {
      return User.findOne({ email })
    },
    recipes: async () => {
      return Recipe.find();
    },
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
    addFavorite: async (parent, { userId, recipeId }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { favorites: { recipeId } } },
        { new: true }
      )
    },
    removeFavorite: async (parent, { userId, recipeId }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { favorites: { recipeId: recipeId } } },
        { new: true }
      )
    },
  }
}

module.exports = resolvers
