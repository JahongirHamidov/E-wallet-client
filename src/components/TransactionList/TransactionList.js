import React, {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'
import {Transaction} from './Transaction/Transaction'

export const TransactionList = () => {
    
    const {transactions} = useContext(GlobalContext)


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>(
                   <Transaction key={transaction.id} amount={transaction.amount} text={transaction.text} />
                ))}
            </ul>
        </>
    )
}
