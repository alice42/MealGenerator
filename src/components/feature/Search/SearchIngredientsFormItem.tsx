import React, { FunctionComponent } from 'react'
import { Form, Input, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import * as searchTypes from './searchInterfaces'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4, offset: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20, offset: 4 },
  },
}
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
}

const SearchIngredientsFormItem: FunctionComponent<searchTypes.PropsSearchIngredientsFormItem> = ({
  name,
}) => {
  return (
    <Form.List name={`${name}_ingredient`}>
      {(fields, { add, remove }) => (
        <>
          {name} :
          {fields.map((field, index) => (
            <Form.Item
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={''}
              key={field.key}
            >
              <Form.Item
                {...field}
                rules={[{ required: true, message: 'Missing ingredient' }]}
                noStyle
              >
                <Input
                  placeholder="Ingredient"
                  style={{ width: '80%', marginRight: '12px' }}
                />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              block
              icon={<PlusOutlined />}
            >
              Add ingredient
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  )
}

export default SearchIngredientsFormItem
