import Card                 from "../UI/Card";
import ExpenseDate          from "./ExpenseDate";
import                      './ExpenseItem.css';

const ExpenseItem = (props:{expenseDate:Date,expenseTitle:string,expenseAmount:number}) => 
{
    console.log("State Render");

    return (
        <div className="expense-item">
            <Card>
                <ExpenseDate expenseDate={props.expenseDate}></ExpenseDate>

                <div>
                    <h2>{props.expenseTitle}</h2>
                    <div>${props.expenseAmount}</div>
                </div>
            </Card>
        </div>
    );
}

export default ExpenseItem;