import React, { FunctionComponent } from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const Nav: FunctionComponent = () => {
  const location = useLocation()
  return (
    <nav className="nav">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`${location.pathname}`]}
      >
        <Menu.Item key="/recipes/search">
          <Link to="/recipes/search">Search</Link>
        </Menu.Item>
        <Menu.Item key="/recipes/create">
          <Link to="/recipes/create">Create</Link>
        </Menu.Item>
        <Menu.Item key="/recipes/all">
          <Link to="/recipes/all">All</Link>
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default Nav
