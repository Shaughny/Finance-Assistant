import React, {useContext} from 'react';
import {DataContext} from "../contexts/DataContext";

export const Expense = (props) => {

        const {deleteData} = useContext(DataContext);



    return (
        <li className="expense-item">
          <button className="dlt" onClick={() => deleteData(props.expense)}>x</button> {props.expense.type}<span className="expense-detail">${props.expense.total}</span>
        </li>
    )
}

export default Expense;