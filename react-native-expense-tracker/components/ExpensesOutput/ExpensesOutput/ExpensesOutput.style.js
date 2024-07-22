import {StyleSheet} from "react-native";
import {GlobalStyles} from "../../../constants/styles";

export const s = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 0,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
})
