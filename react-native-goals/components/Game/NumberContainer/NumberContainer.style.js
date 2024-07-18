import Colors from "../../../constants/colors";
import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color:Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
})
