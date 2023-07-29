import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* <ul>
        <li><Link to="/"> HOME</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contect">CONTECT</Link></li>
      </ul> */}
      <ul>
        <li><NavLink to="/" style={({isActive}) =>{return{backgroundColor: isActive ? "green":""}}} style={{backgroundColor:"red"}}> HOME</NavLink></li>
        <li><NavLink to="/about" style={({isActive}) =>{return{backgroundColor: isActive ? "green":""}}}>About</NavLink></li>
        <li><NavLink to="/contect" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>CONTECT</NavLink></li>
        <li><NavLink to="/post/mobile" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>POST</NavLink></li>
        <li><NavLink to="/post/mobile/23" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>POST with Id</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar
