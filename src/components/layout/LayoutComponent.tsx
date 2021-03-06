import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import ContentComponent from './content/Content'
import FooterComponent from './footer/Footer'
import HeaderComponent from './header/Header'

// import '../../App.css'

const LayoutContainer: FunctionComponent = ({ children }) => (
  <Layout id="components-layout-demo-top">
    <HeaderComponent />
    <ContentComponent children={children} />
    <FooterComponent />
  </Layout>
)

export default LayoutContainer
