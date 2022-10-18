import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props:any) => {


    return(
        <Card>
            {props.items.map((item:any) => <ExpenseItem expenseDate={item.expenseDate}
                                                     expenseTitle={item.expenseTitle}
                                                     expenseAmount={item.expenseAmount}></ExpenseItem>)}
        </Card>
    )
}

export default Expenses;