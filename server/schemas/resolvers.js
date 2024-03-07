const { User, Recipe } = require('../models')

const resolvers = {
  Query: {
    users: async () => {
      return User.find({})
    },
    recipes: async (parent, { _id }) => {
      const params = _id ? { _id } : {}
      return Recipe.find(params);
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
