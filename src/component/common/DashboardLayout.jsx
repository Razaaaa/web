import React from 'react'
import Login_nav_bar from './LoginNavbar'
import Side_bar from './Sidebar'
import Foot_bar from './Footer'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
    <Login_nav_bar />

    <div style={{ display: 'flex' }}>
      <Side_bar />
      <Outlet style={{ flex: 1 }} />
    </div>

      <Foot_bar />
    </>
  )
}

export default DashboardLayout