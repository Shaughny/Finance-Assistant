import React,{useState,useContext} from 'react'
import {StockContext} from '../contexts/PortfolioContext';



export const AddStock = () => {
    const [symbol,setSymbol] = useState('');
    const [shares,setShares] = useState(0);
    
    const {addStock} = useContext(StockContext);




    const handleSubmit = (e) => {
       e.preventDefault()
       addStock(symbol,shares);
       setSymbol('');
       e.target.reset();
    }

    const change = (e) =>{

        setSymbol(e.target.value);
    }




    return (
        <div className="add add-stock">
        <br></br>
        <hr></hr>
        <br></br>
        <form onSubmit={handleSubmit}>
            
            <div className="add-type">
                <label htmlFor="text">Symbol: </label>
                <input type="text"  value={symbol} required onChange={(e)=>setSymbol(e.target.value)} placeholder="Enter Stock Symbol"></input>
            </div>
            <div className="add-total" >
                <label htmlFor="total">Shares: </label>
                 <input type="number"  required onChange={(e)=>setShares(e.target.value)} placeholder="Enter # of Shares Owned"/>
            </div>
            <button  type="submit" className="btn">Add</button>
           
            
        
        </form>
    </div>
    )
}
export default AddStock;
