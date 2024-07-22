import {Text} from "react-native";
import {ExpensesOutput} from "../../components/ExpensesOutput/ExpensesOutput/ExpensesOutput";
import {useContext, useEffect, useState} from "react";
import {ExpensesContext} from "../../store/expenses-context";
import {getDateMinusDays} from "../../util/date";
import {fetchExpenses} from "../../util/http";
import {LoadingOverlay} from "../../components/UI/LoadingOverlay/LoadingOverlay";
import {ErrorOverlay} from "../../components/UI/ErrorOverlay/ErrorOverlay";

export const RecentExpanses = () => {
  const [isFetching, setIsFetching] =useState(true);
  const [error, setError] =useState();
  const expensesCtx = useContext(ExpensesContext);
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
      } catch (e) {
        setError('Could not fetch expenses!')
      }
      setIsFetching(false)
      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, []);

  const errorHandler = () => {
    setError(null)
  }

  if(error && !isFetching){
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if(isFetching) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date >= date7DaysAgo ) && (expense.date <= today);
  })
  return <ExpensesOutput
    expenses={recentExpenses }
    expensesPeriod="Last 7 Days"
    fallBackText="NO expenses registered"
  />
}
