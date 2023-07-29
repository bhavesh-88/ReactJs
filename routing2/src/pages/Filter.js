import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
    const [searchparams, setSearchParams] =useSearchParams();
    console.log(searchparams.get('age'));
    console.log(searchparams.get('city'));

    const age = searchparams.get('age');
    const city = searchparams.get('city');
    const text = searchparams.get('text');
  return (
    // search a data in a query form
    // data in a query form in url
    // show a data in query format in page
    // pass a data in query form

    // setSearchParams take a Object
    <div>
      <h1>Filter Page</h1>
      <h3>Age is : {age}</h3>
      <h3>City is : {city}</h3>
      <h3>text is : {text}</h3>

    <input type='text' onChange={(e) =>{setSearchParams({text:e.target.value,age:12})}} placeholder="Set name in Query params"/>
      <button onClick={() =>{setSearchParams({age:13})}}>Set Age in Query params</button>
    </div>
  )
}

export default Filter
