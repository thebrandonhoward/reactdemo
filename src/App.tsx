import React from 'react';
import logo from './logo.svg';
//import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

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
        <ExpenseItem expenseDate={expenses[0].expenseDate}
                     expenseTitle={expenses[0].expenseTitle}
                     expenseAmount={expenses[0].expenseAmount}></ExpenseItem><br/>
        <ExpenseItem expenseDate={expenses[1].expenseDate}
                     expenseTitle={expenses[1].expenseTitle}
                     expenseAmount={expenses[1].expenseAmount}></ExpenseItem><br/>
        <ExpenseItem expenseDate={expenses[2].expenseDate}
                     expenseTitle={expenses[2].expenseTitle}
                     expenseAmount={expenses[2].expenseAmount}></ExpenseItem><br/>
      </body>
    </div>
  );
}

export default App;
