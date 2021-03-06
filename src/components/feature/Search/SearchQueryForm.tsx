import React, { FunctionComponent } from 'react'
import { Form, Input } from 'antd'

const SearchQueryForm: FunctionComponent = () => {
  return (
    <Form.Item name="query">
      <Input placeholder="Search a recipe" />
    </Form.Item>
  )
}

export default SearchQueryForm
