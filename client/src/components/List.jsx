import * as React from 'react';
import  AuthService  from '../utils/auth';
import { useMutation } from '@apollo/client'

function List({ recipes, newRecipes }) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (recipeId, e) => {
        setChecked(!e.target.checked);
        if (!e.target.checked){
            console.log('false' + ' ' + recipeId)
        }
        
        if (e.target.checked){
            let token = AuthService.getUser();
            console.log('userid:' + token.data._id + ' ' + 'recipeid: ' + recipeId);
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
