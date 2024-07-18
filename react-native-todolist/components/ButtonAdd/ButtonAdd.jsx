import {s} from './ButtonAdd.style';
import {TouchableOpacity, Text} from "react-native";
export const ButtonAdd = ({onPress}) => {
  return <TouchableOpacity onPress={onPress} style={s.btn}><Text style={s.text}>+ New todo</Text></TouchableOpacity>
}
