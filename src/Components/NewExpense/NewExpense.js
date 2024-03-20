import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const savedDataPointer = (newExpenseData) =>{
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        props.onSavedExpense(expenseData);
        setFormHide(false);
    };
    

    const [formHide, setFormHide] = useState(false);

    const expenseFormHandler = () =>{
        setFormHide(true);
    }

    const addExpenseHandler = () =>{
        setFormHide(false);
    }

    return (
        <div className='new-expense'>
            {!formHide && <button onClick={expenseFormHandler}>Add new Expense</button>}
            {formHide && <ExpenseForm onButtonClick={addExpenseHandler} onSavedData={savedDataPointer}/>}
        </div>
    );
};

export default NewExpense;