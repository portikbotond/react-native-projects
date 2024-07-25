import {Image, Pressable, Text, View} from "react-native";
import {s} from './PlaceItem.style'

export const PlaceItem = ({place, onSelect}) => {
  return (
    <Pressable onPress={onSelect.bind(this, place)} style={({pressed}) => [s.item, pressed && s.pressed]}>
      <Image style={s.image} source={{uri : place.imageUri}} />
      <View style={s.info}>
        <Text style={s.title}>{place.title}</Text>
        <Text style={s.address}>{place.address}</Text>
      </View>
    </Pressable>
  )
}
