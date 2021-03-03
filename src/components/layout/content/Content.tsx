import React, { FunctionComponent } from 'react'
import { Layout, Breadcrumb, BackTop } from 'antd'

import A from '../../feature/Search/SearchContainer'
import C from '../../feature/Results/ResultsContainer'

const { Content } = Layout

const ContentComponent: FunctionComponent = () => (
  <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Recipe</Breadcrumb.Item>
    </Breadcrumb>
    <div className="site-layout-background">
      Content SEARCH
      <A />
    </div>
    <div className="site-layout-background">
      Content RESULTS
      <C />
    </div>
    <BackTop />
  </Content>
)

export default ContentComponent
