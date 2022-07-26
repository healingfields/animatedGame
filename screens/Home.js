import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 150,
        backgroundColor: 'black'
    },
    title: {
        color: 'white'
    }
})

function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPress={() => navigation.navigate('Game')} style={styles.button}
            >
                <Text style={styles.title}>Start a Game!</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Home