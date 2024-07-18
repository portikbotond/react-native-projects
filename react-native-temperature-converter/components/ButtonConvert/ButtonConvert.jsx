import {s} from './ButtonConvert.style';
import {Text, TouchableOpacity} from "react-native";
export const  ButtonConvert = ({unit, onPress}) => {
  return <TouchableOpacity onPress={onPress} style={s.button}>
    <Text style={s.text}>Convert to {unit}</Text>
  </TouchableOpacity>
}
