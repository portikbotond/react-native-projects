import {Text} from "react-native";
import {s} from './Title.style';

export const Title = ({children}) => {
  return <Text style={s.title}>{children}</Text>
}
