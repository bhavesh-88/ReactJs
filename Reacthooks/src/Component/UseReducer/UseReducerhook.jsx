import React, { useReducer } from "react";
import "../../App.css"
import reducer from "./reducer";
const initialvalue = 0;

const UseReducerhook = () => {
    // const [count, setCount] = useState(0);

    const [count, dispatch] = useReducer(reducer, initialvalue)

    // dispatch
    // pass a obj
    // type is mandatory
    // it sends the type of action to the reducer function to perform its job 
    // which, of course , is updating the state
    return (
        <>
            <div className="container">
                <button onClick={()=> dispatch({type : "INC"})}>+</button>
                <h1>{count}</h1>
                <button onClick={()=>dispatch({type : "DEC"})}>-</button>
            </div>
        </>
    );
};


export default UseReducerhook;