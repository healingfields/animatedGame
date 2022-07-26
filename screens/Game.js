import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

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

    const baseNumber = Math.floor(Math.random() * 100);
    const score = Math.floor(Math.random() * 100);
    const [choice, setChoice] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
            <Text style={styles.title}>Starting: {baseNumber}</Text>
            <Button onPress={() => setChoice('higher')} title='higher' />
            <Button onPress={() => setChoice('lower')} title='lower' />
        </View>
    )
}

export default Game