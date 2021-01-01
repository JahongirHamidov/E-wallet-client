import React from 'react'
import './App.css';
import { AddTransaction } from './components/AddTransaction/AddTransaction';
import {Balance} from './components/Balance/Balance';
import {Header} from './components/Header/Header'
import { IncomeExpenses } from './components/IncomeExpenses/IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
