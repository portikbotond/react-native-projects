import {Pressable, Text, View} from "react-native";
import {s} from './Button.style';

export const Button = ({children, onPress, mode, style}) => {
  return <View style={style}>
    <Pressable onPress={onPress} style={({pressed}) => pressed && s.pressed}>
      <View style={[s.button, mode === 'flat' && s.flat]}>
        <Text style={[s.buttonText, mode ==='flat' && s.flatText]}>{children}</Text>
      </View>
    </Pressable>
  </View>
}
