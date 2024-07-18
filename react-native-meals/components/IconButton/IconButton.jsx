import {Pressable} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {s} from './IconButton.style';
export const IconButton = ({icon, color, onPress}) => {
  return <Pressable onPress={onPress}  style={({pressed}) => pressed && s.pressed}>
    <Ionicons name={icon} size={24} color={color}/>
  </Pressable>
}
