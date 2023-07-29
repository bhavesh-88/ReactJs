import React from 'react';
import './NewExpense.css';
import ExpenceForm from './ExpenseForm';


const NewExpence = (props) => {

  const saveExpenseDataHandler = (enterdExpanseDate) =>{
      const expanseDate ={
        ...enterdExpanseDate,
        id:Math.random().toString()
      }

      props.onAddExpense(expanseDate)
      // console.log(enterdExpanseDate);
      // console.log(expanseDate);

  }

  return (
    <>
      <div className='new-expense'>
        <ExpenceForm onSaveExpanseDate = { saveExpenseDataHandler }/>
      </div>
    </>
  )
}


export default NewExpence
