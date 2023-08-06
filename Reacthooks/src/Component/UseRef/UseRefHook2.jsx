// 2 Used to access the DOM element directly

import React, { useRef } from 'react'

const UseRefHook2 = () => {

    const inputRef = useRef()

    const changeBorder = () =>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#82E0AA";
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <br />
            <button onClick={changeBorder}>submit</button>
        </div>
    )
}

export default UseRefHook2
