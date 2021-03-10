import React, { FunctionComponent } from 'react'
import * as createTypes from './createInterfaces'
import CreateRecipeForm from './CreateRecipeForm'

const RecipesComponent: FunctionComponent<createTypes.PropsCreateComponent> = ({
  error,
}) => {
  if (error) return <div>{error}</div>

  return (
    <div className="content-background">
      <CreateRecipeForm />
    </div>
  )
}

export default RecipesComponent
