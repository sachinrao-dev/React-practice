import React, { useState } from "react";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [dateEntered, setEnteredDate] = useState('');


    const TitleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }


    const AmountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }


    const DateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }


    const SubmitHandler = (event) =>{
         event.preventDefault()
         const expenseData = {
            title: enteredTitle,
            amount :enteredAmount,
            date: new Date(dateEntered)
         };

         props.onSaveExpenseData(expenseData);
         setEnteredTitle('');
         setEnteredAmount('');
         setEnteredDate('');
        };

        
    return(
<form onSubmit={SubmitHandler}>
    <div>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={TitleChangeHandler}/>
    </div>

    <div>
        <label>Amount</label>
        <input type='text' value={enteredAmount} onChange={AmountChangeHandler}/>
    </div>

    <div>
        <label>Date</label>
        <input type='Date' min='2019-02-01' max='2022-02-02' value={dateEntered} onChange={DateChangeHandler}/>
    </div>
    <div>
        <button type="Submit"> Add Expense</button>
    </div>
</form>
);
}
export default ExpenseForm;