import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
    const expenses:Array<{id:number, expenseDate:string|Date, expenseTitle:string, expenseAmount:string}> = [
        {
            id: Math.random(),
            expenseDate: new Date(2022, 10, 7),
            expenseTitle: 'Car Insurance',
            expenseAmount: '$200.75'
        },
        {
            id: Math.random(),
            expenseDate: new Date(2022, 10, 7),
            expenseTitle: 'Mortgage',
            expenseAmount: '$1,000.99'
        },
        {
            id: Math.random(),
            expenseDate: new Date(2022, 10, 7),
            expenseTitle: 'Internet',
            expenseAmount: '$40.25'
        }
    ];

    return(
        <Card>
            <ExpenseItem expenseDate={expenses[0].expenseDate}
                         expenseTitle={expenses[0].expenseTitle}
                         expenseAmount={expenses[0].expenseAmount}></ExpenseItem><br/>
            <ExpenseItem expenseDate={expenses[1].expenseDate}
                         expenseTitle={expenses[1].expenseTitle}
                         expenseAmount={expenses[1].expenseAmount}></ExpenseItem><br/>
            <ExpenseItem expenseDate={expenses[2].expenseDate}
                         expenseTitle={expenses[2].expenseTitle}
                         expenseAmount={expenses[2].expenseAmount}></ExpenseItem><br/>
        </Card>
    )
}

export default Expenses;