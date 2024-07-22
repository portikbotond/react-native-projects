import {Pressable, Text, View} from "react-native";
import {s} from './ExpenseItem.style'
import {getFormattedDate} from "../../../util/date";
import {useNavigation} from "@react-navigation/native";

export const ExpenseItem = ({id, description, amount, date}) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpanse', {
      expenseId: id
    })
  }

  return (<Pressable
    onPress={expensePressHandler}
    style={({pressed}) => pressed && s.pressed}
  >
    <View style={s.expenseItem}>
      <View>
        <Text style={[s.textBase, s.descriptionText]}>{description}</Text>
        <Text style={s.textBase}>{getFormattedDate(date)}</Text>
      </View>
      <View style={s.amountContainer}>
        <Text style={s.amount}>{amount.toFixed(2 )}</Text>
      </View>
    </View>
  </Pressable>)
}
