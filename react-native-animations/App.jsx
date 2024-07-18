import {View} from "react-native"
import {s, CIRCLE_RADIUS, CIRCLE_PERIMETER, SQUARE_SIZE} from './App.style';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming
} from "react-native-reanimated";
import {useEffect} from "react";
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";

export default function App() {
  const squareAnimTranslateX = useSharedValue(0);
  const squareAnimTranslateY = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler( {
    onStart:(e, ctx) =>{
      ctx.initialXPos = squareAnimTranslateX.value;
      ctx.initialYPos = squareAnimTranslateY.value;
    },
    onActive:(e, ctx) => {
      console.log('w', e)
      squareAnimTranslateX.value = ctx.initialXPos + e.translationX;
      squareAnimTranslateY.value = ctx.initialYPos + e.translationY;
      // squareAnimTranslateY.value = e.translateY

    },
    onEnd:() => {
      const ditanceFromCenter = Math.sqrt(squareAnimTranslateX.value **2 + squareAnimTranslateY.value**2)
      if(ditanceFromCenter < CIRCLE_RADIUS) {
        squareAnimTranslateX.value = withSpring(0);
        squareAnimTranslateY.value = withSpring(0);
      } 
    }
  })

  const squareAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: squareAnimTranslateY.value},
        {translateX: squareAnimTranslateX.value}
      ]
    }
  })

  return(
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={s.root}>
        <View style={s.circle}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[s.square, squareAnimatedStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>

  )
}

// export default function App (){
//   const squareAnimX = useSharedValue(0);
//   const squareAnimY = useSharedValue(0);
//   const squareAnimOpacity = useSharedValue(1);
//
//   useEffect(() => {
//     // squareAnimX.value = withTiming(330, {duration: 2000}, () => {
//     //   squareAnimY.value = withTiming(400, {duration: 4000})
//     //   squareAnimOpacity.value = withTiming(1, {duration: 4000})
//     // })
//     // squareAnimOpacity.value = withTiming(0, {duration: 2000})
//     squareAnimX.value = withRepeat(withSpring(300 ), -1)
//   }, []);
//
//   const squareAnimStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: squareAnimX.value
//         },
//         {
//           translateY: squareAnimY.value
//         }
//       ],
//       opacity: squareAnimOpacity.value
//     }
//   })
//   return <>
//     <View style={s.root}>
//         <Animated.View style={[s.square, squareAnimStyle]}/>
//     </View>
//   </>
// }
