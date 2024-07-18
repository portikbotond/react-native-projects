import {Alert, ScrollView, Text, View} from 'react-native';
import {s} from './App.style';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Header} from "./components/Header/Header";
import {CardTodo} from "./components/CardTodo/CardTodo";
import {useEffect, useRef, useState} from "react";
import {Footer} from "./components/Footer/Footer";
import {ButtonAdd} from "./components/ButtonAdd/ButtonAdd";
import Dialog from 'react-native-dialog';
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";

let isFirstRender = true;
let isLoadUpdate = true;
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [inputValue, setInputValue] =useState('');
  const scrollViewRef = useRef();

  useEffect(() => {
    loadTodoList()
  }, []);

  useEffect(() => {
    if(!isLoadUpdate) {
      if(!isFirstRender) {
        saveTodoList();
      } else {
        isFirstRender = false
      }
    } else {
      isLoadUpdate = false
    }

  }, [todoList]);

  const loadTodoList = async () => {
    try {
      const value = await AsyncStorage.getItem('@todoList');
      if (value !== null) {
        setTodoList(JSON.parse(value) || []);
      }
    } catch (e) {
      alert(e);
    }
  };

  const saveTodoList = async () => {
    try {
      await AsyncStorage.setItem('@todoList', JSON.stringify(todoList));
    } catch (e) {
      alert(e);
    }
  };


  const renderTodoList = () => {
    return getFilteredList().map((todo) => {
      return <View key={todo.id} style={s.cardItem}>
        <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo}/>
      </View>
    })
  }

  const updateTodo = (todo) => {
    const tempTodo = {...todo, isCompleted: !todo.isCompleted};
    const updatedTodoList = [...todoList];
    const indexToUpdate = updatedTodoList.findIndex((t) => t.id === tempTodo.id);
    updatedTodoList[indexToUpdate] = tempTodo;
    setTodoList(updatedTodoList);
  }

  const getFilteredList = () => {
    switch (selectedTabName){
      case 'all':
        return todoList
      case 'inProgress':
        return todoList.filter((todo) => !todo.isCompleted)
      case 'done':
        return todoList.filter((todo) => todo.isCompleted);
    }
  }
  const deleteTodo = (todo) => {
    Alert.alert(
      'Delete todo',
      'Are you sure you want to delete this todo ?',
      [
        {text: 'Delete', style:"destructive", onPress: () => {
          setTodoList(todoList.filter((t) => t.id !== todo.id));
          }},
        {text: 'Cancel'},
      ])
  }

  const addTodo = () => {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    }
    setTodoList([...todoList, newTodo]);
    setInputValue('');
    setShowAddDialog(false);
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd();
    }, 300)
  }

  const renderAddDialog = () => {
    return <Dialog.Container visible={showAddDialog} onBackdropPress={() => setShowAddDialog(false)}>
      <Dialog.Title>Add todo</Dialog.Title>
      <Dialog.Description>
        Chose a name for your todo
      </Dialog.Description>
      <Dialog.Input onChangeText={(text) => setInputValue(text)} placeholder="Ex: Go to de dentist"></Dialog.Input>
      <Dialog.Button label="Cancel" color="grey" onPress={() => setShowAddDialog(false)}/>
      <Dialog.Button disabled={inputValue.length === 0} label="save" onPress={addTodo}/>
    </Dialog.Container>
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView ref={scrollViewRef}>
              {renderTodoList()}
            </ScrollView>
          </View>
          <ButtonAdd onPress={()=>setShowAddDialog(true)} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Footer selectedTabName={selectedTabName} onPress={setSelectedTabName} todoList={todoList} />
      </View>
      {renderAddDialog()}
    </>
  );
}
