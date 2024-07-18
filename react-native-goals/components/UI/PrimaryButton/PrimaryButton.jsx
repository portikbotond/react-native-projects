import {View, Text, TouchableOpacity} from "react-native";
import {s} from './PrimaryButton.style';

export const PrimaryButton = ({children, onPress}) => {
  return <TouchableOpacity onPress={onPress}>
    <View style={s.button}>
      <Text style={s.buttonText}>{children}</Text>
    </View>
  </TouchableOpacity>
}
