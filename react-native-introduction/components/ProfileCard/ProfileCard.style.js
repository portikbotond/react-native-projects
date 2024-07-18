import {StyleSheet} from "react-native";
export const profileCardStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    elevation:1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%"
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  texts: {
    flex: 1,
    paddingLeft: 15
  },
  header: {
    flexDirection: "row"
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10
  },
  socialButton: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee"
  }
})
