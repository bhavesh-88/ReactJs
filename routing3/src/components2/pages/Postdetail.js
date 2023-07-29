import React from 'react'
import { useParams } from 'react-router-dom'
const Postdetail = () => {
    let {category} = useParams()
  return (
    <div>
      <h1>Post Detail Page</h1>
      <h1>{category}</h1>
    </div>
  )
}

export default Postdetail
