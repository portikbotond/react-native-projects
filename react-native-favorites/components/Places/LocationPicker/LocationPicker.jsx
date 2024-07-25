import {Alert, Image, Text, View} from "react-native";
import {s} from  './LocationPicker.style';
import {OutlinedButton} from "../../UI/OutlinedButton/OutlinedButton";
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from "expo-location";
import {useEffect, useState} from "react";
import {getAddress, getMapPreview} from "../../../utils/location";
import {useIsFocused, useNavigation, useRoute} from "@react-navigation/native";

export const LocationPicker = ({onPickLocation}) => {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [location, setLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused()


  useEffect(() => {
    if(isFocused && route.params) {
      const mapPickedLocation = {lat: route.params.pickedLat, lng: route.params.pickedLng};
      setLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    const handleLocations = async () => {
      if(location) {
        const address = await getAddress(location.lat, location.lng)
        onPickLocation({...location, address: address});
      }
    }

    handleLocations()
  }, [location, onPickLocation]);

  const verifyPermissions = async () => {
    if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse =  await requestPermission();

      return permissionResponse.granted;
    }

    if(locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions!', 'You need to grant location permissions to use this app.');
      return false;
    }

    return true;
  }
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if(!hasPermission) {
      return
    }

    const lct = await getCurrentPositionAsync();
    setLocation({lat: lct.coords.latitude, lng: lct.coords.longitude})
    console.log(lct)
  }

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if(location) {
    locationPreview = <Image style={s.image} source={{uri:getMapPreview(location.lat, location.lng) }} />;
  }

  return <View>
    <View style={s.mapPreview}>
      {locationPreview}
    </View>
    <View style={s.actions}>
      <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
      <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on map</OutlinedButton>
    </View>
  </View>
}
