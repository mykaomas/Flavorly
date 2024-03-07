function Ingredients({ ingredients }) {
    return (
        <>
            {ingredients.map(ingredient => {
                return (
                    <div className="ingredient" key={ingredients.indexOf(ingredient)}>
                        <input type="checkbox" id={ingredient}/>{ingredient}
                    </div>
                )
            })}
        </>
    )
}

export default Ingredients
