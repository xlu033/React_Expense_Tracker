import React, { useState }  from 'react'
import { IncomeExpenses } from './IncomeExpenses'

export const AddTransaction = () => {
    const [text, setText] = useState(' ');
    const [amount, setAmount] = useState(' ');

    return (
        <div>
            <h3>Add new Transaction</h3>
            
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}