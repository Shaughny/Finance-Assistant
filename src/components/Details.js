import React,{useContext, useState, useEffect} from 'react'
import Income from './Income';
import Expense from './Expense';

import {DataContext} from '../contexts/DataContext';



export const Details = () => {
    




    const {data} = useContext(DataContext);


     const expenses = data.filter((e)=>!e.isincome);
     const incomes = data.filter((e)=>e.isincome);
    
    console.log(incomes);
    console.log(expenses);

    return (
        <div className="details">
            
            <div className="incomes">
                <h4>Monthly income(s)</h4>
                <hr/>
                <ul>
                {incomes.map(income=>(<Income key={income.trans_id} income={income} /> ))}
                </ul>
            </div>
            <div className="expenses">
            <h4>Monthly expense(s)</h4>
                <hr/>
                <ul>    
                {expenses.map(expense=>( <Expense key={expense.trans_id} expense={expense} />))}     
                </ul>
                
            </div>
            
        </div>
    )
}

export default Details;
