import {CategoriesScreen} from "./screens/CategoriesScreen/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealsOverviewScreen} from "./screens/MealsOverviewScreen/MealsOverviewScreen";
import {MealDetailsScreen} from "./screens/MealDetailsScreen/MealDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {FavoritesScreen} from "./screens/FavoritesScreen/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import {FavoritesContextProvider} from "./store/context/favorites-context";
import {Provider} from "react-redux";
import {store}from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerActiveBackgroundColor: '#ecc5b0',
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: 'white'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => <Ionicons  size={size} color={color} name="list"/>
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        title: 'Favorites',
        drawerIcon: ({color, size}) => <Ionicons  size={size} color={color} name="star"/>
      }}/>
    </Drawer.Navigator>
  );
}

export default function App(){
  return <>
    <StatusBar style="dark" />
    {/*<FavoritesContextProvider>*/}
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
            headerBackTitle: 'Back'
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    {/*</FavoritesContextProvider>*/}
    </>
}
