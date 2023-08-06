// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen.

import React ,  { useState, useLayoutEffect, useEffect }  from 'react'

const UseLayoutEffect = () => {
    const [num, setNum] = useState(0);


    // tops to bottom
    // useEffect(()=>{
    //     console.log("I am First UseEffect ");
    // },)
    // useEffect(()=>{
    //     console.log("I am second UseEffect ");
    // },)
    // useEffect(()=>{
    //     console.log("I am third UseEffect ");
    // },)


    // useLayoutEffect call first our screen update hone se pehle value update ho jati hai
    // useEffect(()=>{
    //     console.log("I am First UseEffect ");
    // },)
    // // this is call first
    // useLayoutEffect(()=>{
    //     console.log("I am second UseEffect ");
    // },)
    // useEffect(()=>{
    //     console.log("I am third UseEffect ");
    // },)


    // useEffect(()=>{
    //     if(num === 0) setNum(num + Math.random() * 100); 
    // },[num])
    
    useLayoutEffect(()=>{
        if(num === 0) setNum(num + Math.random() * 100); 
    },[num])
  return (
    <>
     <p>my new random number {num}</p>
    <button onClick={() => setNum(0)}>random num</button>  
    </>
  )
}

export default UseLayoutEffect
