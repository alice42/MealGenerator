import React, { FunctionComponent } from 'react'
import * as generatorTypes from './generatorInterfaces'
import A from './A'

const AllComponent: FunctionComponent<generatorTypes.PropsGeneratorComponent> = ({
  error,
}) => {
  if (error) return <div>{error}</div>

  return (
    <div className="content-background">
      <A />
    </div>
  )
}

export default AllComponent
