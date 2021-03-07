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
    <div className="content-background">
      <ReduxLazyScroll
        isFetching={isLoading}
        errorMessage={error}
        hasMore={hasMore}
        loadMore={memoizedLoadMore}
      >
        <ResultsList recipesListItems={recipes} loading={isLoading} />
      </ReduxLazyScroll>
      <div className="row posts-lazy-scroll__messages">
        {/* {isLoading && (
          <div className="alert alert-info"> Loading more posts... </div>
        )} */}

        {!hasMore && !error && !!recipes.length && (
          <div className="alert alert-success">
            All the posts has been loaded successfully.
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

export default RecipesComponent
