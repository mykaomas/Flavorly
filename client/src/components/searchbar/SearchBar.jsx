import { useState } from "react"

const SearchBar = ({ recipes }) => {
    const [searchInput, setSearchInput] = useState('')

    const search = () => {
        recipes = recipes.filter(function (recipe) {
            if (searchInput === '') {
                return recipe
            } else if (recipe.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return recipe
            }
        })
    }

    return (
        <div id="searchbar">
            <input id="search-input" type="text" onChange={(e) => setSearchInput(e.target.value)}/>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar
