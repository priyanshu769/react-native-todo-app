import React, { useState } from 'react'
import {
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native'
import { Header, AddTodo, ListItem } from './components'

export default function App() {
  const [tasks, setTasks] = useState([
    { task: 'Practice Game.', _id: '0' },
    { task: 'Continue with React Native.', _id: '1' },
  ])

  const addNewTask = (task, setNewTask) => {
    if (task.length > 3) {
      setTasks((tasks) => [
        { task: task, _id: Math.random().toString() },
        ...tasks,
      ])
      setNewTask('')
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  const deleteTodo = (itemId) => {
    setTasks((tasks) => tasks.filter((todo) => todo._id !== itemId))
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addNewTask={addNewTask} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item._id}
              data={tasks}
              renderItem={({ item }) => (
                <ListItem deleteTodo={deleteTodo} item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 35,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
})
