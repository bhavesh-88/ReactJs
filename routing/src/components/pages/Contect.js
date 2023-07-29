import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Header from "../Header"

const Contect = () => {
    const navigate = useNavigate();
    const gotohome = () => {
        navigate('/')
      }
  return (
    <div>
        {/* <Header/> */}
        
        <h1>Contect Page</h1>
        <button onClick={gotohome}>go to Home page</button>

    </div>
  )
}

export default Contect
