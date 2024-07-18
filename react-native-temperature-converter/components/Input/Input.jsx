import {s} from './Input.style';
import {Text, TextInput, View} from "react-native";
export function Input ({defaultInput, onChange, unit}) {
  return (
    <View style={s.root}>
      <TextInput
        value={defaultInput.toString()}
        style={s.input}
        maxLength={4}
        placeholder="Type your temperature"
        onChangeText={ (text) => {
        onChange(text)
      }}/>
      <Text style={s.unit}>{unit}</Text>
    </View>
  )
}
