import React, {useContext} from 'react';
import {DataContext} from '../contexts/DataContext';

export const Totals = () => {

    const {data} = useContext(DataContext);
    let expenses = [];
    let incomes = [];
    console.log(data);
    // data.forEach(e => {

    //     if(e.isincome){
    //         incomes.push(e)
    //     }
    //     else{
    //         expenses.push(e)
    //     }

    // })
    Object.keys(data).forEach((e)=>{
        if(e.isincome){
            incomes.push(e)
        }
        else{
            expenses.push(e)
        }
    })


   
    let totalExpense = 0;
    let totalIncome = 0;
    incomes.forEach(e => totalIncome = parseInt(totalIncome)  + parseInt(e.total) );
    expenses.forEach(e=> totalExpense = parseInt(totalExpense)  + parseInt(e.total) );

    return (
        <div className="totals-container">
            <div>
                <h3 id="income-head">Total Income</h3>
                <p className="total-income total">${totalIncome}</p>
            </div>
            <div>
                <h3 id="expense-head">Total Expenses</h3>
                <p className = "total-expenses total">${totalExpense}</p>
            </div>
            <div>
                <h3>Balance</h3>
                <p className="total-net total">${totalIncome-totalExpense}</p>
            </div>
           
        </div>
    )
}

export default Totals;