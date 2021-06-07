import React,{useContext} from 'react'
import StockQuote from './StockQuote';

import {StockContext} from '../contexts/PortfolioContext';

export const Portfolio = () => {

    

    const {investments} = useContext(StockContext);
    let totals = 0;
   
    investments.forEach((e)=>( totals = (e.price*e.shares)+ totals));

    return (
        <div>
            <h2>Investments</h2>
            <h5 >Total Value: <span id="stock-totals" >${parseInt(totals)}</span></h5> <hr/>
            <div className="stocks-headers">
               <span>Symbol</span><span>Price</span><span>Shares</span><span> Value</span>
            </div>
           
            <div className="stocks">
             <ul>
                {investments.map(stock=>(<StockQuote key={stock.symbol} stock={stock} price={parseFloat(stock.price).toFixed(2)}/>))}
                {/* {Object.keys(investments).map((stock=>(<StockQuote key={stock.symbol} stock={stock} price={parseFloat(stock.price).toFixed(2)}/>)))} */}
            </ul> 
            </div>

           
        </div>
    )
}

export default Portfolio;