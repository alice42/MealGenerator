import React, { FunctionComponent } from 'react'
import * as resultsTypes from './resultsInterfaces'

const ResultItem: FunctionComponent<resultsTypes.PropsResultItem> = (
  { recipeItem },
  key: string
) => (
  <div key={key} className="w3-card-2">
    <img
      className="w3-image w3-rounded"
      src={recipeItem.thumbnail}
      alt={recipeItem.title}
      style={{
        width: 100,
      }}
    />
    <a className="btn btn-default" href={recipeItem.href}>
      Read the entire recipe
    </a>
    <div className="w3-container">
      <h4>
        <b>{recipeItem.title}</b>
      </h4>
      <p>{recipeItem.ingredients}</p>
    </div>
    <hr></hr>
  </div>
)

export default ResultItem
