import {FlatList, Text, View} from "react-native";
import {PlaceItem} from "../PlaceItem/PlaceItem";
import {s} from './PlacesList.style'
import {useNavigation} from "@react-navigation/native";

export const PlacesList = ({places}) => {
  const navigation = useNavigation();

  if(!places || places.length === 0) {
    return <View style={s.fallbackContainer}>
      <Text style={s.fallbackText}>No places added yet!</Text>
    </View>
  }

  const handlePlaceSelect = (item) => {
    navigation.navigate('PlaceDetails', {
      place: item
    })
  }
  return <FlatList
    style={s.list}
    data={places}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <PlaceItem place={item} onSelect={handlePlaceSelect}/>}
  />
}
