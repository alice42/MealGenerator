import React, { FunctionComponent } from 'react'
import ResultsListItem from './ResultsListItem'
import * as resultsTypes from './resultsInterfaces'

const ResultList: FunctionComponent<resultsTypes.PropsResultList> = ({
  recipesListItems,
}) => {
  const recipeItem = recipesListItems.map(
    (recipeItem: resultsTypes.RecipeModel, i: number) => (
      <ResultsListItem recipeItem={recipeItem} key={i} />
    )
  )
  return <div>{recipeItem}</div>
}

export default ResultList
