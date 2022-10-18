import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props:any) => {
    const onSaveExpenseDataHandler = (enteredExpenseData:{}) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expenseData);

        props.onAddExpenseHandler(expenseData);
    }

    return (
        <div className=''>
            <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></NewExpenseForm>
        </div>
    );
}

export default NewExpense;