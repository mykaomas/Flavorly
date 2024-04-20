import * as React from 'react';
import  AuthService  from '../utils/auth';
import { useMutation } from '@apollo/client'
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../utils/mutations'

function List({ recipes, newRecipes, page }) {
    const [addFavorite, { error }] = useMutation(ADD_FAVORITE)
    const [removeFavorite, { err }] = useMutation(REMOVE_FAVORITE)

    const handleChange = async (recipe) => {
        if (!true) {
            let token = AuthService.getUser();
            try {
                const { data } = await removeFavorite({
                    variables: {
                        userId: token.data._id,
                        recipeId: recipe._id
                    }
                })
            } catch (err) {
                console.log(err)
            }
        } else if (true) {
            let token = AuthService.getUser();
            try {
                const { data } = await addFavorite({
                    variables: {
                        userId: token.data._id,
                        ...recipe
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    if (newRecipes && newRecipes.length > 0) {
        recipes = newRecipes
    }
    
    return (
        <div className="search-list">
            {recipes.map((recipe) => {
                let rating = ""
                for (let i = 0; i < recipe.rating; i++) {
                    rating += "⭐"
                }
                
                return (
                <div className="search-card" key={recipe._id}>
                    <h1 className="search-title">{recipe.name} 
                        <button onClick={(e) => handleChange(recipe)}>Save</button>
                    </h1>
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
