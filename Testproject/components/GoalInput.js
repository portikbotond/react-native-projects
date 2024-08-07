import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native'; 

const GoalInput = props => {
  const [enteredGaol, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText)
  }
    return(
      <Modal visible={false}>
        <View 
          style={styles.inputContainer}>
          <TextInput 
            placeholder="Course Goal" 
            style={styles.input}
            onChangeText={goalInputHandler}
          />
          <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGaol)}/>
        </View>
        </Modal>
    )
}

const styles= StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
      },
      input:{ 
        width:'80%', 
        borderColor:"black", 
        borderWidth:1, 
        padding:10
      }
})

export default GoalInput