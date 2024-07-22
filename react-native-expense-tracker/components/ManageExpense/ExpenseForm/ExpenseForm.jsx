import {View, Text, Alert} from "react-native";
import {s} from './ExpenseForm.style'
import {Input} from "../Input/Input";
import {useState} from "react";
import {Button} from "../../UI/Button/Button";
import {current} from "@reduxjs/toolkit";

export const ExpenseForm = ({onCancel, onSubmit, submitButtonLabel, defaultValues}) => {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description :'',
      isValid: true
    }
  });
  const inputChangedHandler = (inputIdentifier,enteredValue) => {
    setInputValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: {value: enteredValue, isValid: true}
      }
    });
  }

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount.value.replace(',','.'),
      date: new Date(inputValues.date.value),
      description: inputValues.description.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert('Invalid Input', 'Please check your input values')
      setInputValues((current) => {
        return {
          amount: {value: current.amount.value, isValid: amountIsValid},
          date: {value: current.date.value, isValid: dateIsValid},
          description: {value: current.description.value, isValid: descriptionIsValid},
        }
      })
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInvalid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid

  return <><View style={s.form}>
    <Text style={s.title}>Your Expense</Text>
    <View style={s.inputsRow}>
      <Input
        label="Amount"
        style={s.rowInputStyle}
        invalid={!inputValues.amount.isValid}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: inputChangedHandler.bind(this, 'amount'),
          value: inputValues.amount.value,
        }}
      />
      <Input
        label="Date"
        style={s.rowInputStyle}
        invalid={!inputValues.date.isValid}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, 'date'),
          value: inputValues.date.value,
        }}
      />
    </View>
    <Input
      label="Description"
      invalid={!inputValues.description.isValid}
      textInputConfig={{
        multiline: true,
        onChangeText: inputChangedHandler.bind(this, 'description'),
        value: inputValues.description.value
      }}
    />
  </View>
  {formIsInvalid && (<Text style={s.errorText}>Invalid input values - please check your entered data!</Text>)}
  <View style={s.buttonContainer}>
    <Button
      mode="flat"
      onPress={onCancel}
      style={s.button}
    >Cancel</Button>
    <Button
      onPress={submitHandler}
      style={s.button}
    >{submitButtonLabel}</Button>
  </View>
  </>
}
