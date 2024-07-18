import {s} from './GameScreen.style'
import {Alert, FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {NumberContainer} from "../../components/Game/NumberContainer/NumberContainer";
import {Title} from "../../components/UI/Title/Title";
import {PrimaryButton} from "../../components/UI/PrimaryButton/PrimaryButton";
import {Card} from "../../components/UI/Card/Card";
import {InstructionText} from "../../components/UI/InstructionText/InstructionText";
import {Ionicons} from '@expo/vector-icons';
import {GuessLogItem} from "../../components/Game/GuessLogItem/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if((direction === 'lower' && currentGuess < userNumber) ||(direction === 'greater' && currentGuess > userNumber)){
      Alert.alert('Dont lie!', 'You know this is wrong...', [{text: 'Sorry', style: 'cancel'}])
      return;
    }
    if(direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prev => [newRndNumber, ...prev]);
  }

  const guessRoundsListLength = guessRounds.length

  return <View style={s.container}>
    <Title>Opponent's Guess!</Title>
    <NumberContainer>{currentGuess}</NumberContainer>
    <Card>
      <InstructionText style={s.instructionText}>Higher or lower?</InstructionText>
      <View style={s.buttonsContainer}>
        <View style={s.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="remove" size={24} />
          </PrimaryButton>
        </View>
        <View style={s.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name="add" size={24} />
          </PrimaryButton>
        </View>
      </View>
    </Card>
    <View style={s.listContainer}>
      {/*{guessRounds.map((guessRound, index) => <Text key={guessRound}>{guessRound}</Text>)}*/}
      <FlatList
        data={guessRounds}
        renderItem={(itemData) =>
          <GuessLogItem roundNumber={guessRoundsListLength - itemData .index} opponentsGuess={itemData.item} />
      }
        keyExtractor={(item) => item}
      />
    </View>
  </View>
}
