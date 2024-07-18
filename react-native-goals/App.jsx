import {StartGame} from "./screens/StartGame/StartGame";
import {s} from './App.style'
import {ImageBackground, SafeAreaView, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import {GameScreen} from "./screens/GameScreen/GameScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import Colors from "./constants/colors";
import {GameOver} from "./screens/GameOver/GameOver";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

const background = require('./assets/images/background.png')

export default function App(){
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const startGameHandler = (pickedNumber) => {
    setGameIsOver(false);
    setUserNumber(pickedNumber);
  }

  const gameOVerHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds( 0);
  }

  let screen = <StartGame onPickNumber={startGameHandler} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOVerHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={s.root}>
    <ImageBackground source={background} resizeMode="cover" style={s.root} imageStyle={s.imageStyle}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          {screen}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  </LinearGradient>
}
