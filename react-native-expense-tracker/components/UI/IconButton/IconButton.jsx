import {Pressable, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {s} from './IconButton.style'

export const IconButton = ({icon, size, color, onPress}) => {
  return <Pressable onPress={onPress} style={({pressed}) => pressed && s.pressed}>
    <View style={s.buttonContainer}>
      <Ionicons name={icon} size={size} color={color} />
    </View>
  </Pressable>
}
