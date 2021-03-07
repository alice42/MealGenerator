import React, { useState } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { UploadFile } from 'antd/lib/upload/interface'

const Demo = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: any | undefined) => {
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

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {!fileList.length && '+ Upload'}
      </Upload>
    </ImgCrop>
  )
}

export default Demo
