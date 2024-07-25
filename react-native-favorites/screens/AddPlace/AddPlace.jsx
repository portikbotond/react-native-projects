import {PlaceForm} from "../../components/PlaceForm/PlaceForm";

export const AddPlace = ({navigation}) => {
  const createPlaceHandler = (place) => {
    navigation.navigate('AllPlaces', {
      place: place
    })
  }

  return <PlaceForm createPlaceHandler={createPlaceHandler} />
}
