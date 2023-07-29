import React , { useState} from 'react';
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';





function Expenseitem(props) {
  // const month = props.date.toLocaleString('en-us',{month : 'long'});
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString('en-us',{day: '2-digit'});

  const [newTitle , setNewTitle]  = useState()

  const [title , setTitle]  = useState(props.title)

  const clickHandler = () =>{
    setTitle(newTitle)
  }

  const changeHandler = (event) =>{
    setNewTitle(event.target.value)
  }

  return (
    <React.Fragment>
      <div className='expense-item'>
        {/* <div>{ props.date.toISOString() }</div> */}

        <ExpenseDate  date={props.date}/>
        <div className='expense-item__description'>
            {/* <h2>{ props.title }</h2> */}
            <h2>{ title }</h2>
            <div className='expense-item__price'>${ props.amount }</div>
        </div>
        <input type='text' value={newTitle} onChange={ changeHandler } ></input>
        <button onClick={ clickHandler } >Click Me</button>
      </div>
    </React.Fragment>
  )
}


export default Expenseitem
