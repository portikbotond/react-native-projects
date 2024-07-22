import {Text, View} from "react-native";
import {s} from './ExpensesSummary.style';

export const ExpensesSummary = ({periodName, expenses}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);

  return (
    <View style={s.container}>
      <Text style={s.period}>{periodName}</Text>
      <Text style={s.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  )
}
