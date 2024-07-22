import {ActivityIndicator, View} from "react-native";
import {s} from './LoadingOverlay.style'

export const LoadingOverlay = () => {
  return <View style={s.container}>
    <ActivityIndicator size="large" color="white"></ActivityIndicator>
  </View>
}
