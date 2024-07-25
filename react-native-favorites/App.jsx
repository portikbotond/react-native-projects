import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StatusBar} from "expo-status-bar";
import {AllPlaces} from "./screens/AllPlaces/AllPlaces";
import {AddPlace} from "./screens/AddPlace/AddPlace";
import {NavigationContainer} from "@react-navigation/native";
import {IconButton} from "./components/UI/IconButton/IconButton";
import {Colors} from "./constants/colors";
import {Map} from "./screens/Map/Map";
import {PlaceDetails} from "./screens/PlaceDetails/PlaceDetails";

const Stack = createNativeStackNavigator();

 export default function App(){

  return (
    <>
    <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500
            },
            headerTintColor: Colors.gray700,
            contentStyle: {backgroundColor: Colors.gray700}
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your favorite places',
              headerRight: ({tintColor}) =>(
              <IconButton
                icon="add"
                color={tintColor}
                size={24}
                onPress={() => navigation.navigate('AddPlace')}
              />)
              })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
              headerBackTitle: 'Back'
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    )
 }

