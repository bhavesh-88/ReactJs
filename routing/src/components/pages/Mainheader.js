import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Mainheader = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Mainheader
