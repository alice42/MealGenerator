import React, { FunctionComponent, useCallback } from 'react'
import ResultsList from './ResultsList'
import { PropsResultsComponent } from './resultsInterfaces'
// @ts-ignore
import ReduxLazyScroll from 'redux-lazy-scroll'

const RecipesComponent: FunctionComponent<PropsResultsComponent> = ({
  recipes,
  isLoading,
  error,
  hasMore,
  search,
  onLoadNextPageRecipe,
}) => {
  const memoizedLoadMore = useCallback(() => {
    onLoadNextPageRecipe(search.ingredients, search.query)
  }, [hasMore])

  if (error) return <div>{error}</div>

  return (
    <>
      <ReduxLazyScroll
        isFetching={isLoading}
        errorMessage={error}
        hasMore={hasMore}
        loadMore={memoizedLoadMore}
      >
        <ResultsList recipesListItems={recipes} loading={isLoading} />
      </ReduxLazyScroll>
      {!hasMore && !error && !!recipes.length && (
        <div style={{ textAlign: 'center' }}>
          All the posts has been loaded successfully.
        </div>
      )}
    </>
  )
}

export default RecipesComponent
