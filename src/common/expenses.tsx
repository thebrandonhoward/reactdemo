export const getExpenses = ():{id:number, expenseDate:Date, expenseTitle:string, expenseAmount:number}[]=> 
{
    return [
                {
                id: Math.random(),
                expenseDate: new Date(2022, 10, 7),
                expenseTitle: 'Car Insurance',
                expenseAmount: 200.75
                },
                {
                id: Math.random(),
                expenseDate: new Date(2022, 10, 7),
                expenseTitle: 'Mortgage',
                expenseAmount: 1_000.99
                },
                {
                id: Math.random(),
                expenseDate: new Date(2022, 10, 7),
                expenseTitle: 'Internet',
                expenseAmount: 40.25
                }
            ];
}