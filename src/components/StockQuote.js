import React,{useContext} from 'react'
import {StockContext} from '../contexts/PortfolioContext';

export const StockQuote= (props) => {


    const {deleteStock} = useContext(StockContext);





    return (
    
        <li className="stock-item">
             <button className="dlt-stock" onClick={() => deleteStock(props.stock.symbol)} >x</button>{props.stock.symbol.split('.')[0]}<span className="stock-price">${props.price}</span><span>{props.stock.shares}</span><span>${parseInt(props.stock.price*props.stock.shares)}</span>
            
       </li>
    )
}

export default StockQuote;