import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query Recipes {
    recipes {
      _id
      ingredients
      cook_time
      name
      rating
      difficulty
    }
  }
`

export const QUERY_USER = gql`
query User($email: String) {
  user(email: $email) {
    email
  }
}
`
