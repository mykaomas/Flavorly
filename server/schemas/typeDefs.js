const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String!
  }

  type Recipe {
    _id: ID!
    name: String!
    ingredients: String!
    cook_time: String!
    rating: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    recipes: [Recipe]
  }

  type Mutation {
    createRecipe(ingredients: String!, cook_time: String!): Recipe

    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs
