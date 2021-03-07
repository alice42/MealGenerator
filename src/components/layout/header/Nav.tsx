import React, { FunctionComponent } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Nav: FunctionComponent = () => (
  <nav className="nav">
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/products/1">First Product</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/products/2">Second Product</Link>
      </Menu.Item>
    </Menu>
  </nav>
)

export default Nav
