import List from "../components/List"
import Ingredients from "../components/Ingredients"
import '../pagescss/recipes.css';

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
  const [searchInput, setSearchInput] = useState('')
  
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
    const cookTime = document.querySelector("select[name=cookTime]").value
    recipes = recipes.filter(function (recipe) {return recipe.cook_time <= cookTime})
    
    // Difficulty
    const difficulty = document.querySelector("select[name=difficulty]").value
    recipes = recipes.filter(function (recipe) {return recipe.difficulty <= difficulty})
    
    // Rating
    const rating = document.querySelector("select[name=rating]").value
    recipes = recipes.filter(function (recipe) {return recipe.rating >= rating})
    
    console.log(cookTime, difficulty, rating)
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
          <div>
            <button className="filter-btn" onClick={toggleFilter}>Filter</button>
            {filterToggle ? (
              <div className="filter-container">
                <h5>Ingredients:</h5>
                <Ingredients ingredients={ingredients}/>

                <h5>Cook Time: </h5>
                <select name="cookTime">
                  <option value='10'>Less than 10 mins</option>
                  <option value='20'>Less than 20 mins</option>
                  <option value='30'>Less than 30 mins</option>
                  <option value='>30'>More than 30 mins</option>
                </select>

                <h5>Difficulty:</h5>
                <select name='difficulty'>
                  <option value='1'>Easy</option>
                  <option value='2'>Medium</option>
                  <option value='3'>Hard</option>
                </select>

                <h5>Rating:</h5>
                <select name='rating' defaultValue={5}>
                  <option value={1}>⭐</option>
                  <option value={2}>⭐⭐</option>
                  <option value={3}>⭐⭐⭐</option>
                  <option value={4}>⭐⭐⭐⭐</option>
                  <option value={5}>⭐⭐⭐⭐⭐</option>
                </select>

                <button onClick={filterSearch}>See Results</button>
              </div>
            ) : (
              <></>
            )}
            <div className='search-list'>
              <List recipes={recipes} newRecipes={newRecipes} page='Home'/>
            </div>
          </div>
        )}
    </>
  )
}

export default SearchList
