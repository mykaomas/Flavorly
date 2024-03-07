const typeDefs = `
  type User {
    _id: ID!
    name: String!
  }

  type Recipe {
    _id: ID!
    ingredients: String!
    cook_time: String!
  }

  type Query {
    users: [User]
    recipes(_id: ID): [Recipe]
  }

  type Mutation {
    createRecipe(ingredients: String!, cook_time: String!): Recipe
  }
`

module.exports = typeDefs
