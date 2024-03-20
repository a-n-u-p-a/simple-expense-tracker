import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setNewTitle] = useState('');
    const [enteredAmount, setNewAmount] = useState('');
    const [enteredDate, setNewDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSavedData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    };

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-exepnse__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2025-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                </div>

                <div className='new-expense__actions'>
                    <button onClick={props.onButtonClick} type='button'>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;