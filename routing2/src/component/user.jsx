import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
const User = () => {
    // fetch a data in database than we use params
// send a dynamic data in database and uske base ke upper pure page par details lani hoti h (than we use params)
    const params = useParams()
    const {name} = params

    // use location give a information a router
    // use location give a key
    // render one page to another a[ge than kiya information gai hai fetch using useLocation] like key,hash,search,state,pathname params etc
    // route change than get all details of object using uselocation
     const location = useLocation();
     console.log(location);

  return (
    <div>
      <h1>This is {name} User Page</h1>
    </div>
  )
}

export default User
