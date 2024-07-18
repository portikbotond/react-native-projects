import {s} from './StartGame.style'
import {TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";
import {PrimaryButton} from "../../components/UI/PrimaryButton/PrimaryButton";
import {useState} from "react";
import {Title} from "../../components/UI/Title/Title";
import {Card} from "../../components/UI/Card/Card";
import {InstructionText} from "../../components/UI/InstructionText/InstructionText";
export const StartGame = ({onPickNumber}) => {
  const [enteredValue, setEnteredValue] = useState('')

  const {width, height} = useWindowDimensions()
  const numberInputHandler = (enteredText) => {
    setEnteredValue(enteredText);
  }

  const resetInputHandler = () => {
    setEnteredValue('');
  }

  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredValue);

    if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
      Alert.alert('Invalid number!',
        'Number has to be a number betweeen 1 and 99',
        [{text: 'Okey', style:'destructive', onPress: resetInputHandler}]
      )
    } else {
      onPickNumber(choosenNumber);
    }

  }

  const marginTop = height < 500 ? 30: 100;

  return(
    <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="position">
        <View style={[s.rootContainer, {marginTop: marginTop}]} >
          <Title>Guess My Number!</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              value={enteredValue}
              style={s.input}
              maxLength={2}
              keyboardType={"number-pad"}
              onChangeText={numberInputHandler}
            />
            <View style={s.buttonsContainer}>
              <View style={s.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={s.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
);
}
