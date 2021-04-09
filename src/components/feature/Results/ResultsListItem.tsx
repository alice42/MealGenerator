import { Skeleton, Card } from 'antd'
import React, { FunctionComponent } from 'react'
import * as resultsTypes from './resultsInterfaces'
import defaultImg from '../../../assets/images/default_img.jpg'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Meta } = Card

const ResultsListItem: FunctionComponent<resultsTypes.PropsResultItem> = ({
  recipeItem,
  loading,
}) => {
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
