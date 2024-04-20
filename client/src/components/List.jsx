import  AuthService  from '../utils/auth'
import { useMutation } from '@apollo/client'
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../utils/mutations'

function List({ recipes, newRecipes, page }) {
    const [addFavorite, { error }] = useMutation(ADD_FAVORITE)
    const [removeFavorite, { err }] = useMutation(REMOVE_FAVORITE)

    const handleChange = async (recipe) => {
        let token = AuthService.getUser()
        
        if (page == 'profile') {
            try {
                const { data } = await removeFavorite({
                    variables: {
                        userId: token.data._id,
                        recipeId: recipe._id
                    }
                })
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        } else {
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
        <>
            {recipes.map((recipe) => {
                let rating = ""
                for (let i = 0; i < recipe.rating; i++) {
                    rating += "⭐"
                }
                
                return (
                <div className="search-card" key={recipe._id}>
                    <div className="search-title">
                        <h1>{recipe.name}</h1> 
                        {page == "profile" ? (
                            <button onClick={() => handleChange(recipe, page)}>Remove</button>
                        ) : (
                            <button onClick={() => handleChange(recipe, page)}>Save</button>
                        )}
                    </div>
                    <div className="search-content">
                        <p>Cook Time: {recipe.cook_time} mins</p>
                        <p>Rating: {rating}</p>
                        <p>Ingredients: {recipe.ingredients}</p>
                    </div>
                </div>
            )})}
        </>
    )
}

export default List
