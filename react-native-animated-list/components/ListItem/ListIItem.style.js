import {StyleSheet} from "react-native";

export const IMG_SIZE = {
  MAX:300,
  MIN:100
}

export const TITLE_FONT_SIZE = {
  MAX:30,
  MIN:0.41
}
export const s = StyleSheet.create({
  image: {
    width: '100%',
    height: IMG_SIZE.MAX
  },
  container: {
    backgroundColor: "#0000003a",
    position: "absolute",
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: TITLE_FONT_SIZE.MIN,
    textAlign: 'center'
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})
