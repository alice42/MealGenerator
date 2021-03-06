import React, { FunctionComponent } from 'react'
import { Layout, Breadcrumb, BackTop } from 'antd'

const { Content } = Layout

const ContentComponent: FunctionComponent = ({ children }) => (
  <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Recipe</Breadcrumb.Item>
    </Breadcrumb>
    {children}
    <BackTop />
  </Content>
)

export default ContentComponent
