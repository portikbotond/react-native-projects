import {Platform, StyleSheet} from "react-native";

export const s = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
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
  buttonStyle: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  }
})
