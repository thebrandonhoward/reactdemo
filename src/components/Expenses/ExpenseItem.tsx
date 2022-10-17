import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props:any) => {
    const [ expenseTitle, setExpenseTitle ] = useState(props.expenseTitle);
    const [ expenseDate, setExpenseDate ] = useState(props.expenseDate);
    const [ expenseAmount, setExpenseAmount ]= useState(props.expenseAmount);

    const onClickHandler = () => {
        console.log("Clicked!");
        setExpenseAmount(expenseAmount + 1.00);
    }

    return (
        <Card>
            <ExpenseDate expenseDate={expenseDate}></ExpenseDate>

            <div>
                <h2>{expenseTitle}</h2>
                <div>{expenseAmount}</div>
            </div>

            <button onClick={onClickHandler}>Change Item</button>
        </Card>
    );
}

export default ExpenseItem;