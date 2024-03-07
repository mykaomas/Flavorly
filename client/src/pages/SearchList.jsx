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
          <List recipes={recipes}/>
        )}
    </>
  )
}

export default SearchList
