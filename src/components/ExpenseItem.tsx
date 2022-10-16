function ExpenseItem() {
    const expenseDate = new Date(2022, 10, 7);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = '$200.75';

    return (
        <div>
            <div>{expenseDate.toDateString()}</div>
            <div>
                <h2>{expenseTitle}</h2>
                <div>{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;