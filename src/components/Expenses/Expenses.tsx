import Card             from "../UI/Card";
import ExpenseItem      from "./ExpenseItem";

const Expenses = (props:{items:{expenseDate:Date,expenseTitle:string,expenseAmount:number}[]}) => {


    return(
        <Card>
            {
                props.items.map((item:{expenseDate:Date,expenseTitle:string,expenseAmount:number}) => 
                    <ExpenseItem expenseDate={item.expenseDate}
                                 expenseTitle={item.expenseTitle}
                                 expenseAmount={item.expenseAmount}></ExpenseItem>)
            }
        </Card>
    )
}

export default Expenses;