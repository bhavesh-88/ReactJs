//1 it create a mutable variable which will not re-render the components
// 2 Used to access the DOM element directly

import React ,{useState, useEffect, useRef} from 'react'

const UseRefHook = () => {
    const [userInput, setUserInput] = useState("");
    // const [count, setCount] = useState();

    const countt = useRef(0)
    // it return a current obj
    console.log(countt);


    useEffect(() =>{
         // setCount(count + 1);
         countt.current = countt.current + 1 ;
    })
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>the number of times comp render:{countt.current} </p>
    </div>
  )
}

export default UseRefHook
