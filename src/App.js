import React from 'react';
import Header from './components/Header';
import Totals from './components/Totals';
import Details from './components/Details';
import AddDetail from './components/AddDetail';
import PieChart from './components/PieChart';
import './index.css'
import  DataContextProvider  from './contexts/DataContext';
import StockContextProvider from './contexts/PortfolioContext';
import Porfolio from './components/Portfolio';
import AddStock from './components/AddStock';
import 'react-toastify/dist/ReactToastify.css';
import {toast,ToastContainer} from 'react-toastify';
import {Helmet} from 'react-helmet';

function App() {
  return (

    <DataContextProvider>
    <StockContextProvider>
      <ToastContainer/>
    <div className="App">
      <Helmet>
        <title>Personal Finances Tracker</title>
        <meta name="description" content="Track all of your personal finances!" />
      </Helmet>
       <Header/>
       <div className="content">
        <div className="personal">
          <Totals/>
          <Details/>
          <AddDetail/>
        </div>
         <PieChart/>
         <div className="portfolio">
          <Porfolio/>
          <AddStock/>
         </div>
      
      </div>
       </div>
       </StockContextProvider>
    </DataContextProvider>
    
  );
}

export default App;
