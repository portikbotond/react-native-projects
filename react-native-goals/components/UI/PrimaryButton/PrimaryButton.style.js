import {StyleSheet} from "react-native";
import Colors from "../../../constants/colors";

export const s = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    margin: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})
