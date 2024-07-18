import {Text, View} from "react-native";
import {s} from './GuessLogItem.style'

export const GuessLogItem = ({roundNumber, opponentsGuess}) => {
  return <View style={s.listItem}>
    <Text style={s.itemText}>#{roundNumber}</Text>
    <Text style={s.itemText}>Opponents Guess: {opponentsGuess}</Text>
  </View>
}
