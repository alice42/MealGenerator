import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import ContentComponent from './content/Content'
import FooterComponent from './footer/Footer'
import HeaderComponent from './header/Header'

const LayoutComponent: FunctionComponent = (restProps, { children }) => (
  <Layout id="layout">
    <HeaderComponent />
    <ContentComponent children={children} {...restProps} />
    <FooterComponent />
  </Layout>
)

export default LayoutComponent
