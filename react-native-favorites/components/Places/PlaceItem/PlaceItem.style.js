import {StyleSheet} from "react-native";
import {Colors} from "../../../constants/colors";

export const s = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
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
    opacity: 0.9
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 100
  },
  info: {
    flex: 2,
    padding: 12
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray700
  },
  address: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.gray700
  }
})
