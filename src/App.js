import React,{useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';



const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {

  const [existingExpenses, newExpenses] = useState(expenses);


  const newExpenseDataHandler = (newExpenseData) => {
    newExpenses((expenses) =>{
      return[newExpenseData, ...expenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onSavedExpense={newExpenseDataHandler} />
      <Expenses items={existingExpenses} />
    </div>
  );
}

export default App;
