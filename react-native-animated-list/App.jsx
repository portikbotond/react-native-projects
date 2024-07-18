import {s} from './App.style';
import {Dimensions, LogBox, View} from "react-native";
import {List} from "./components/List/List";
import {useSharedValue} from "react-native-reanimated";

LogBox.ignoreLogs(["No native splash"]);

export default function App(){
  return <View style={{flex: 1}}>
    <List />
  </View>
}
