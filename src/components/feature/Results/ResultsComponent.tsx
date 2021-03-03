import React, { FunctionComponent, useCallback } from 'react'
import ResultsList from './ResultsList'
import { PropsResultsComponent } from './resultsInterfaces'
// @ts-ignore
import ReduxLazyScroll from 'redux-lazy-scroll'

const RecipesComponent: FunctionComponent<PropsResultsComponent> = (props) => {
  const {
    recipes,
    isLoading,
    error,
    hasMore,
    search,
    onLoadNextPageRecipe,
  } = props

  const memoizedLoadMore = useCallback(() => {
    onLoadNextPageRecipe(search.ingredients, search.query)
  }, [hasMore])

  if (error) {
    console.log('error: ', error)
    return <div>{error}</div>
  }

  if (isLoading) {
    return <div>{'Loading..'}</div>
  }

  return (
    <ReduxLazyScroll
      isFetching={isLoading}
      errorMessage={error}
      loadMore={memoizedLoadMore}
      hasMore={hasMore}
    >
      <ResultsList recipesListItems={recipes} />
    </ReduxLazyScroll>
  )
}

export default RecipesComponent
