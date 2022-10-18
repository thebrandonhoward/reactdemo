import React from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props:any) => {
    const onTitleChangeHandler = () => {
     console.warn('onTitleChangeHandler!');
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
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;