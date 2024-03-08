function Ingredients({ ingredients }) {
    return (
        <>
            {ingredients.map(ingredient => {
                return (
                    <div className="ingredient" key={ingredients.indexOf(ingredient)}>
                        <input type="checkbox" name="ingredient" value={ingredient}/>{ingredient}
                    </div>
                )
            })}
        </>
    )
}

export default Ingredients
