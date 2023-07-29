import React , { useState } from 'react';
import './App.css';
// import Expenseitem from './components/Expenseitem';
import Expenses from './components/Expences/Expenses';
import NewExpense from './components/NewExpences/NewExpense';


let DUMMY_EXPENSE = [
  {
    id:'e1',
    title:"school fee",
    amount:200,
    date: new Date(2023, 5, 12)
  },
  {
    id:'e2',
    title:"house rent",
    amount:1200,
    date: new Date(2023, 3, 30)
  },
  {
    id:'e3',
    title:"car rent",
    amount:500,
    date: new Date(2023, 1, 1)
  },
  {
    id:'e4',
    title:"insurance",
    amount:2000,
    date: new Date(2023, 5, 20)
  }
]

function App() {

  // let expenseDate = new Date(2023, 3, 28);
  // let expenseTitle = "school fess";
  // let expenseAmount = 200;

  const [expenses ,setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) =>{
    console.log(expense);
    const updatedExense = [expense, ...expenses]
    console.log(updatedExense);
    setExpenses(updatedExense)
  }
  return (
    <>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expense={expenses}/>
    </>
  );
}

export default App;
