import React from 'react'
import Child from './Child'

const Parent = ({user}) => {

    const {name, age} = user
  return (
    <div>
      <h1>Parent compo</h1>
      <h1>My name is {name} and age {age}</h1>
      <Child {...user}/>
    </div>
  )
}

export default Parent
