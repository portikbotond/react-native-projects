import MapView, {Marker} from "react-native-maps";
import {s} from './Map.style';
import {useCallback, useLayoutEffect, useState} from "react";
import {Alert} from "react-native";
import {IconButton} from "../../components/UI/IconButton/IconButton";

export const Map = ({navigation, route}) => {
  const initLocation = route.params && {lat: route.params.initialLat, lng: route.params.initialLng};

  const [selectedLocation, setSelectedLocation] = useState(initLocation)

  const region = {
    latitude: initLocation ? initLocation.lat : 37.78,
    longitude: initLocation? initLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.421,
  };

  const  selectLocationHandler = (event) => {
    if(initLocation) {
      return
    }
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude
    setSelectedLocation({
      lat: lat,
      lng: lng
    })
  }

  const savePickedLocationHandler = useCallback(() => {
    if(!selectedLocation) {
      Alert.alert('No location picked', 'You have to pick a location!');
      return;
    }

    navigation.navigate('AddPlace', {pickedLat: selectedLocation.lat, pickedLng: selectedLocation.lng});
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if(initLocation) {
      return;
    }
    navigation.setOptions({
      headerRight: ({tintColor}) => <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
    })
  }, [navigation, savePickedLocationHandler, initLocation]);

  return <MapView
    style={s.map}
    initialRegion={region}
    onPress={selectLocationHandler}
  >
    {selectedLocation && <Marker
      title="Picked Location"
      coordinate={{
        latitude: selectedLocation.lat,
        longitude: selectedLocation.lng
      }}
    />}
  </MapView>
}
