import {StyleSheet} from "react-native";
export const SQUARE_SIZE = 100;
export const CIRCLE_PERIMETER = 400;
export const CIRCLE_RADIUS = CIRCLE_PERIMETER /2;
export const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    backgroundColor: 'orange',
    borderRadius: 15
  },
  circle: {
    borderWidth: 5,
    borderColor: 'orange',
    height: CIRCLE_PERIMETER,
    width: CIRCLE_PERIMETER,
    borderRadius: CIRCLE_RADIUS,
    justifyContent: 'center',
    alignItems: "center"
  }
})
