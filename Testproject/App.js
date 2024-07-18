import React, { useState } from 'react';
import { Text, View, TextInput,Button, StyleSheet, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
 
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  
const addGoalHandler = goalTitle => {
  setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
}

const removeGoalhandler = goalId => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id !== goalId);
  })
}

    return (
      <View style={styles.screen}  >
        <Button  title="Add nNew Goal" />
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList 
        keyExtractor={(item, index) => item.id }
          data={courseGoals} 
          renderItem={itemData => <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalhandler}/>} />
          {/* <ScrollView>
          {courseGoals.map((goal) => <View key={goal}  style={styles.listItem}>
            <Text >{goal}</Text>
            </View>)}
            </ScrollView> */}
      </View>
    );
  }

const styles = StyleSheet.create({
  screen:{
    padding:50
  },

  
})