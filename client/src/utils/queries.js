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

export const QUERY_FAVORITE_RECIPES = gql`
  query Favorites($userId: ID!) {
    user(userId: $userId) {
      favorites {
        _id
        ingredients
        cook_time
        name
        rating
        difficulty
      }
    }
  }
`

