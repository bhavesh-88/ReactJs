import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    // link ko className provide nahi karte h so we can use navlink
    // NavLink provide a active class and we style a link
    <>
      <div>
        {/* <ul className='navbar'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contect">CONTECT</Link></li>
            <li><Link to="/service">Services</Link></li>
        </ul> */}
        <ul className='navbar'>
            <li><NavLink className="nav-link" to="/">HOME</NavLink></li>
            <li><NavLink className="nav-link" to="/about">ABOUT</NavLink></li>
            <li><NavLink className="nav-link"to="/contect">CONTECT</NavLink></li>
            <li><NavLink className="nav-link"to="/filter">FILTER</NavLink></li>
            <li><NavLink style={{color:"blue"}}  to="/service">Services</NavLink></li>
            <li><NavLink style={{color:"blue"}}  to="/login">Login</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Header
