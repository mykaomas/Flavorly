import List from "../components/List"
import Ingredients from "../components/Ingredients"

import { useState } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_RECIPES } from "../utils/queries"

function SearchList() {
  const { loading, data } = useQuery(QUERY_RECIPES)
  let recipes = data?.recipes
  const [newRecipes, setNewRecipes] = useState([])
  const [filterToggle, setFilterToggle] = useState(false)
  const [ingredients, setIngredients] = useState([])
  const [filterIngredients, setFilterIngredients] = useState([])
  
  const toggleFilter = () => {
    if (filterToggle) {
      setFilterToggle(false)
    } else {
      setFilterToggle(true)
    }
  }
  
  if (!loading) {
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

  const filterSearch = () => {
    // Ingredients
    document.querySelectorAll("input[name=ingredient]:checked").forEach((ingredient) => {
      filterIngredients.push(ingredient.value)
      setFilterIngredients(filterIngredients)
    })

    recipes = recipes.filter((recipe) => filterIngredients.every(function (i) {return recipe.ingredients.includes(i)}))

    // Cook Time
    const cookTime = document.querySelectorAll("input[name=cookTime]:checked")

    if (cookTime.length > 1) {
      alert("Please select only one cook time")
    } else if (cookTime.length === 1) {
      recipes = recipes.filter(function (recipe) {return recipe.cook_time <= cookTime[0].value})
    }
    
    // Difficulty
    const difficulty = document.querySelectorAll("input[name=difficulty]:checked")
    if (difficulty.length > 1) {
      alert("Please select only one difficulty")
    } else if (difficulty.length === 1) {
      recipes = recipes.filter(function (recipe) {return recipe.difficulty <= difficulty[0].value})
    }
    
    // Rating
    const rating = document.querySelectorAll("input[name=rating]:checked")
    
    if (rating.length > 1) {
      alert("Please select only one rating")
    } else if (rating.length === 1) {
      recipes = recipes.filter(function (recipe) {return recipe.rating >= rating[0].value})
    }
    
    setNewRecipes(recipes)

    if (recipes.length === 0) {
      alert("No recipes match that criteria")
    }

    setFilterIngredients([])
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
        ) : (
          <div>
            <button className="filter-btn" onClick={toggleFilter}>Filter</button>
            {filterToggle ? (
              <div>
                <h5>Ingredients:</h5>
                <Ingredients ingredients={ingredients}/>

                <h5>Cook Time: </h5>
                <p>Please Select One</p>
                <input type="checkbox" name="cookTime" value="10"/>Less Than 10 mins
                <input type="checkbox" name="cookTime" value="20"/>Less Than 20 mins
                <input type="checkbox" name="cookTime" value="30"/>Less Than 30 mins
                <input type="checkbox" name="cookTime" value=">30"/>More Than 30 mins

                <h5>Difficulty:</h5>
                <p>Please Select One</p>
                <input type="checkbox" name="difficulty" value="1"/>Easy
                <input type="checkbox" name="difficulty" value="2"/>Medium
                <input type="checkbox" name="difficulty" value="3"/>Hard

                <h5>Rating:</h5>
                <p>Please Select One</p>
                <input type="checkbox" name="rating" value={1}/>⭐
                <input type="checkbox" name="rating" value={2}/>⭐⭐
                <input type="checkbox" name="rating" value={3}/>⭐⭐⭐
                <input type="checkbox" name="rating" value={4}/>⭐⭐⭐⭐
                <input type="checkbox" name="rating" value={5}/>⭐⭐⭐⭐⭐

                <button onClick={filterSearch}>See Results</button>
              </div>
            ) : (
              <></>
            )}
            <List recipes={recipes} newRecipes={newRecipes} />
          </div>
        )}
    </>
  )
}

export default SearchList
