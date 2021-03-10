import React, { FunctionComponent } from 'react'
import SearchIngredientsFormItem from './SearchIngredientsFormItem'
import * as searchTypes from './searchInterfaces'
import { Form, Col, Row } from 'antd'

const SearchIngredientsForm: FunctionComponent<searchTypes.PropsSearchIngredientsForm> = ({
  canExcludeIngredient,
}) => {
  const ingredientSort = canExcludeIngredient ? ['with', 'without'] : ['with']
  return (
    <Form.Item noStyle>
      <Row gutter={16}>
        {ingredientSort.map((sort) => (
          <Col key={sort} span={12}>
            <Form.Item key={sort} noStyle>
              <SearchIngredientsFormItem name={sort} key={sort} />
            </Form.Item>
          </Col>
        ))}
      </Row>
    </Form.Item>
  )
}

export default SearchIngredientsForm
