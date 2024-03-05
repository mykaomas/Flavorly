function List({ recipes }) {
    return (
        <>
            {recipes.map(recipe => (
                <div className="search-card" key={recipe._id}>
                    <h1 className="search-title">{recipe.name}</h1>
                    <p>Cook Time: {recipe.cook_time}</p>
                    <div className="search-hover hidden">
                        <p>Rating: {recipe.rating}</p>
                        <p>Ingredients: {recipe.ingredients}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default List
