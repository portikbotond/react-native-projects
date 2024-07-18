import {Text, useWindowDimensions} from "react-native";
import {s} from './Txt.style';

export const Txt = ({children, style, ...restProps}) => {
  const {height} = useWindowDimensions();
  return <Text style={[s.text, style]} {...restProps}>{children}</Text>
}
