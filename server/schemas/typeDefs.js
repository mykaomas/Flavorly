const typeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String!
    favorites: [Favorites]
    profilePic: String
  }

  type Favorites {
    _id: ID!
    name: String!
    ingredients: String!
    cook_time: Int!
    rating: Int
    difficulty: Int
  }

  type Recipe {
    _id: ID!
    name: String!
    ingredients: String!
    cook_time: Int!
    rating: Int
    difficulty: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String): User
    recipes: [Recipe]
    filteredRecipes: [Recipe]
  }

  type Mutation {
    createRecipe(ingredients: String!, cook_time: String!): Recipe
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(userId: ID!, _id: ID!, cook_time: Int!, difficulty: Int!, ingredients: String!, name: String!, rating: Int!): User
    removeFavorite(userId: ID!, _id: ID!): User
  }
`

module.exports = typeDefs
