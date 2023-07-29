import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className='navbar'>
        <div className='logo'>
            <div>LOGO</div>
        </div>
        <nav className='nav'>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contect">Contect</Link></li>
                <li><Link to="/service">SERVICE</Link></li>
            </ul>
            {/* <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contect">Contect</NavLink></li>
                <li><NavLink to="/service">SERVICE</NavLink></li>
            </ul> */}
        </nav>
      </header>
    </>
  )
}

export default Header
