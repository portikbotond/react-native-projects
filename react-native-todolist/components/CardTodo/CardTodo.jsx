import {Text, TouchableOpacity, Image} from "react-native";
import {s} from './CardTodo.style';

const check = require('../../assets/images/check.png');


export const CardTodo = ({todo, onPress, onLongPress}) => {
  return <TouchableOpacity onLongPress={() => onLongPress(todo)} style={s.card} onPress={() => onPress(todo)}>
    <Text style={[s.title, todo.isCompleted && {textDecorationLine: 'line-through'}]}>{todo.title}</Text>
    {todo.isCompleted && <Image source={check} style={s.img}/>}
  </TouchableOpacity>
}
s
