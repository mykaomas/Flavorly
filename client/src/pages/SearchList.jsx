import List from "../components/List"

import { useQuery } from "@apollo/client"
import { QUERY_RECIPES } from "../utils/queries"

function SearchList() {
  const { loading, data } = useQuery(QUERY_RECIPES)
  const recipes = data?.recipes

  return (
    <>
      {loading ? (
        <div>Loading...</div>
        ) : (
          <div>
            <button className="filter-btn">Filter</button>
            <List recipes={recipes}/>
          </div>
        )}
    </>
  )
}

export default SearchList
