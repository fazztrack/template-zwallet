import React from 'react'
import dashboardArrowUpImg from "../assets/dashboard-arrow-up.svg"
import dashboardPlusImg from "../assets/dashboard-plus.svg"
import { Link } from 'react-router-dom'

const Overview = () => {
  return (
    <div className='wrap-overview'>
      <div className='overview-title'>
        <small>Balance</small>
        <h1>Rp 120.000</h1>
        <p>+62 813-9387-7946</p>
      </div>
      <div className='overview-action'>
        <Link to="/transfer" className='link'>
          <img src={dashboardArrowUpImg} alt="" srcSet="" />
          Transfer
        </Link>
        <Link to="/top-up" className='link'>
          <img src={dashboardPlusImg} alt="" srcSet="" />
          Top Up
        </Link>
      </div>
    </div>
  )
}

export default Overview