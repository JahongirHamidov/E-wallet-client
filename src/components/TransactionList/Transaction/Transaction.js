import React from 'react'

export const Transaction = ({amount, text}) => {
    const sign = amount>0 ? '+' : '-' 
    const borderColor = sign === '+' ? 'plus' : 'minus' 
    return (
        <div>
            <li className={borderColor}>
                {text} 
                <span>{`${sign}$${Math.abs(amount)}`}</span>
                <button className="delete-btn">x</button>
            </li>
        </div>
    )
}
