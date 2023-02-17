import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuDashboardIconImg from "../assets/menu-dashboard-icon.svg"
import MenuArrowUpIconImg from "../assets/menu-arrow-up-icon.svg"
import MenuPlusIconImg from "../assets/menu-plus-icon.svg"
import MenuProfileIconImg from "../assets/menu-profile-icon.svg"
import MenuLogoutIconImg from "../assets/menu-logout-icon.svg"

const Sidebar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const handleLogout = () => {
    localStorage.clear()
    window.location = "/"
  }
  return (
    <div className='sidebar'>
      <div className='sidebar-menus'>
        <Link to="/dashboard" className={`sidebar-menu ${pathname.includes('dashboard')?'sidebar-menu-active':''}`}>
          <img src={MenuDashboardIconImg} alt="" />
          <span>Dashboard</span>
        </Link>
        <Link to="/transfer" className={`sidebar-menu ${pathname.includes('transfer')?'sidebar-menu-active':''}`}>
          <img src={MenuArrowUpIconImg} alt="" />
          <span>Transfer</span>
        </Link>
        <Link to="/top-up" className={`sidebar-menu ${pathname.includes('top-up')?'sidebar-menu-active':''}`}>
          <img src={MenuPlusIconImg} alt="" />
          <span>Top Up</span>
        </Link>
        <Link to="/profile" className={`sidebar-menu ${pathname.includes('profile')?'sidebar-menu-active':''}`}>
          <img src={MenuProfileIconImg} alt="" />
          <span>Profile</span>
        </Link>
      </div>
      <div className='sidebar-logout'>
        <button onClick={handleLogout} className='sidebar-menu'>
          <img src={MenuLogoutIconImg} alt="" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar