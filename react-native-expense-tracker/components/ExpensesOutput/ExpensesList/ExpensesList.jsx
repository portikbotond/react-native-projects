import {FlatList, Text} from "react-native";
import {s} from './ExpensesList.style';
import {ExpenseItem} from "../ExpenseItem/ExpenseItem";

export const ExpensesList = ({expenses}) => {
  const renderExpenseItem = (itemData) => {
    return <ExpenseItem {...itemData.item} />
  }

  return <FlatList
    data={expenses}
    renderItem={renderExpenseItem}
    keyExtractor={(item) => {item.id}}
  />
}
