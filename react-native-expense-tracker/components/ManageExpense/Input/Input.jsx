import {Text, TextInput, View} from "react-native";
import {s} from './Input.style'

export const Input = ({label, textInputConfig, style, invalid}) => {
  let inputStyles = [s.input];

  if(textInputConfig && textInputConfig.multiline) {
    inputStyles.push(s.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(s.invalidInput)
  }

  return <View style={[s.inputContainer, style]}>
    <Text style={[s.label, invalid && s.invalidLabel]}>{label}</Text>
    <TextInput
      style={inputStyles}
      {...textInputConfig}
    />
  </View>
}
