import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import Nav from './Nav'

const { Header } = Layout

const HeaderComponent: FunctionComponent = () => (
  <Header className="header">
    <div className="logo" />
    <Nav />
  </Header>
)

export default HeaderComponent
