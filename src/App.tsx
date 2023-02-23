import React                            from 'react';
import logo                             from './logo.svg';
import                                  './App.css';
import Expenses                         from './components/Expenses/Expenses';
import NewExpense                       from './components/NewExpense/NewExpense';
import { getExpenses as GetExpenses }   from './common/expenses';

const App = () => 
{
  const expenses:{id:number,expenseDate:Date,expenseTitle:string,expenseAmount:number}[] = GetExpenses();

  const onAddExpenseHandler = (expense:{}) => 
  {
    console.log('App.tsx');
    console.log(expense);
  }

  return (
    <div className="app">
      <body>
        <NewExpense onAddExpenseHandler={onAddExpenseHandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
      </body>
    </div>
  );

}

export default App;
