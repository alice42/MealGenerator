import React, { FunctionComponent } from 'react'
import { Layout, Breadcrumb, BackTop } from 'antd'
import { useLocation } from 'react-router-dom'

const { Content } = Layout

const ContentComponent: FunctionComponent = ({ children }) => {
  const location = useLocation()
  const breadcrumbValue: any = {
    '/': ['Home', ''],
    '/recipes/search': ['Recipe', 'Search'],
    '/recipes/create': ['Recipe', 'Create'],
    '/recipes/all': ['Recipe', 'All'],
  }
  return (
    <Content className="content" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumbValue[location.pathname].map(
          (breadcrumb: string, i: number) => (
            <Breadcrumb.Item key={i}>{breadcrumb}</Breadcrumb.Item>
          )
        )}
      </Breadcrumb>
      {children}
      <BackTop />
    </Content>
  )
}

export default ContentComponent
