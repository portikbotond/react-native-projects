import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ManageExpanses} from "./screens/ManageExpanses/ManageExpanses";
import {RecentExpanses} from "./screens/RecentExpanses/RecentExpanses";
import {AllExpanses} from "./screens/AllExpanses/AllExpanses";
import {GlobalStyles} from "./constants/styles";
import {Ionicons} from "@expo/vector-icons";
import {IconButton} from "./components/UI/IconButton/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return <BottomTabs.Navigator
    screenOptions={({navigation}) => ({
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => (
        <IconButton
          icon="add"
          size={24}
          color={tintColor}
          onPress={() => {
            navigation.navigate('ManageExpanse')
          }}
        />)
    })}
  >
    <BottomTabs.Screen
      name="RecentExpanses"
      component={RecentExpanses}
      options={{
        title: 'Recent Expanses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="hourglass" size={size} color={color} />
        )
      }}
    />
    <BottomTabs.Screen
      name="AllExpanses"
      component={AllExpanses}
      options={{
        title: 'All Expanses',
        tabBarLabel: 'All Expanes',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="calendar" size={size} color={color}/>
        )
      }}
    />
  </BottomTabs.Navigator>
}

export default function App(){
  return (
    <>
      <StatusBar  style='light'/>
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ExpensesOverview"
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500
              },
              headerTintColor: 'white',
              headerBackTitle: 'Back',
            }}
          >
            <Stack.Screen
              name="ExpansesOverview"
              component={ExpensesOverview}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ManageExpanse"
              component={ManageExpanses}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  )
}
