import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contect = () => {     
    let navigate = useNavigate()
    let data = {
        "name":"bhavesh"
    }
  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() =>{navigate("/" ,{state:data})}}>click</button>

    </div>
  )
}

export default Contect
