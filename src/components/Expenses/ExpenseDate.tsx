const ExpenseDate = (props:any) => {
    const month = props.expenseDate.toLocaleString('en-US', {month: 'long'});
    const day = props.expenseDate.toLocaleString('en-US', {day: '2-digit'});
    const year = props.expenseDate.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;