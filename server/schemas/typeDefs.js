const typeDefs = `
  type User {
    _id: ID!
    name: String!
  }

  type Recipe {
    _id: ID!
    name: String!
    ingredients: String!
    cook_time: String!
    rating: Int
  }

  type Query {
    users: [User]
    recipes: [Recipe]
  }

  type Mutation {
    createRecipe(ingredients: String!, cook_time: String!): Recipe
  }
`

module.exports = typeDefs
