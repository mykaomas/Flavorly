import List from "../components/List"
import Ingredients from "../components/Ingredients"
import '../pagescss/recipes.css';

import { useState } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_RECIPES } from "../utils/queries"

function SearchList() {
  const [newRecipes, setNewRecipes] = useState([])
  const [filterToggle, setFilterToggle] = useState(false)
  const [ingredients, setIngredients] = useState([])
  const [filterIngredients, setFilterIngredients] = useState([])
  const [searchInput, setSearchInput] = useState('')
  
  const { loading, data } = useQuery(QUERY_RECIPES)
  let recipes
  
  const toggleFilter = () => {
    if (filterToggle) {
      setFilterToggle(false)
    } else {
      setFilterToggle(true)
    }
  }
  
  if (!loading) {
    recipes = data?.recipes

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
    // Search
    recipes = recipes.filter(function (recipe) {
      if (searchInput === '') {
        return recipe
      } else if (recipe.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return recipe
      }
    })

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
      <div id="searchbar">
        <input id="search-input" type="text" onChange={(e) => setSearchInput(e.target.value)}/>
        <button className="search-btn" onClick={filterSearch}>Search</button>
      </div>
      
      {loading ? (
        <div>Loading...</div>
        ) : (
          <div className="filter">
            <button className="filter-btn" onClick={toggleFilter}>Filter</button>
            {filterToggle ? (
              <div>
                <h5>Ingredients:</h5>
                <div className="ingredient-list">
                  <Ingredients ingredients={ingredients}/>
                </div>

                <h5>Cook Time: </h5>
                <p>Please Select One</p>
                <input type="checkbox" name="cookTime" value="10"/><span>Less Than 10 mins</span>
                <input type="checkbox" name="cookTime" value="20"/><span>Less Than 20 mins</span>
                <input type="checkbox" name="cookTime" value="30"/><span>Less Than 30 mins</span>
                <input type="checkbox" name="cookTime" value=">30"/><span>More Than 30 mins</span>

                <h5>Difficulty:</h5>
                <p>Please Select One</p>
                <input type="checkbox" name="difficulty" value="1"/><span>Easy</span>
                <input type="checkbox" name="difficulty" value="2"/><span>Medium</span>
                <input type="checkbox" name="difficulty" value="3"/><span>Hard</span>

                <h5>Rating:</h5>
                <p>Please Select One</p>
                <input type="checkbox" name="rating" value={1}/><span>⭐</span>
                <input type="checkbox" name="rating" value={2}/><span>⭐⭐</span>
                <input type="checkbox" name="rating" value={3}/><span>⭐⭐⭐</span>
                <input type="checkbox" name="rating" value={4}/><span>⭐⭐⭐⭐</span>
                <input type="checkbox" name="rating" value={5}/><span>⭐⭐⭐⭐⭐</span>

                <div>
                  <button className="results-btn" onClick={filterSearch}>See Results</button>
                </div>
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
