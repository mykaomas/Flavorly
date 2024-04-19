function Ingredients({ ingredients }) {
    return (
        <div className="ingredient-list">
            {ingredients.map(ingredient => {
                return (
                    <div className="ingredient" key={ingredients.indexOf(ingredient)}>
                        <input type="checkbox" name="ingredient" value={ingredient}/>{ingredient}
                    </div>
                )
            })}
        </div>
    )
}

export default Ingredients
