import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo'
    },
    title: {
        color: 'white'
    }
})

function Game() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
        </View>
    )
}

export default Game