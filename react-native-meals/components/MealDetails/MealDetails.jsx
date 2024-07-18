import {s} from './MealDetails.style';
import {Text, View} from "react-native";
export const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return <View style={[s.details, style]}>
    <Text style={[s.detailItem, textStyle]}>{duration}m</Text>
    <Text style={[s.detailItem, textStyle]}>{complexity.toString().toUpperCase()}</Text>
    <Text style={[s.detailItem, textStyle]}>{affordability.toString().toUpperCase()}</Text>
  </View>
}
