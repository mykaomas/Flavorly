import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      _id
      name
    }
  }
}
`

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
    }
  }
}
`

export const ADD_FAVORITE = gql`
  mutation addFavorite($userId: ID!, $_id: ID!, $cook_time: Int!, $difficulty: Int!, $ingredients: String!, $name: String!, $rating: Int!) {
    addFavorite(userId: $userId, _id: $_id, cook_time: $cook_time, difficulty: $difficulty, ingredients: $ingredients, name: $name, rating: $rating) {
      _id
    }
  } 
`

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($userId: ID!, $recipeId: String!) {
    removeFavorite(userId: $userId, recipeId: $recipeId) {
      _id
    }
  } 
`
