import React, { FunctionComponent, useState } from 'react'
import { Form, Button, Input, Col, Row, Upload } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { recipesRef, storage } from '../../../../firebase'
import { UploadFile } from 'antd/lib/upload/interface'
import ImgCrop from 'antd-img-crop'
import Tags from './Tags'
import A from './Tags'

const CreateRecipeForm: FunctionComponent = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [file, setFile] = useState<File | undefined>()

  const onPreview = async (file: any) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow && imgWindow.document.write(image.outerHTML)
  }

  const onFinish = (values: any) => {
    console.log('ON FINISH', values)
    file &&
      storage
        .ref(`/images/${file.name}`)
        .put(file)
        .then(() => {
          storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              recipesRef.push({
                name: values.recipe.name,
                instructions: values.recipe.instructions,
                ingredients: values.recipe.ingredients,
                image: url,
              })
            })
        })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const props = {
    onRemove: (file: UploadFile<any>) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setFileList(newFileList)
    },
    beforeUpload: (file: UploadFile<any>) => {
      setFileList([...fileList, file])
      return false
    },
    onChange: (newFileList: any) => {
      console.log('AAA', newFileList)
      setFileList([newFileList.file])
      setFile(newFileList.fileList[0])
    },
    fileList,
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
                        <Input placeholder="Quantity" />
                      </Form.Item>
                    </Col>
                    <Col span={17} style={{ paddingRight: '8px' }}>
                      <Form.Item
                        {...field}
                        name={[field.name, 'name']}
                        fieldKey={[field.fieldKey, 'name']}
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

        <Row
          style={{
            alignItems: 'baseline',
            display: 'flex',
            flexFlow: 'nowrap',
          }}
        >
          <Col>
            <Form.Item label="Image">
              <Form.Item name={['recipe', 'image']} noStyle>
                <ImgCrop rotate>
                  <Upload
                    {...props}
                    listType="picture-card"
                    onPreview={onPreview}
                  >
                    {!file && '+ Upload'}
                  </Upload>
                </ImgCrop>
              </Form.Item>
            </Form.Item>
          </Col>
          <Col flex={'auto'}>
            <Form.Item label="Link">
              <Form.Item noStyle name={['recipe', 'link']}>
                <Input placeholder="Link" />
              </Form.Item>
            </Form.Item>

            <Form.Item noStyle name={['recipe', 'tags']}>
              <Tags />
            </Form.Item>
          </Col>
        </Row>

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
