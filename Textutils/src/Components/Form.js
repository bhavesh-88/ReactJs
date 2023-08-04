import React, { useState } from 'react'

const Form = (props) => {
    // const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpClick")
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (e) => {
        console.log("On change");
        setText(e.target.value);
    }
    const handleLoClick = () => {
        console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }
    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{color: props.mode==='dark'?'black':'white'}}>
                <textarea className="form-control" value={text} onChange={handleOnChange} id='mybox' rows="7" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea >
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className= "btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
            </div>
            <div className='container my-3'>
                <h1>Your text Summary</h1>
                <p>{text.split("").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} MInutes read</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Form
