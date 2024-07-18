import {StyleSheet} from "react-native";
import Colors from "../../../constants/colors";

export const s  = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    alignItems:'center'
  },
})
