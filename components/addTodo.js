import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export const AddTodo = ({ addNewTask }) => {
  const [newTodo, setNewTodo] = useState('')
  return (
    <View>
      <TextInput
        onChangeText={(val) => setNewTodo(val)}
        value={newTodo}
        style={styles.taskInput}
        placeholder="Add a new task..."
      />
      <Button
        color="#f44b12"
        onPress={() => addNewTask(newTodo, setNewTodo)}
        title="Add Task"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  taskInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#2b282a',
    paddingBottom: 5,
    marginBottom: 20,
  },
})
