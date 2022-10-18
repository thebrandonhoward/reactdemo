import React from 'react';
import logo from './logo.svg';
//import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const onAddExpenseHandler = (expense:{}) => {
    console.log('App.tsx');
    console.log(expense);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <body>
        <NewExpense onAddExpenseHandler={onAddExpenseHandler}></NewExpense>
        <Expenses></Expenses>
      </body>
    </div>
  );
}

export default App;
