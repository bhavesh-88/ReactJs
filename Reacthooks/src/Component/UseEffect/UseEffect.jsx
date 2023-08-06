import React, { useEffect, useState } from "react";
import "../../App.css"

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = count
    },[count])
    return (
        <>
            <div className="container">
                <button onClick={()=>{setCount(count + 1)}}>+</button>
                <h1>{count}</h1>
                <button onClick={()=>{ (count === 0 ? setCount(0):setCount(count - 1))}}>-</button>
            </div>
        </>
    );
};


export default UseEffect;