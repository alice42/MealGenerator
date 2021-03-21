import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import defaultImg from '../../../assets/images/default_img.jpg'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'

function AllRecipesListItem({ recipe }: any) {
  return (
    <Card
      actions={[
        <SettingOutlined
          key="setting"
          onClick={() => {
            console.log('setting')
          }}
        />,
        <EditOutlined
          key="edit"
          onClick={() => {
            console.log('edit')
          }}
        />,
        <EllipsisOutlined
          key="ellipsis"
          onClick={() => {
            console.log('ellipsis')
          }}
        />,
      ]}
    >
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
