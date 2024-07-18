import {s} from './App.styles';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Text, View, ImageBackground} from 'react-native';
import {Input} from "./components/Input/Input";
import {useEffect, useState} from "react";
import {DisplayTemperature} from "./components/DisplayTemperature/DisplayTemperature";
import {convertTemperatureTo, getOppositeUnit, isIceTemperature, UNITS} from "./utils/temperature";
import {ButtonConvert} from "./components/ButtonConvert/ButtonConvert";

const hotBackground = require('./assets/images/hot.png');
const coldBackground = require('./assets/images/cold.png');

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState(UNITS.celsius);
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    if(isIceTemperature(inputValue, currentUnit)) {
      setCurrentBackground(coldBackground);
    }else {
      setCurrentBackground(hotBackground)
    }
  }, [currentUnit, inputValue]);
  const getConvertedTemperature = () => {
    if(isNaN(inputValue)) {
      return '';
    }
    return convertTemperatureTo(inputValue, getOppositeUnit(currentUnit)).toFixed(1)
  }

  return (
    <ImageBackground style={s.backgroundImage} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature unit={getOppositeUnit(currentUnit)} temperature={getConvertedTemperature()} />
            <Input onChange={setInputValue} defaultInput={inputValue} unit={currentUnit} />
            <ButtonConvert unit={currentUnit} onPress={() => {
              setCurrentUnit(getOppositeUnit(currentUnit))
            }} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
