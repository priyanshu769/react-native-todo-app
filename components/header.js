import React from 'react'
import { StyleSheet, View, Text } from "react-native"

export const Header = () => {
    return (
    <View style={styles.header}>
        <Text style={styles.headerText}>TODOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 35,
        backgroundColor: '#f44b12',
        padding: 20
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    }
})