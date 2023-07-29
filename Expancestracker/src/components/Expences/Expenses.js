import React from 'react'
import './Expenses.css';
import Expenseitem from './Expenseitem';


const Expenses = (props) => {
    return (
        <>
            <div className='expenses'>
                {
                    props.expense.map(i => {
                        return <Expenseitem
                            key={i.id}
                            date={i.date}
                            title={i.title}
                            amount={i.amount} />
                    })
                }
                {/* <Expenseitem
                    date={props.expense[0].date}
                    title={props.expense[0].title}
                    amount={props.expense[0].amount} />

                <Expenseitem
                    date={props.expense[1].date}
                    title={props.expense[1].title}
                    amount={props.expense[1].amount} />

                <Expenseitem
                    date={props.expense[2].date}
                    title={props.expense[2].title}
                    amount={props.expense[2].amount} />

                <Expenseitem
                    date={props.expense[3].date}
                    title={props.expense[3].title}
                    amount={props.expense[3].amount} /> */}
            </div>
        </>
    )
}

export default Expenses
