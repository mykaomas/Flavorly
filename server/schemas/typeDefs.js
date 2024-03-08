const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
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

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createRecipe(ingredients: String!, cook_time: String!): Recipe

    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`

module.exports = typeDefs
