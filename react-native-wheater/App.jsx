import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {s} from './App.style'
import {Home} from "./pages/Home/Home";
import {Alert, ImageBackground} from "react-native";
import {useEffect, useState} from "react";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import {MeteoApi} from "./api/meteo";
import {useFonts} from "expo-font";
import { NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Forecasts} from "./pages/Forecasts/Forecasts";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: 'transparent'
  }
}

const background = require('./assets/images/background.png')
export default function App(){
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity]= useState();
  const [isFontLoaded] = useFonts({"Alata-Regular": require('./assets/fonts/Alata-Regular.ttf')});

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if(coordinates) {
      fetchWeatherByCoords();
      fetchCityByCoords()
    }
  }, [coordinates]);

  const fetchWeatherByCoords = async () => {
    const weatherResponse = await  MeteoApi.fetchWeatherByCoords(coordinates);
    setWeather(weatherResponse);
  }

  const fetchCityByCoords = async () => {
    const cityResponse = await  MeteoApi.fetchCityByCoords(coordinates);
    setCity(cityResponse);
  }

  const fetchChoordsByCity = async (city) => {
    try {
      const coordResponse = await  MeteoApi.fetchCoordsByCity(city);
      setCoordinates(coordResponse);
    } catch (e) {
      Alert.alert("Ezt elkúrtad te állat!" , e);
    }

  }

  const getUserCoordinates = async () => {
   const {status} =  await requestForegroundPermissionsAsync();
   if(status === 'granted'){
     const location = await getCurrentPositionAsync()
     setCoordinates({lat: location.coords.latitude, lng: location.coords.longitude})
   }else {
      setCoordinates({lat: "48.85", lng: "2.35"})
   }
  }

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground imageStyle={s.img} style={s.img_background}source={background}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather &&
              <Stack.Navigator screenOptions={{headerShown: false, animation:'fade' }} initialRouteName="Home">
                <Stack.Screen name="Home">
                  {() => <Home city={city} weather={weather} onSubmitSearch={fetchChoordsByCity}></Home>}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
);
}
