import React, { useContext, useState }  from 'react'
import { GlobalContext } from '../context/GlobalState';
import { IncomeExpenses } from './IncomeExpenses'

export const AddTransaction = () => {
    const [text, setText] = useState(' ');
    const [amount, setAmount] = useState(' ');

    const { addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h4>Add New Transaction</h4>
            
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <div class="container">
                    <button className="btn">add transaction</button>
                </div>
            </form>
        </div>
    )
}