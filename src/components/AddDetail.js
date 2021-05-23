import React,{useState,useContext} from 'react'
import {DataContext} from "../contexts/DataContext";


export const AddDetail = () => {

    const [source,setSource] = useState('');
    const [total,setTotal] = useState('');
    const [type,setType] = useState('income');

    const {addIncome} = useContext(DataContext);
    const {addExpense} = useContext(DataContext);
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if(type === "income"){
            addIncome(source,total);
            setSource("");
            e.target.reset();
        }
        else{
            addExpense(source,total);
            setSource('');
            e.target.reset();
        }  
    }

    const change = (e) =>{

        setType(e.target.value);
    }

    return (
        <div className="add">
            <br></br>
            <h4 id="add">Add Income or Expense</h4>
            <hr></hr>
            <br></br>
            <form onSubmit={handleSubmit}>
                
                <div className="add-type">
                    <label htmlFor="text">Type: </label>
                    <input type="text"  value={source} required onChange={(e)=>setSource(e.target.value)} placeholder="Enter Type"></input>
                </div>
                <div className="add-total" >
                    <label htmlFor="total">Total: </label>
                     <input type="number"  onChange={(e)=>setTotal(e.target.value)} placeholder="Enter Total"/>
                </div>


                <button  type="submit" className="btn">Add</button>
                <div className="select">
                    <select value={type} onChange={change}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                </div>
                
            
            </form>
        </div>
    )
}

export default AddDetail;