import React from 'react';
import Header from './components/Header';
import Totals from './components/Totals';
import Details from './components/Details';
import AddDetail from './components/AddDetail';
import PieChart from './components/PieChart';
import './index.css'
import  DataContextProvider  from './contexts/DataContext';


function App() {
  return (

    <DataContextProvider>
      
    <div className="App">
      
       <Header/>
       <div className="content">
        <div className="personal">
          <Totals/>
          <Details/>
          <AddDetail/>
        </div>
         <PieChart/>
      
      </div>
       </div>
     
    </DataContextProvider>
    
  );
}

export default App;
