import {Pressable} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {s} from './IconButton.style';

export const IconButton = ({icon, size, color, onPress}) => {
  return <Pressable style={(pressed) => [s.button, pressed && s.pressed]} onPress={onPress}>
    <Ionicons name={icon} size={size} color={color}/>
  </Pressable>
}
