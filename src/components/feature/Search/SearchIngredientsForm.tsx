import React, { FunctionComponent } from 'react'
import SearchIngredientsFormItem from './SearchIngredientsFormItem'

import { Form, Col, Row } from 'antd'
interface A {
  a: boolean
}
const SearchIngredientsForm: FunctionComponent<A> = ({ a }) => {
  const ingredientSort = a ? ['with', 'without'] : ['with']
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
