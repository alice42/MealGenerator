import React, { FunctionComponent } from 'react'
import * as resultsTypes from './resultsInterfaces'
import ResultsListItem from './ResultsListItem'

const ResultList: FunctionComponent<resultsTypes.PropsResultList> = ({
  recipesListItems,
  loading,
}) => {
  const recipeItem = recipesListItems.map(
    (recipeItem: resultsTypes.RecipeModel, i: number) => (
      <ResultsListItem recipeItem={recipeItem} key={i} loading={loading} />
    )
  )
  return <div>{recipeItem}</div>
}

export default ResultList
