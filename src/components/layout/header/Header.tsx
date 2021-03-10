import React, { FunctionComponent } from 'react'
import { Layout } from 'antd'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const { Header } = Layout

const HeaderComponent: FunctionComponent = () => (
  <Header className="header">
    <Link to="/">
      <div className="logo" />
    </Link>
    <Nav />
  </Header>
)

export default HeaderComponent
