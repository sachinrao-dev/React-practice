import React, { useState} from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){
    const [title, setTitle] = useState(props.title)
    const handler = () =>{
        setTitle('update') 
    }
    return(
        <Card>
            <ExpenseDate date = {props.date}/>
            <div>
                <h1>{title}</h1>
                <div>{props.amount}</div>
            </div>
            <button onClick={handler}>Change Event</button>
        </Card>
    )

}
export  default ExpenseItem; 