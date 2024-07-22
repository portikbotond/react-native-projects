import {createContext, useReducer} from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  setExpenses: (expeneses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, {description, amount, date}) => {}
});

const expensesReducer = (state, action) =>{
  switch (action.type) {
    case 'ADD' :
      return [action.payload, ...state];
    case 'SET' :
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpanse = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpanse, ...action.payload.data}
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

const ExpensesContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, [], );

  const addExpense = (expanseData) => {
    dispatch({type: 'ADD', payload: expanseData});
  }

  const setExpenses = (expeneses) => {
    dispatch({type: 'SET', payload: expeneses});
  }

  const deleteExpense = (id) => {
    dispatch({type: 'DELETE', payload: id});
  }

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;
