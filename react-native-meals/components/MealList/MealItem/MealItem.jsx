import {Text, View, Image, TouchableOpacity} from "react-native";
import {s} from './MealItem.style'
import {useNavigation} from "@react-navigation/native";
import {MealDetails} from "../../MealDetails/MealDetails";

export const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('MealDetails', {mealId: id});
  }

  return (
    <View style={s.mealItem}>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={s.innerContainer}>
          <View>
            <Image style={s.image} source={{uri: imageUrl}}/>
            <Text style={s.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}
