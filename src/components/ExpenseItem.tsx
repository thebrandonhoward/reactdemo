import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props:any) {

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