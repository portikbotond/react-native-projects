import {View, Text} from "react-native";
import {s} from './List.style';

export const List = ({data}) => {
  return data.map((dataPoint) => (
    <View style={s.listItem}>
      <Text style={s.itemText} key={dataPoint}>{dataPoint}</Text>
    </View>
    ))
}
