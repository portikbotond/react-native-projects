import {ExpensesOutput} from "../../components/ExpensesOutput/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../../store/expenses-context";

export const AllExpanses = () => {
  const expensesCtx =useContext(ExpensesContext);
  return <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} fallBackText="No expenses registered"/>
}
