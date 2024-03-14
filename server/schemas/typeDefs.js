const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String!
    favorites: [Recipe]
  }

  type Recipe {
    _id: ID!
    name: String
    ingredients: String
    cook_time: Int
    rating: Int
    difficulty: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    recipes: [Recipe]
    filteredRecipes: [Recipe]
  }

  type Mutation {
    createRecipe(ingredients: String!, cook_time: String!): Recipe
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(userId: String!, name: String!, cook_time: Int!, difficulty: Int!, ingredients: String!, rating: Int!): User
    removeFavorite(userId: String!, recipeName: String!): User
  }
`

module.exports = typeDefs
