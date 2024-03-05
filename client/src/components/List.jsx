function List({ recipes }) {
    return (
        <>
            {recipes.map(recipe => {
                let rating = ""
                for (let i = 0; i < recipe.rating; i++) {
                    rating += "⭐"
                }
                
                return (
                <div className="search-card" key={recipe._id}>
                    <h1 className="search-title">{recipe.name}</h1>
                    <p>Cook Time: {recipe.cook_time}</p>
                    <div className="search-hover hidden">
                        <p>Rating: {rating}</p>
                        <p>Ingredients: {recipe.ingredients}</p>
                    </div>
                </div>
            )})}
        </>
    )
}

export default List
