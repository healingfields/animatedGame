import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white'
    }
})

function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home screen</Text>
            <Button onPress={() => navigation.navigate('Game')} title='start game!' />
        </View>
    )
}

export default Home