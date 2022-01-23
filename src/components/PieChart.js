import React,{useContext, useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';
import {DataContext} from '../contexts/DataContext';



export const PieChart = () => {

    const {data} = useContext(DataContext);
    const expenses = data.filter((e)=>!e.isincome);
    const incomes = data.filter((e)=>e.isincome);
    // const expenses =  Object.keys(data).filter((e)=>!e.isincome);
    // const incomes = Object.keys(data).filter((e)=>e.isincome);
    let totalExpense = 0;
    let totalIncome = 0;
    incomes.forEach(e => totalIncome = parseInt(totalIncome)  + parseInt(e.total) );
    expenses.forEach(e=> totalExpense = parseInt(totalExpense)  + parseInt(e.total) );
    let chartData = {};
  
    const options = {
        plugins:{
            tooltip:{
                bodyFont:{
                    size:18
                }
            },
            legend:{
                labels:{
                    color: 'white',
                    font:{
                        size: 20
                    }
                },
                borderWidth: 0
            }
        },
        elements: {
          arc: {
            borderWidth: 2
          }
        }
      };

        chartData = {
            fontColor:'white',
            font:{size: 20},
            labels:["Spent","Remaining"],
            datasets:[{
                borderColor:'white',
                label:'transactions',
                data:[totalExpense,(totalIncome-totalExpense)],
                backgroundColor:['#ff0000','#61892f'],
                
            }]
        }
        if(totalIncome-totalExpense < 0){
            chartData = {
                fontColor:'white',
                font:{size: 20},
                labels:["Spent","Remaining"],
                datasets:[{
                    borderColor:'#474b4f',
                    label:'transactions',
                    data:[totalExpense,(0)],
                    backgroundColor:['#ff0000','#61892f'],
                    
                }]
            }

        }
    
   
    
    if(totalExpense+totalIncome >0){
        return (
                <div className="charts">
                    <Doughnut
                    data={chartData}
                    height={100}
                    width={100}
                    options={options}
                    />
                </div>
            )

    }    
    else{
        return(
            <div className="empty-graph">
                <h5>Add an Income/Expense for a Graph</h5>
            </div>
        )
    }
    
   
}

export default PieChart;

