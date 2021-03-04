import { Skeleton, Card } from 'antd'
import React, { FunctionComponent } from 'react'
import * as resultsTypes from './resultsInterfaces'
import defaultImg from '../../../assets/images/default_img.jpg'

const { Meta } = Card

const ResultsListItem: FunctionComponent<resultsTypes.PropsResultItem> = (
  { recipeItem, loading },
  key: string
) => {
  return (
    <Card>
      <Skeleton loading={loading} active>
        <Meta
          avatar={
            <img
              style={{ width: 80, height: 80, borderRadius: 3 }}
              src={recipeItem.thumbnail || defaultImg}
              alt={recipeItem.title}
            />
          }
          title={recipeItem.title}
          description={recipeItem.ingredients}
        />
      </Skeleton>
    </Card>
  )
}

export default ResultsListItem
