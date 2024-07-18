import {s} from "./Card.style";
import {View} from "react-native";

export const Card = ({children}) => {
  return <View style={s.card}>
    {children}
  </View>
}
