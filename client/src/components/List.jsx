function List({ recipes, newRecipes }) {
    if (newRecipes.length > 0) {
        recipes = newRecipes
    }
    
    return (
        <div className="search-list">
            {recipes.map(recipe => {
                let rating = ""
                for (let i = 0; i < recipe.rating; i++) {
                    rating += "⭐"
                }
                
                return (
                <div className="search-card" key={recipe._id}>
                    <h1 className="search-title">{recipe.name}</h1>
                    <div className="search-content">
                        <p>Cook Time: {recipe.cook_time}</p>
                        <p>Rating: {rating}</p>
                        <p>Ingredients: {recipe.ingredients}</p>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default List
