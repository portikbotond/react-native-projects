import {Text} from "react-native";
import {s} from "./InstructionText.style";

export const InstructionText = ({children, style}) => {
  return <Text style={[s.instructionText, style]}>{children}</Text>
}
