import List from "../components/List"
import Ingredients from "../components/Ingredients"

import { useState } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_RECIPES } from "../utils/queries"

function SearchList() {
  const { loading, data } = useQuery(QUERY_RECIPES)
  const recipes = data?.recipes
  const [filter, setFilter] = useState(false)
  const [ingredients, setIngredients] = useState([])

  const toggleFilter = () => {
    if (filter) {
      setFilter(false)
    } else {
      setFilter(true)
    }
  }

  if (!loading) {
    // Ingredients
    for (let i = 0; i < recipes.length; i++) {
      const recipeIngredients = recipes[i].ingredients.split(' ')
      for (let i = 0; i < recipeIngredients.length; i++) {
        if (!ingredients.includes(recipeIngredients[i])) {
          ingredients.push(recipeIngredients[i])
          setIngredients(ingredients)
        }
      }
    }
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
        ) : (
          <div>
            <button className="filter-btn" onClick={toggleFilter}>Filter</button>
            {filter ? (
              <div>
                <form>
                  <h5>Ingredients:</h5>
                  <Ingredients ingredients={ingredients}/>

                  <h5>Cook Time:</h5>
                  <input type="checkbox"/>Less Than 10 mins
                  <input type="checkbox"/>10-20 mins
                  <input type="checkbox"/>20-30 mins
                  <input type="checkbox"/>More Than 30 mins

                  <h5>Difficulty:</h5>
                  <input type="checkbox"/>Easy
                  <input type="checkbox"/>Medium
                  <input type="checkbox"/>Hard

                  <h5>Rating:</h5>
                  <input type="checkbox"/>⭐
                  <input type="checkbox"/>⭐⭐
                  <input type="checkbox"/>⭐⭐⭐
                  <input type="checkbox"/>⭐⭐⭐⭐
                  <input type="checkbox"/>⭐⭐⭐⭐⭐
                </form>
              </div>
            ) : (
              <></>
            )}
            <List recipes={recipes}/>
          </div>
        )}
    </>
  )
}

export default SearchList
