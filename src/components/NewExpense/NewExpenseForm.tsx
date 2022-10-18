import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props:any) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    const onTitleChangeHandler = (event:any) => {
     console.warn(event.target.value);
     // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
     console.log(userInput.enteredTitle);
    }
    const onAmountChangeHandler = (event:any) => {
        console.warn(event.target.value);
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
        console.log(userInput.enteredAmount);
    }
    const onDateChangeHandler = (event:any) => {
        console.warn(event.target.value);
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        })
        console.log(userInput.enteredDate);
    }

    return(
        <form>
            <div>
                <div>
                    <label>Title</label>
                    <input type='text' onChange={onTitleChangeHandler}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={onAmountChangeHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2022-12-31' onChange={onDateChangeHandler}/>
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;