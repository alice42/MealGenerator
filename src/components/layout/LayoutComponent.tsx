import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import ContentComponent from './content/Content'
import FooterComponent from './footer/Footer'
import HeaderComponent from './header/Header'

const LayoutComponent: FunctionComponent = ({ children }) => (
  <Layout id="layout">
    <HeaderComponent />
    <ContentComponent children={children} />
    <FooterComponent />
  </Layout>
)

export default LayoutComponent
