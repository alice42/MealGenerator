import React, { FunctionComponent, useState } from 'react'
import * as searchTypes from './searchInterfaces'
import MyTag from './SearchTags'

const SearchComponent: FunctionComponent<searchTypes.PropsSearchComponent> = ({
  onSearch,
}) => {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [query, setQuery] = useState<string>('')

  return (
    <div>
      <MyTag ingredients={ingredients} setIngredients={setIngredients} />
      <input
        value={query}
        placeholder="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          onSearch(ingredients.join(','), query, 1)
          setQuery('')
        }}
      >
        Get Recipes
      </button>
    </div>
  )
}

export default SearchComponent
