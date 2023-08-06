import React,{ useMemo, useState} from 'react'

const Usememohook = () => {
    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setMyNum(myNum + 1);
    };
    const countNumber = (num) => {
        // console.log("🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num", num);
        // for (let i = 0; i <= 1000000000; i++) {}
        return num;
    };

    // const CheckData = () => {
    //     return countNumber(myNum);
    // };

    const CheckData = useMemo(() => {
        return countNumber(myNum);
    },[myNum]);
    
  return (
    <div>
       <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {CheckData} </p>
      {/* <p> My new number : <CheckData/> </p> */}
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </div>
  )
}

export default Usememohook
