import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const ListItem = ({ deleteTodo, item }) => {
  return (
    <TouchableOpacity onPress={() => deleteTodo(item._id)}>
      <View style={styles.listItem}>
        <MaterialIcons name="delete" size={24} color="#333" />
        <Text style={styles.itemText}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#2b282a',
    color: '#000',
    fontSize: 24,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
      marginLeft: 10,
  }
})
