import {Pressable, Text} from "react-native";
import {s} from './Button.style';

export const Button = ({onPress, children}) => {
  return <Pressable
    style={({pressed}) => [s.button, pressed && s.pressed]}
    onPress={onPress}
    >
    <Text style={s.text}>{children}</Text>
  </Pressable>
}
