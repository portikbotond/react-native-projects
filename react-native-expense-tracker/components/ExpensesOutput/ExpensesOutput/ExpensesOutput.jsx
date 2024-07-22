import {Text, View} from "react-native";
import {ExpensesSummary} from "../ExpensesSummary/ExpensesSummary";
import {ExpensesList} from "../ExpensesList/ExpensesList";
import {s} from './ExpensesOutput.style';

export const ExpensesOutput = ({expenses, expensesPeriod, fallBackText}) => {
  let content = <Text style={s.infoText}>{fallBackText}</Text>

  if(expenses.length > 0) {
    content  = <ExpensesList expenses={expenses} />;
  }
  return <View style={s.container}>
    <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
    {content}
  </View>
}
