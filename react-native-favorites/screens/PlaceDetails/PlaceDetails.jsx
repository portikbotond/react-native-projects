import {ScrollView, Image, Text, View} from "react-native";
import {OutlinedButton} from "../../components/UI/OutlinedButton/OutlinedButton";
import {s} from './PlaceDetails.style';
import {useLayoutEffect} from "react";

export const PlaceDetails = ({route, navigation}) => {
  const selectedPlace = route.params.place;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedPlace.title,
      headerBackTitle: 'Back'
    })
  }, []);

  const showOnMapHandler = () => {
    navigation.navigate('Map', {
      initialLat: selectedPlace.location.lat,
      initialLng: selectedPlace.location.lng
    })
  }

  return <ScrollView>
    <Image style={s.image} source={{uri: selectedPlace.imageUri}}/>
    <View style={s.locationContainer}>
      <View style={s.addressContainer}>
        <Text style={s.address}>{selectedPlace.address}</Text>
      </View>
      <OutlinedButton icon="map" onPress={showOnMapHandler}>View on Map</OutlinedButton>
    </View>
  </ScrollView>
}
