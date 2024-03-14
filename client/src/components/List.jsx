import * as React from 'react';
import  AuthService  from '../utils/auth';
import { useMutation } from '@apollo/client'
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../utils/mutations'

function List({ recipes, newRecipes }) {
    const [addFavorite, { error }] = useMutation(ADD_FAVORITE)
    const [removeFavorite, { err }] = useMutation(REMOVE_FAVORITE)

    const handleChange = async (recipeId, e) => {
        if (!e.target.checked) {
            let singleRecipe
            for (let i = 0; i < recipes.length; i++) {
                if (recipes[i]._id == recipeId) {
                    singleRecipe = recipes[i]
                }
            }
            let token = AuthService.getUser();
            try {
                const { data } = await removeFavorite({
                    variables: {
                        userId: token.data._id,
                        recipeName: singleRecipe.name
                    }
                })
            } catch (err) {
                console.log(err)
            }
        } else if (e.target.checked) {
            let singleRecipe
            for (let i = 0; i < recipes.length; i++) {
                if (recipes[i]._id == recipeId) {
                    singleRecipe = recipes[i]
                }
            }
            let token = AuthService.getUser();
            try {
                const { data } = await addFavorite({
                    variables: {
                        userId: token.data._id,
                        name: singleRecipe.name,
                        cookTime: singleRecipe.cook_time,
                        difficulty: singleRecipe.difficulty,
                        ingredients: singleRecipe.ingredients,
                        rating: singleRecipe.rating,
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    if (newRecipes.length > 0) {
        recipes = newRecipes
    }
    
    return (
        <div className="search-list">
            {recipes.map((recipe, index) => {
                let rating = ""
                for (let i = 0; i < recipe.rating; i++) {
                    rating += "⭐"
                }
                
                return (
                <div className="search-card" key={recipe._id}>
                    <h1 className="search-title">{recipe.name} <input key={recipe._id} value={index} type="checkbox" onChange={(e) => handleChange(recipe._id, e)}/></h1>
                    <div className="search-content">
                        <p>Cook Time: {recipe.cook_time} mins</p>
                        <p>Rating: {rating}</p>
                        <p>Ingredients: {recipe.ingredients}</p>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default List
