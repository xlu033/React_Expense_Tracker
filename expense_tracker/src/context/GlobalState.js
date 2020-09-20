import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
  transactions: [
      { id: 1, text:'cafe', amount: -5},
      { id: 3, text:'Salary', amount: 350},
      { id: 3, text:'Book', amount: -20},
      { id: 4, text:'Train', amount: -150},
      { id: 5, text:'Flower', amount: -35},
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
  }}>
    {children}
  </GlobalContext.Provider>);
}