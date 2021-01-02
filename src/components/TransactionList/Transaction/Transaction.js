import React,{useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState'

export const Transaction = ({amount, text, id}) => {
    const sign = amount>0 ? '+' : '-' 
    const borderColor = sign === '+' ? 'plus' : 'minus' 
    const {deleteTransaction} = useContext(GlobalContext)
    
    return (
        <div>
            <li className={borderColor}>
                {text} 
                <span>{`${sign}$${Math.abs(amount)}`}</span>
                <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
            </li>
        </div>
    )
}
