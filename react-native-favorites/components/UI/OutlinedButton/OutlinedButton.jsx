import {Pressable, Text} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Colors} from "../../../constants/colors";
import {s} from './OutlinedButton.style'

export const OutlinedButton = ({children, icon, onPress}) => {
  return <Pressable onPress={onPress} style={({pressed}) => [s.button, pressed && s.pressed]}>
    <Ionicons style={s.icon} name={icon} size={18} color={Colors.primary500}/>
    <Text style={s.text}>{children}</Text>
  </Pressable>
}
