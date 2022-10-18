import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props:any) => {

    console.log("State Render");

    return (
        <Card>
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>

            <div>
                <h2>{props.expenseTitle}</h2>
                <div>{props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;