import {Alert, Button, View, Text, Image} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker";
import {useEffect, useState} from "react";
import {s} from './ImagePicker.style';
import {OutlinedButton} from "../../UI/OutlinedButton/OutlinedButton";

export const ImagePicker = ({onTakeImage}) => {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState('');;

  const verifyPermissions = async () => {
    if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
     const permissionResponse =  await requestPermission();

     return permissionResponse.granted;
    }

    if(cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app.');
      return false;
    }

    return true;
  }
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if(!hasPermission) {
      return;
    }

    const image = await  launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image)
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>

  if(pickedImage) {
    imagePreview = <Image style={s.image} source={{uri: pickedImage}} />
  }

  return <View>
    <View style={s.imagePreview}>
      {imagePreview}
    </View>
    <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>

  </View>
}
