import React, {useState} from 'react';
import ExpenseItem from './component/ExpenseItem';
import NewExpense from './component/NewExpense';
import './App.css';


const Dummy =[
  {title: 'Random', amount: 12, date: new Date(2022, 2, 12)},
  { title: 'Toilet paper', amount: 12, date: new Date(2023, 3, 12)},
  { title: 'Car Insurance', amount: 12, date: new Date(2021, 4 , 12)}
];

function App(props) {
 const [expense, setExpenses] = useState(Dummy);
const addExpenseDataHandler = (expense) =>{
  console.log("App .js");
  console.log(expense);
}

  return (
    <div >
      <NewExpense onAddExpense ={addExpenseDataHandler}/>
    {/* {props.map((expenses)=>{ */}
      {/* <ExpenseItem title = {expenses.title} amount = {expenses.amount} date = {expenses.date}/> */}

    {/* // })} */}
      <ExpenseItem title = {expense.title} amount ={expense.amount} date = {expense.date}/>
    </div>
  );
}

export default App;
