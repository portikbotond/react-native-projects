import {Pressable, Text, View} from "react-native";
import {s} from './CategoryGritTile.style';

export const CategoryGridTile = ({title, color, onPress}) => {
  return <View style={s.gridItem}>
    <Pressable
      style={({pressed}) => [s.buttonStyle,pressed ? s.buttonPressed : null]}
      android_ripple={{color: '#ccc'}}
      onPress={onPress}
    >
      <View style={[s.innerContainer, {backgroundColor: color}]}>
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  </View>
}
