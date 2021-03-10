import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { storage } from '../../../../firebase'
import defaultImg from '../../../assets/images/default_img.jpg'

function AllRecipesListItem({ recipe }: any) {
  return (
    <Card>
      {/* <Skeleton loading={loading} active> */}
      <Meta
        avatar={
          <img
            style={{ width: 80, height: 80, borderRadius: 3 }}
            src={recipe.imageURL || defaultImg}
            alt={recipe.name}
          />
        }
        title={recipe.name}
        description={recipe.ingredients.join(',')}
      />
      {/* </Skeleton> */}
    </Card>
  )
}
export default AllRecipesListItem
