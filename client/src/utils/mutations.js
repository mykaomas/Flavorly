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
  mutation addFavorite($userId: String!, $name: String!, $cookTime: Int!, $difficulty: Int!, $ingredients: String!, $rating: Int!) {
    addFavorite(userId: $userId, name: $name, cook_time: $cookTime, difficulty: $difficulty, ingredients: $ingredients, rating: $rating) {
      _id
    }
  } 
`

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($userId: String!, $recipeName: String!) {
    removeFavorite(userId: $userId, recipeName: $recipeName) {
      _id
    }
  } 
`
