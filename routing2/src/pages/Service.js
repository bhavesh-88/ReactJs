import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Service = () => {
  return (
    <div>
      {/* nested routing */}
      <h1>Our Services</h1>
      <p>We Our Some Business</p>
      <Link to="company">Company</Link>
      <Link to="channel">Channel</Link>
      <Link to="other">Other</Link>
      <Outlet/>
    </div>
  )
}

export default Service
