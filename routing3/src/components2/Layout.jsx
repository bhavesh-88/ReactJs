import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <h1>Nested Routing</h1>
      <ul>
        <li><NavLink to="/" style={({isActive}) =>{return{backgroundColor: isActive ? "green":""}}} style={{backgroundColor:"red"}}> HOME</NavLink></li>
        <li><NavLink to="/about" style={({isActive}) =>{return{backgroundColor: isActive ? "green":""}}}>About</NavLink></li>
        <li><NavLink to="/contect" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>CONTECT</NavLink></li>
        <li><NavLink to="/post" style={({isActive})=>{return{backgroundColor: isActive ? 'red': ''}}}>POST</NavLink></li>
      </ul>
      <Outlet/>
    </>
  )
}

export default Layout
