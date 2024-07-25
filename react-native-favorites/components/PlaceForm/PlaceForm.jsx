import {ScrollView, Text, TextInput, View} from "react-native";
import {s} from './PlaceForm.style';
import {useCallback, useState} from "react";
import {ImagePicker} from "../Places/ImagePicker/ImagePicker";
import {LocationPicker} from "../Places/LocationPicker/LocationPicker";
import {Button} from "../UI/Button/Button";
import {Place} from "../../models/place";

export const PlaceForm = ({createPlaceHandler}) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  }

  const onTakeImage = (imageUri) => {
    setSelectedImage(imageUri)
  }

  const onPickLocation = useCallback((location) => {
    setSelectedLocation(location);
  }, [])

  const savePlaceHandler = () => {

    const place = new Place(
      enteredTitle,
      selectedImage,
      selectedLocation
    )
    createPlaceHandler(place)
  }

  return (
    <ScrollView style={s.form}>
      <View>
        <Text style={s.label}>Title</Text>
        <TextInput
          style={s.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={onTakeImage} />
      <LocationPicker onPickLocation={onPickLocation} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  )
}
