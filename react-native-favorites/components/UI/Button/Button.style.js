import {StyleSheet} from "react-native";
import {Colors} from "../../../constants/colors";

export const s = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pressed: {
    opacity: 0.7
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary50
  }
})
