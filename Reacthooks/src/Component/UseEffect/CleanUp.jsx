import React, { useEffect, useState } from "react";
import "../../App.css"

const CleanUp = () => {
    const [widthcount, setWidthCount] = useState(window.screen.width);

    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth);
    };

   useEffect(()=>{
        window.addEventListener("resize",currentScreenWidth)
   })
    return (
        <>
            <div className="container">
                <h1> The size of the window is <span> {widthcount} </span></h1>
            </div>
        </>
    );
};


export default CleanUp;