import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import ContentComponent from './components/layout/content/Content'
import FooterComponent from './components/layout/footer/Footer'
import HeaderComponent from './components/layout/header/Header'

import './App.css'

const App: FunctionComponent = () => (
  <Layout id="components-layout-demo-top">
    <HeaderComponent />
    <ContentComponent />
    <FooterComponent />
  </Layout>
)

export default App
