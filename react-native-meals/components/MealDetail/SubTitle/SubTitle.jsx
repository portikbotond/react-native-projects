import {Text, View} from "react-native";
import {s} from './SubTitle.style'

export const SubTitle = ({children}) => {
  return <View style={s.subtitleContainer}>
    <Text style={s.subTitle}>{children}</Text>
  </View>
}
