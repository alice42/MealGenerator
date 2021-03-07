import React, { FunctionComponent } from 'react'
import * as allTypes from './allInterfaces'
import AllRecipesList from './AllRecipesList'

const AllComponent: FunctionComponent<allTypes.PropsAllComponent> = ({
  error,
}) => {
  if (error) return <div>{error}</div>

  return (
    <div className="content-background">
      <AllRecipesList />
    </div>
  )
}

export default AllComponent
