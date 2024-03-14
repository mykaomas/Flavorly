const Favorites = ({ recipes }) => {
    console.log(recipes)

    return (
        <div>
            {recipes ? (
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
            ) : (
                <p>No Favorites Found</p>
            )}
        </div>
    )
}

export default Favorites
