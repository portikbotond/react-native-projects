import {IMG_SIZE, s, TITLE_FONT_SIZE} from './ListIItem.style';
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from "react-native-reanimated";
import {Text, TouchableOpacity, View} from "react-native";

export const ListItem =({image, scrollY, index}) => {

  const imgAnimStyle=useAnimatedStyle(() => {
    const height =interpolate(scrollY.value,
      [IMG_SIZE.MAX*index, IMG_SIZE.MAX*index-IMG_SIZE.MAX ],
      [IMG_SIZE.MAX, IMG_SIZE.MIN],
      Extrapolate.CLAMP
      )
    return {
      height
    }
  })

  const textAnimStyle = useAnimatedStyle(() => {
    const fontSize =interpolate(scrollY.value,
      [IMG_SIZE.MAX*index, IMG_SIZE.MAX*index-IMG_SIZE.MAX ],
      [TITLE_FONT_SIZE.MAX, TITLE_FONT_SIZE.MIN],
      Extrapolate.CLAMP
    )
    const opacity = interpolate(scrollY.value,
      [IMG_SIZE.MAX*index, IMG_SIZE.MAX*index-IMG_SIZE.MAX + index-IMG_SIZE.MAX],
      [1, 0],
      Extrapolate.CLAMP
    )
    return {
      fontSize,
      opacity
    }
  })


  return <TouchableOpacity onPress={() => alert('You Clicked')}>
    <Animated.Image style={[s.image, imgAnimStyle]} source={image.picture}></Animated.Image>
    <View style={s.container}>
      <Text style={s.subtitle}>{image.subtitle}</Text>
      <Animated.Text style={[s.title, textAnimStyle]}>{image.title}</Animated.Text>
    </View>
  </TouchableOpacity>
}
