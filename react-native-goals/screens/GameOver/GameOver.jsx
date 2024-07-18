import {s} from './GameOver.style'
import {Image, Text, View} from "react-native";
import {Title} from "../../components/UI/Title/Title";
import {PrimaryButton} from "../../components/UI/PrimaryButton/PrimaryButton";

const success = require('../../assets/images/success.png')
export const GameOver = ({roundsNumber, userNumber, onStartNewGame}) => {
  return <View style={s.rootContainer}>
    <Title>GAME OVER!</Title>
    <View style={s.imageContainer}>
      <Image style={s.image} source={success} />
    </View>
    <Text style={s.summaryText}>Your phone needed <Text style={s.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={s.highlight}>{userNumber}</Text>.</Text>
    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
  </View>
}
