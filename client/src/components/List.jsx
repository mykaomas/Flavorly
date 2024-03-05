function List({ recipes }) {
    console.log(recipes)
    return (
        <>
            {recipes.map(recipe => (
                <div className="card" key={recipe._id}>
                    <p>{recipe.name}</p>
                    <p>{recipe.cook_time}</p>
                    <p>{recipe.ingredients}</p>
                </div>
            ))}
        </>
    )
}

export default List