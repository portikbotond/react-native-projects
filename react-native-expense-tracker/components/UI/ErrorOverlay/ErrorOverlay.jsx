import {Text, View} from "react-native";
import {Button} from "../Button/Button";
import {s} from './ErrorOverlay.style';
export const ErrorOverlay = ({message, onConfirm}) => {
  return <View style={s.container}>
    <Text style={[s.text, s.title]}>An error occurend!</Text>
    <Text style={s.text}>{message}</Text>
    <Button onPress={onConfirm}>Okay</Button>
  </View>
}
