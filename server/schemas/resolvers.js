const { User, Recipe } = require('../models')

const resolvers = {
  Query: {
    users: async () => {
      return User.find({})
    },
    recipes: async () => {
      return Recipe.find();
    },
  },
  Mutation: {
    createRecipe: async (parent, args) => {
      const recipe = await Recipe.create(args)
      return recipe
    }
  }
}

module.exports = resolvers
