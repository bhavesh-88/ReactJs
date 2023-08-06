// The React useCallback Hook returns a memoized callback function.

import React from 'react'
import { useCallback, useState } from "react";
import Todos from "./Todos";

const Usecallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo =  useCallback(()=>{
    return setTodos((prev) => [...prev, `new Entry`]);
  },[todos]);
//   const addTodo = () => {
//     return setTodos((prev) => [...prev, `new Entry`]);
//   };
  return (
    <div>
       <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Usecallback
