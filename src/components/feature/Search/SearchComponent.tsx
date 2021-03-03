import React, { FunctionComponent, useState } from 'react'
import * as searchTypes from './searchInterfaces'

const SearchComponent: FunctionComponent<searchTypes.PropsSearchComponent> = (
  props
) => {
  const { onSearch, onClear } = props
  const [ingredients, setIngredients] = useState('')
  const [query, setQuery] = useState('')

  return (
    <div>
      <input
        value={ingredients}
        placeholder="ingredients"
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button
        onClick={() => {
          onSearch(ingredients, query, 1)
          setQuery('')
        }}
      >
        Get Recipes
      </button>
      <input
        value={query}
        placeholder="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => {
          onSearch(ingredients, query, 1)
          setQuery('')
        }}
      >
        Get Recipes
      </button>
      <button onClick={onClear}>Clear Results</button>
    </div>
  )
}

export default SearchComponent
