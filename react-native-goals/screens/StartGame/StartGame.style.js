import {Dimensions, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

// const deviceHeight = Dimensions.get('window').height

export const s = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  input:{
    height: 50,
    width: 50,
    fontSize: 22,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  },
  instructionText: {
    marginBottom: 12
  }
})
