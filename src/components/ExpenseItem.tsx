import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props:any) {

    return (
        <div>
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>

            <div>
                <h2>{props.expenseTitle}</h2>
                <div>{props.expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;