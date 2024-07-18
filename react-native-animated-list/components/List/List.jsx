import {s} from './List.style'
import {Dimensions, ScrollView} from "react-native";
import {IMAGES} from '../../constans';
import {ListItem} from "../ListItem/ListItem";
import Animated, {useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import {IMG_SIZE} from "../ListItem/ListIItem.style";

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get("screen");

export const List = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y
    }
  })

  return <Animated.ScrollView contentContainerStyle={{height: IMAGES.length*IMG_SIZE.MAX + (SCREEN_H - IMG_SIZE.MAX)}} scrollEventThrottle={16} onScroll={scrollHandler} snapToInterval={IMG_SIZE.MAX}>
    {IMAGES.map((image, index) => <ListItem image={image} scrollY={scrollY} index={index}/>)}
  </Animated.ScrollView>
}
