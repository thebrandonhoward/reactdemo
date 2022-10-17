import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props:any) => {

    const onClickHandler = () => {
        console.log("Clicked!");
    }

    return (
        <Card>
            <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>

            <div>
                <h2>{props.expenseTitle}</h2>
                <div>{props.expenseAmount}</div>
            </div>

            <button onClick={onClickHandler}>Change Item</button>
        </Card>
    );
}

export default ExpenseItem;