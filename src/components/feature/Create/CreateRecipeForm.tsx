import React, { FunctionComponent } from 'react'
import { Form, Button, Input, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { recipesRef } from '../../../../firebase'
import Demo from './CreateRecipeUploadImg'

const CreateRecipeForm: FunctionComponent = () => {
  const onFinish = (values: any) => {
    recipesRef.push(values.recipe)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="content-background">
      <Form
        name="recipe_create"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Recipe name">
          <Form.Item
            name={['recipe', 'name']}
            noStyle
            rules={[
              { required: true, message: 'Please input your recipe name!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.List name={['recipe', 'ingredients']} initialValue={['']}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  label={index === 0 ? 'Ingredients' : ''}
                  key={field.key}
                >
                  <Row style={{ alignItems: 'baseline' }}>
                    <Col span={6} style={{ paddingRight: '8px' }}>
                      <Form.Item
                        {...field}
                        name={[field.name, 'quantity']}
                        fieldKey={[field.fieldKey, 'quantity']}
                        rules={[
                          { required: true, message: 'Missing quantity' },
                        ]}
                        noStyle
                      >
                        <Input placeholder="quantity" />
                      </Form.Item>
                    </Col>
                    <Col span={17} style={{ paddingRight: '8px' }}>
                      <Form.Item
                        {...field}
                        name={[field.name, 'Ingredient name']}
                        fieldKey={[field.fieldKey, 'Ingredient name']}
                        rules={[
                          {
                            required: true,
                            message: 'Missing Ingredient name name',
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="Ingredient name" />
                      </Form.Item>
                    </Col>
                    <Col span={1} style={{ textAlign: 'center' }}>
                      {index === fields.length - 1 ? (
                        <PlusCircleOutlined onClick={() => add()} />
                      ) : (
                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      )}
                    </Col>
                  </Row>
                </Form.Item>
              ))}
            </>
          )}
        </Form.List>
        <Form.Item label="Instructions">
          <Form.Item
            name={['recipe', 'instructions']}
            rules={[
              {
                required: true,
                message: 'Please input your recipe instructions!',
              },
            ]}
            noStyle
          >
            <Input.TextArea />
          </Form.Item>
        </Form.Item>

        <Form.Item label="Image">
          <Demo />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CreateRecipeForm
