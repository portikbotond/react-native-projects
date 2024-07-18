import {Platform, StyleSheet} from "react-native";

export const  s = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? "hidden" : 'visible'
  },
})
