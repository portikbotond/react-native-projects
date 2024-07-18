import {s} from './Footer.style';
import {Text, TouchableOpacity, View} from "react-native";

export const Footer = ({selectedTabName, onPress, todoList}) => {
  const conutByStatus = todoList.reduce((acc, todo) => {
    todo.isCompleted ? acc.done ++: acc.inProgress++;
    return acc
  }, {all: todoList.length, inProgress: 0, done: 0})
  const getTextStyle = (tabName) => {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? '#2F76E5' : 'black'
    }
  }
  return <View style={s.root}>
    <TouchableOpacity onPress={() => onPress('all')}><Text style={getTextStyle('all')}>All ({conutByStatus.all})</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => onPress('inProgress')}><Text style={getTextStyle('inProgress')}>In Progress ({conutByStatus.inProgress})</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => onPress('done')}><Text style={getTextStyle('done')}>Done ({conutByStatus.done})</Text></TouchableOpacity>
  </View>
}
