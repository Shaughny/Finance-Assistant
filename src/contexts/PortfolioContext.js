import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
export const StockContext = createContext();


const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query'
});

toast.configure();

export const StockContextProvider = ({children})=>{


    const[investments, setInvestments] = useState([
        
        
    ])

    const notify = () =>{
        toast.error("Couldn't locate a stock with that symbol!");
    }


    const getStockQuote = (symbol) =>{
        return axiosInstance.get('',{
        params:{
            function: 'GLOBAL_QUOTE',
            symbol,
            apikey: '3H68FKF113QNYK6X'
        }
    })
    }

        const fetchStockData = async(symbol,shares) =>{

            try {
           
                axios.get('https://mofinance.herokuapp.com/stocks/get').then((response) =>{
                setInvestments(response.data)
                })
            
        } catch (error) {
            console.log(error.message);
        }
        }


    useEffect(()=>{
        fetchStockData();
    },[])

    const deleteStock = (symbol) =>{
         
         axios.delete(`https://mofinance.herokuapp.com/stocks/delete/${symbol}`).then(()=>{
                    fetchStockData();
                 })
        const temp = investments.filter(e => e.symbol !== symbol);
            setInvestments(temp);
    }

    const addStock = async(symbol,shares) =>{
        const result = await getStockQuote(symbol.toUpperCase());

        console.log((result.data['Global Quote']));
       
        if(result.data['Global Quote'][`01. symbol`] === undefined){
            notify();
       }
       else{

        try {

            axios.post('https://mofinance.herokuapp.com/stocks/insert',
            {symbol:result.data['Global Quote']['01. symbol'],
            price:result.data['Global Quote']['05. price'],
            shares:shares
            }).then(()=>{
               
            })

            setInvestments([...investments,{symbol: result.data['Global Quote']['01. symbol'],price: result.data['Global Quote']['05. price'],shares:shares}]);
        } 
        catch(e){
           console.log(e.message) 
        } 
        
       }   
    }



    
    return (
        <StockContext.Provider value={{investments,getStockQuote,deleteStock,addStock}}>
            {children}
        </StockContext.Provider>
    )

}
export default StockContextProvider;    