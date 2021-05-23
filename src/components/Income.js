import React, {useContext} from 'react'
import {DataContext} from "../contexts/DataContext";



export const Income = (props) => {

    const {deleteData} = useContext(DataContext);


    return (
        <li className="income-item">
        <button className="dlt" onClick={() => deleteData(props.income)}>x</button>{props.income.type}<span className="income-detail">${props.income.total}</span>
        </li>
    )
}

export default Income;
