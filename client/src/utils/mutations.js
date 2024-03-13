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
  mutation addFavorite($userId: String!, $recipeId: String!) {
    addFavorite(userId: $userId, recipeId: $recipeId) {
      _id
    }
  } 
`

export const REMOVE_FAVORITE = gql`
  mutation removeFavorite($userId: String!, $recipeId: String!) {
    removeFavorite(userId: $userId, recipeId: $recipeId) {
      _id
    }
  } 
`
