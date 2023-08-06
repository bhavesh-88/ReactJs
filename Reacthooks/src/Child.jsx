import React, { useContext } from 'react'
import { AppContext } from './Component/Usecontext/UserContext'

const Child = () => {
    // const {name, age} = user

    const userData  = useContext(AppContext)
    console.log(userData);
  return (
    <div>
      <h1>Child compo</h1>
      {/* <p>My name is {name} and age {age}</p> */}
      <p>My name is {userData.name} and age {userData.age}</p>
    </div>
  )
}

export default Child
