import {s} from './AllPlaces.style';
import {PlacesList} from "../../components/Places/PlacesList/PlacesList";
import {useEffect, useLayoutEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AllPlaces = ({route}) => {
  const isFocused = useIsFocused();
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const places = await AsyncStorage.getItem('places');
      if(places.length) {
        setLoadedPlaces((prev) => [...JSON.parse(places)])
      }
    }

    if(!loadedPlaces.length)
    fetchData()

  }, []);

  useEffect(() => {
    if(isFocused && route.params) {
      setLoadedPlaces((current) => {
        AsyncStorage.setItem('places',JSON.stringify([
          ...current, route.params.place
      ]))
        return [
        ...current, route.params.place
      ]})
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlaces} />;
}
