import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span className={transaction.amount < 0 ? 'money minus' : 'money plus'}>
        {transaction.text}
      </span>
      <span className={transaction.amount < 0 ? 'money minus' : 'money plus'}>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>
  )
} 