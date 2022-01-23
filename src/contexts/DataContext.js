import React,{createContext, useState, useEffect} from 'react'
import Axios from 'axios';


export const DataContext = createContext();

export const DataContextProvider = ({children}) => {
    
    const[data, setData] = useState([
    
    ])
    const getData =() => {
        try {
           
                Axios.get('https://mofinance.herokuapp.com/trans/get').then((response) =>{
                setData(response.data)
                })
            
        } catch (error) {
            console.log(error.message);
        }

    }

     useEffect(() => {
        getData();
    },[]);

const addExpense = (type,total) =>{
        try {

            Axios.post('https://mofinance.herokuapp.com/trans/insert',
            {type:type,
            total:total,
            isincome:false
            }).then(()=>{
               
            })
         setData([...data,{type:type,total:total,isincome:false,trans_id:null}])
            
        } 
        catch(e){
           console.log(e.message) 
        }
    }
    

    const addIncome = (type,total) =>{

        try {

            Axios.post('https://mofinance.herokuapp.com/trans/insert',
            {type:type,
            total:total,
            isincome:true
            }).then(()=>{
               
            })
             setData([...data,{type:type,total:total,isincome:true,trans_id:null}])
        } 
        catch(e){
           console.log(e.message) 
        }

    }
    const deleteData = (trans) =>{
       
        if(trans.trans_id == null){

            Axios.delete(`https://mofinance.herokuapp.com/trans/delete/${trans.type}`).then(()=>{
                getData();
            })
            
            const temp = data.filter(e => e.type !== trans.type && e.total !== trans.total);
            setData(temp);
         }
         else{
                const trans_id = trans.trans_id;
                        
                Axios.delete(`https://mofinance.herokuapp.com/trans/delete/${trans_id}`).then(()=>{
                    getData();
                 })
         const temp = data.filter(e => e.trans_id !== trans_id);
            setData(temp);
         }

       
    }





   





    


    return (
        <DataContext.Provider value={{data,addExpense,addIncome,deleteData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
