import {Text, View} from "react-native";
import {s} from './NumberContainer.style'

export const NumberContainer = ({children}) => {
  return <View style={s.container}>
    <Text style={s.text}>
      {children}
    </Text>
  </View>
}
